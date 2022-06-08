import React from 'react'

const IntroSpace = (props) => {
  return (
    <>
      <div style={rectPC}>
        <img style={imgPC} src={props.img}></img>
        <div>
          <h2 style={titlePC}>{props.title}</h2>
          <p style={pPC}>{props.description}</p>
          
        </div>
        <a href={props.url} target="_blank" style={urlPC}></a>
      </div>
    </>
    
  )
}


IntroSpace.defaultProps = {
  url: "#",
  title: "Title",
  description: " ",
  img: "https://www.sk-my-portfolio.com//img/NoImage.png"
}

// pc ver.
const rectPC = {
  fontFamily: 'Arial',
  textAlign: 'center',
  lineHeight:'1.6',

  marginTop: '10vw',
  marginLeft: '10%',
  width: '80%',
  height: 'auto',
  background: '#FFFFFF',
  border: '1px solid #C7C7C7',
  boxSizing: 'border-box',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};

const pPC = {};
const titlePC = {};
const imgPC = {
  width:'25vw',
  height:'auto',
  margin:'1vw 1vw',
  border: '1px solid #C7C7C7',
};
const urlPC = {};


export default IntroSpace