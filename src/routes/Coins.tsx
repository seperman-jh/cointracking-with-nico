import styled from "styled-components";

const Title = styled.h1`
    color:${props => props.theme.accentColor};
`;

function Coins() {
    return (
        <>
            <h2>Welcome</h2>
            <Title>Coins</Title>
        </>
    );

}
export default Coins;