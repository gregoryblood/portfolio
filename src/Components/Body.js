import React from 'react';
import styled from '@emotion/styled';
import Cards from './Cards';

const color = 'white';
const mainText = 'black';
const flavorText = "gray"
const flavorColor = "#20a3fa"

const Core = styled.div `
  position: relative;
  top: 91vh;
  margin: 40px auto 0 auto;
  padding: 0 0 200px 0;
  width: 100%;
  background: ${color};
  box-shadow: 0px -12px 24px 0px rgba(0,0,0,0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
const Section = styled.div `
  margin: 40px auto 40px auto;
  padding 50px 20px;
  overflow: visible;
  max-width: 900px;
  color: ${mainText};

`;
const Header = styled.div `
  font-weight: 800;
  font-size: 36px;
  text-align: center;
  font-weight: bold;
  @media(max-width: 768px) {
    text-align: left;
    font-size: 28px;
  }
`;
const Flavor = styled.div `
  padding: 10px 0;
  font-size: 20px;
  font-style: italic;
  color: ${flavorText};
  text-align: center;
  @media(max-width: 768px) {
    text-align: left;
  }
`;
const Text = styled.div `
  font-size: 24px;
`;
const CardArea = styled.div `
  margin: 0;
  padding: 0;
`;
export const Link = styled.a `
  text-decoration: none;
  color: ${flavorColor};
  &:hover {
    text-decoration: underline;
  }
`;
export const Buttons = styled.ul `
  list-style-type: none;
  margin: 40px 0 0 0;
  overflow: visible;
  text-align: center;
`;
export const HotButton = styled.button `
  text-decoration: none;
  border-style: solid;
  border-color: white;
  border-width: 4px;
  border-radius: 8px;
  
  display: inline-block;
  padding: 30px 50px;
  font-size: 22px;
  color: white;
  background-color: #1c1c1c;
  width: 200px;
  margin: 20px 40px 0 0px;
  outline:none;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  &:hover {
    cursor: pointer;
    border-color: ${flavorColor};
    color: black;
    background-color: white;
  }
`;
export const Disclaimer = styled.div `
  font-size: 24px;
  font-weight: bold;
  color: red;
  text-align: center;
  padding: 40px 0;
`;

const Input_ = styled.input `
  width: 100%;
  height: 40px;
  border: 2px solid ${flavorColor};
  border-radius: 8px;
  font-size: 24px;
  margin: 10px 0;
  padding: 4px 0px 4px 0px;
  &:focus {
    outline: none !important;
  }
`;
const Text_ = styled.textarea `
  width: 100%;
  height: 80px;
  border: 2px solid ${flavorColor};
  font-weight: 600;
  font-family: inherit;
  border-radius: 8px;
  font-size: 24px;
  margin: 10px 0;
  padding: 4px 0px 4px 0px;
  resize: none;
  overflow: auto;

  &:focus {
    outline: none !important;
  }
`;
const Submit_ = styled.a `
  display: block;
  text-align: center;
  width: 100%;
  border: 2px solid ${flavorColor};
  border-radius: 8px;
  background: white;
  margin: 20px auto;
  padding: 10px 0;
  font-weight: bold;
  font-size: 24px;
  color: black;
  text-decoration: none;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  &:hover {
    background-color: ${flavorColor};
    color: white;
    cursor: pointer;
  }
`;

export class Body extends React.Component{  
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      body: '',
    };
    this.handleSubject = this.handleSubject.bind(this);
    this.handleBody = this.handleBody.bind(this);
  }

  
  handleSubject(event) {
    this.setState({subject: event.target.value});
  }
  handleBody(event) {
    this.setState({body: event.target.value});
  }
  render() {
    return (
      <React.Fragment>
        <span id="top"/>
        <Core>
          <Section id="about">
            <Header>Who am I?</Header>
            <Flavor>Half human, half code monkey...</Flavor>
            <Text>
              I am a Senior at <Link href={'https://oregonstate.edu/'} target={'_blank'}>Oregon State University</Link> studying 
              Computer Science and I am eager to work in teams, and eventually lead them, to solve real world problems.<br/><br/>
              When I am away from the computer I enjoy fishing, camping, and thinking about my 
              computer. I also spend my free time making games with Unity or playing 
              them with my friends.<br/><br/>
              Check out my resumé for some technologies I have been working with.
            </Text>
            <Buttons>
              <a href="https://github.com/gregoryblood/gregoryblood.github.io/blob/master/website/resume.pdf" target="_blank"><HotButton>Resumé</HotButton></a>
              <a href="https://www.linkedin.com/in/gregoryblood" target="_blank"><HotButton>LinkedIn</HotButton></a>
              <a href="https://github.com/gregoryblood" target="_blank"><HotButton>GitHub</HotButton></a>
            </Buttons>
          </Section>
          <Section id="projects">
            <Header>What have I worked on?</Header>
            <Flavor>A bit of this, a byte of that...</Flavor>
            <CardArea>
              <Cards/>
            </CardArea>
          </Section>
          <Section id="contact">
            <Header>Send me a message!</Header>
            <Flavor>Especially if you have a job opportunity...</Flavor>
            <Text>Have a comment on the website? Have a specific question? Just want to talk? Email me!</Text>
              <Input_ value = {this.state.value} placeholder='Subject' onChange={this.handleSubject}/><br/>
              <Text_ rows="4" value={this.state.value} placeholder= 'Body' onChange={this.handleBody}/>
            <Submit_ href={`mailto: gregoryblood1998@gmail.com?subject=${this.state.subject}&body=${this.state.body}`}>Send!</Submit_> 
          </Section>
        </Core>
      </React.Fragment>
      
    );

  };
}

export default Body;
