import styled from "styled-components";
import React from "react";
import {Link} from "react-router-dom";

const Container = styled.div`
    padding: 0px 20px;
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



const coins = [
    {
        "id": "btc-bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "rank": 1,
        "is_new": false,
        "is_active": true,
        "type": "coin"
    },
    {
        "id": "eth-ethereum",
        "name": "Ethereum",
        "symbol": "ETH",
        "rank": 2,
        "is_new": false,
        "is_active": true,
        "type": "coin"
    },
    {
        "id": "bnb-binance-coin",
        "name": "Binance Coin",
        "symbol": "BNB",
        "rank": 3,
        "is_new": false,
        "is_active": true,
        "type": "coin"
    }
];




function Coins() {
    return (
        <Container>
            <Header>
                <Title>Coin List</Title>
            </Header>
            <Coinslist>
                {coins.map((coin) => (
                    <Coin key={coin.id}>
                        <Link to={`/${coin.id}`}>
                            {coin.name} &rarr;
                        </Link>
                    </Coin>

                ))}
            </Coinslist>
        </Container>
    );

}
export default Coins;