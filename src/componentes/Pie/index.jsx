import styled from "styled-components"

const Footer = styled.footer`
    display: flex;
    height: 125px;
    background-color:#262626;
    justify-content: center;
    align-items: center;
    border-top: 4px solid #2271D1;
    box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7);
    img{
        height: 40px;
        width: 169px;
    }
`

const Pie = () => {
    return(
        <Footer>
            <img src="./img/logo.png" alt="logo" />
        </Footer>
    )
}

export default Pie

// /* Footer */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 0px;
// gap: 787px;

// position: absolute;
// width: 1443px;
// height: 125px;
// left: -3px;
// bottom: 0px;

// background: rgba(0, 0, 0, 0.9);
// border-top: 4px solid #2271D1;
// box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7);


// /* LogoMain */

// width: 168.45px;
// height: 40px;


// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;


// /* image 1 */

// position: absolute;
// left: 0%;
// right: 0%;
// top: 0%;
// bottom: 0%;

// background: url(image);
