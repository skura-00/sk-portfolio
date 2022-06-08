import React from 'react';
import WebLink from './webLink';
import IntroSpace from './IntroSpace';
import MediaQuery from 'react-responsive';

const About = (props) => {
  return (
    <>
    {/* For Desktop / Laptop */}
    {/* <MediaQuery minWidth={1224}> */}
      <div style={{paddingTop: '30vw',}}>
        <div style={titleStyle}>About</div>
        <div style={rectStyle}>
          <img src="https://www.sk-my-portfolio.com//img/sachi.JPG" alt='img' style={{marginTop:'3vw',width:'10vw',borderRadius:'50%'}}></img>

          <div style={{fontSize:'4vw', fontWeight:'bold', marginTop:'1vw'}}>
            {props.name}
          </div>
          
          <div style={{fontSize:'2.1vw',marginTop:'2vw'}}>
            {props.from}<br/>
            {props.occupation}
          </div>
            
        </div>
        <div style={{ textAlign:'left', marginTop:'20vw', marginLeft:'15vw', marginRight:'15vw'}}>
          <h1>Education:</h1>
          <p style={pStyle}>{props.edu}</p>
          
          <h2>{props.favTtl}</h2>
          <p style={pStyle}>{props.favD}</p>
        </div>
          <IntroSpace url="https://www.sk-my-portfolio.com/GroupProject2221/index.html" img="https://www.sk-my-portfolio.com/img/DB page.jpeg" title="Data Base Systems Group Project" description="alsdmc;owiesfldka;sei" />

        <div style={{ textAlign:'left', marginTop:'20vw', marginLeft:'15vw', marginRight:'15vw'}}>
          <h1>Other:</h1>
          <ul style={pStyle}>
            <li>Burnaby Oakeys U17 (Volunteer) / An assistant softball coach</li>
            <li>Mana Sports Academy / An assistant softball coach</li>
            <li>Progrit / A Shadowing Advisor (株式会社プログリット)</li>
          </ul>

          <h2>🥎 Coaching:</h2>
          <p style={pStyle}>I have been playing softball since I was 7. On the day I came to Vancouver, I joined the Burnaby Oakeys U19 team and played for a year.<br/>
          From summer of 2020, I am coaching as a volunteer assistant coach.</p>
          <br/>
          <br/>
          <h3>Contact: sakura39.081201@gmail.com</h3><br/>
          <div style={{display:'flex'}}>
            <WebLink url={"https://www.instagram.com/msa_fastpitch_2020/"} title={'MSA Fastpitch'} />

            <WebLink url={"https://www.instagram.com/u17b_oakeys/"} title={'Bunaby Oakeys U17'} />
          </div>
        </div>
      </div>
    {/* </MediaQuery> */}
      
    </>

  );
}

About.defaultProps = {
  name: 'Sachi Kurata / 倉田沙智',
  from: 'Toyama, Japan',
  occupation: 'CS Student / Assistant Softball Coach',
  edu: 'Associate degree of Science in Computer Science / Langara College (BC, Canada)',
  favTtl: '📚 My favorite class: Data Base Systems',
  favD: 'I learnt how to design and build databases using mySQL. In the group project, I designed a student club database and created a simple webpage using mySQL, HTML, CSS, and PHP with my groupmate.※The database is not connected to DBMS.'
}

const pStyle = {
  fontSize: '2vw',
  lineHeight: '1.6',
  marginLeft:'3vw'
}

const titleStyle = {
  fontFamily: 'Arial',
  fontWeight: 'bold',
  fontSize: '4vw',
  textAlign: 'center',
  color: '#000000',
  marginBottom: '5vw'
};

const rectStyle = {
  fontFamily: 'Arial',
  textAlign: 'center',
  lineHeight:'1.6',

  margin: '0 auto',
  width: '75%',
  height: '38vw',
  background: '#FFFFFF',
  border: '1px solid #C7C7C7',
  boxSizing: 'border-box',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};

export default About