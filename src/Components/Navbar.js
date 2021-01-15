import React, {useEffect} from 'react';
import styled from '@emotion/styled';
import { Link } from "react-scroll";


const Item = styled.div`
    position: fixed;
    width: 100%;
    text-decoration: none;
    display: block;
    color: #00a3f5;
    text-align: center;
    font-size: 48px;
    font-weight: bold;
    text-decoration: none;
    border-radius: 50%;
    border-style: solid;
    border-color: #00a3f5;
    border-width: 4px;
    height: 30px;
    width: 30px;
    padding: 10px;
    margin: 10px;
    line-height: 23%;
    z-index: 10;
    transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s;
    @media(min-width: 769px) {
        top: 15px;
        right: 10px;
        &:hover {
            background-color: #00a3f5;
            color: white;
            cursor: pointer;
        }
    }
    @media(max-width: 768px) {
        bottom: 35px;
        left: 7px;
    }
`;
const BottomShadow= styled.div`
    position: fixed;
    box-shadow: 0 -16px 16px 16px white;
    width: 100%;
    top: 102vh;
    z-index: 10;
    background: red;
    height: 10px;
`;
export class Navbar extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { theposition: 0 };
      }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
      }
      
      componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
      }
      
      listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      
        const scrolled = winScroll / height
      
        this.setState({
          theposition: scrolled,
        })
        if (this.state.theposition > 0.1) {
            console.log ("here");
        }
      }
    render () {
        if (this.state.theposition > 0.1)
        return (
            <React.Fragment>
                <Link
                        activeClass="top"
                        to="top"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <Item><div>^ I</div></Item>
                        <BottomShadow/>
                </Link>
            </React.Fragment>
        );

        else {
            return (
            <React.Fragment>

            </React.Fragment>
            )
        }
    }; 
}

export default Navbar;