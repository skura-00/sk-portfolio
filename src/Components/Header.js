import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={titleStyle}>Protfolio Website</div>
      
      {/* オートスクロールができるようにしたい 
        <ul style={ulStyle}>
        <li><a href='#' style={optionStyle}>About</a></li>
        <li><a href='#' style={optionStyle}>Works</a></li>
        <li><a href='#' style={optionStyle}>Contact</a></li>
      </ul> */}
    </header>
  );
}

const headerStyle = {
  position: 'block',
};

const titleStyle = {
  position: 'absolute',
  // width: '430px',
  // height: '114px',
  // left: '3vw',
  // top: '1vw',
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '3vw',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  paddingTop: '1vw',
  paddingLeft: '0.5vw',

  color: '#000000',
  opacity: '0.4',
};

const ulStyle = {
  listStyleType: 'none',
  textAlign: 'right',
  display: 'flex',
  float: 'right',
  paddingRight: '3vw',
  paddingTop: '1vw',
  fontSize: '2vw',
};

const optionStyle = {
  textDecoration: 'none',
  color: 'black',
  display: 'inline',
  FontFamily: 'Arial',
  FontStyle: 'normal',
  AlignItems: 'center',
  TextAlign: 'center',
  margin: '0 3vw',
};

export default Header