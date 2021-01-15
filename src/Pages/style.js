import styled from '@emotion/styled'

export const Core = styled.div `
    top: 100px;
    position: relative;
    margin: 40px auto 0 auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background: white;
    overflow: visible;
    width: 100%;
`;
export  const Body = styled.div `
    padding: 20px 20px 200px 20px;
    margin: 0 auto;
    max-width: 900px;
`;
export const TitleBar = styled.div `
    width: 100%;
    height: 100%;
    background: #20a3fa;
    position: fixed;
    top: 0;
    left: 0;
    
`;
export const PTitle = styled.div `
    font-size: 54px;
    font-weight: 800;
    color: white;
    padding: 20px 20px 0 20px;
    @media(max-width: 768px) {
        text-align: center;
        font-size: 36px;
    }
`;
export const Header = styled.div `
    color: #20a3fa;
    font-size: 36px;
    margin: 25px 0 10px 0;
`;
export const Text = styled.div `
    font-size: 24px;
`;
export const Flavor = styled.div `
    padding: 0px 0 10px 0;
    font-size: 24px;
    font-style: italic;
    color: white;
    padding: 0px 20px 20px 20px;
    @media(max-width: 768px) {
        text-align: center;
        font-size: 24px;
    }
`;
export const Portal = styled.iframe `
    margin: 30px auto 30px auto;
    display: block;
    width: 90%;
    max-width: 800px;
    border-style: solid;
    border-width: 2px;
    border-color: black;
    border-radius: 8px;
    
`;
export const Img = styled.img `
    margin: 30px auto 30px auto;
    display: block;
    width: 90%;
    max-width: 800px;
    border-style: solid;
    border-color: black;
    border-width: 2px;
    border-radius: 8px;
    
`;
export const Tools = styled.div`
    margin: 10px 0; 
    font-style: italic;
    color: #525252;
    font-size: 18px;
`;
