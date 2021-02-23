import React from 'react';
import styled from '@emotion/styled';
import whattowear from '../Images/whattowear.png';
import ships from '../Images/ships.png';
import mb3 from '../Images/mb3.png';
import kg1 from '../Images/kg1.PNG';
import ph1 from '../Images/ph1.jpg';
import mm1 from '../Images/mm1.png';
import osu from '../Images/osu.PNG';
import { NavLink } from 'react-router-dom';

const CardArea = styled.div`
  display: flexbox;
  display:-webkit-flex;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  align-items: center;

  @media(max-width: 768px) {
    justify-content: center;
  }
`;
const Card = styled(NavLink)`
  text-decoration: none;
  background: transparent;
  width: 300px;
  height: 200px;
  display: block;
  &:hover {
    cursor: pointer;
  }
`;
const Img = styled.img `
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  transition-duration: 0.6s;
  -webkit-transition-duration: 0.6s;
  object-fit: cover;
  &:hover {
    opacity: 0.35;
    filter: blur(8px);
    -webkit-filter: blur(4px);
  }
  
`;
const CardTitle = styled.div `
  z-index: 1;
  position: relative;
  top: -80%;
  font-size: 28px;
  font-weight: 800;
  color: black;
`;
const Games = styled.div `
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 40px 0;
`;
const CardDescription = styled.div `
  z-index: 1;
  width: 80%;
  margin: 0 auto;
  position: relative;
  font-size: 32px;
  display: block;
  text-align: center;
  top: ${props => props.needSpace ? '-80%' : '-75%'};
  font-weight: 1000;
  color: black;
`;

function Cards() {  
  return (
    <React.Fragment>
      <CardArea>
        <Card to={`/capstone`}>
          <Img src={ osu }/>
          <CardDescription>
          The 'I' in 'Team'
          </CardDescription>
        </Card>
        <Card to={`/purehoney`}>
          <Img src={ph1}/>
          <CardDescription>
          A Website to Buy Honey
          </CardDescription>
        </Card>
        <Card to={`/musicmajik`}>
          <Img src={mm1}/>
          <CardDescription>
          Organize your Music... Fast
          </CardDescription>
        </Card>
        <Card to={`/whattowear`}>
          <Img src={whattowear}/>
          <CardDescription needSpace>
          The Most Fail-Safe Weather App
          </CardDescription>
        </Card>
      </CardArea>
      <Games>Games</Games> 
      <CardArea>
        <Card to={`/kings-gambit`}>
          <Img src={ kg1 }/>
          <CardDescription>
          Chess-like + Rogue-like
          </CardDescription>
        </Card>
        <Card to={`/master-blaster`}>
          <Img src={ mb3 }/>
          <CardDescription>
          A Retro Game with a Twist
          </CardDescription>
        </Card>
        <Card to={`/ships`}>
          <Img src={ships}/>
          <CardDescription>
          A Party Game for Pirates
          </CardDescription>
        </Card>
         
      </CardArea>
    </React.Fragment>
    
    
  );
}

export default Cards;