import styled from "styled-components";

const SteamBackground = styled.div`
    min-height: 100%;
    height: auto;
    position: relative;
    min-width: 950px;
    background-color: #000000;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: ${({bg}) => `url('${bg}')`};
`

export default SteamBackground