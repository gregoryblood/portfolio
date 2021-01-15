import React from 'react';
import styled from '@emotion/styled';
import whattowear from '../Images/whattowear.png';
import ships from '../Images/ships.png';
import mb3 from '../Images/mb3.png';
import ph1 from '../Images/ph1.jpg';
import mm1 from '../Images/mm1.png';
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
    <CardArea>
        <Card to={`/masterblaster`}>
          <Img src={ mb3 }/>
          <CardDescription>
          A Retro Game with a Twist
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
        <Card to={`/ships`}>
          <Img src={ships}/>
          <CardDescription>
          A Party Game for Pirates
          </CardDescription>
        </Card>
        <Card to={`/whattowear`}>
          <Img src={whattowear}/>
          <CardDescription needSpace>
          The Most Fail-Safe Weather App
          </CardDescription>
        </Card>
        
        {/*
        <Card to={`/whattowear`}>
          <Img src={whattowear}/>
          <CardTitle>Oblivion</CardTitle>
          <CardDescription>
          Physics, puzzles, horror.
          </CardDescription>
        </Card>
        <Card to={`/whattowear`}>
          <Img src={whattowear}/>
          <CardTitle>Nature Simulation</CardTitle>
          <CardDescription>
          Nature simulating machine learning
          </CardDescription>
        </Card>
        <Card to={`/whattowear`}>
          <Img src={whattowear}/>
          <CardTitle>Affair of Honor</CardTitle>
          <CardDescription>
          A party game for competitive people
          </CardDescription>
        </Card>
        
        */}
        
    </CardArea>
  );
}

export default Cards;