import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Container = styled.div`
    padding: 0px 20px;
    width:480px;
    margin:0 auto;
`;

const Header    = styled.header`
    height: 10vh;
    display:flex;
    justify-content: center;
    align-items: center;
`;

const Title     = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;

const Coinslist = styled.ul`
    
`;

const Coin      = styled.li`
    background-color: white;
    color: ${(props) => props.theme.textColor};
    BORDER-RADIUS: 15PX;
    MARGIN-BOTTOM: 10PX;
    padding:20px;
    font-size:20px;
    a {
      transition : color 0.2s ease-in;
      display:block;
    }
    &:hover{
      a {
        color:${(props) => props.theme.accentColor};  
      }
    }
    
`;

const Loading = styled.span`
  text-align:center;
`


/*
1) interface 만들기
2) fetch
3) usestate
4) useeffect
* */

interface CoinInterface {
    "id": string
    "name": string
    "symbol": string
    "rank": number
    "is_new": boolean
    "is_active": boolean
    "type": string
}


function Coins() {

    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async() => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            setCoins(json.slice(0,100));
            setLoading(false);
        })();
    }, []);


    return (
        <Container>
            <Header>
                <Title>Coin List</Title>
            </Header>
            {loading ?
                <Loading>
                    Loading...
                </Loading>
                     :
                <Coinslist>
                    {coins.map((coin) => (
                        <Coin key={coin.id}>
                            <Link to={`/${coin.id}`}>
                                {coin.name} &rarr;
                            </Link>
                        </Coin>

                    ))}
                </Coinslist>
            }
        </Container>
    );

}
export default Coins;