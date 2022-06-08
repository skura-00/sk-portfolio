import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Welcome = () => {

  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <>
    <div style={{paddingTop: '28vw', alignItems: 'center',textAlign: 'center'}}>
      <div style={titleStyle}>Welcome!</div>  
      <div style={descStyle}>Thank you for visiting my portfolio website!<br/>This webpage is made using React / HTML / CSS. Please take a look at my works!!
      </div> 
    </div>
      
      
    </>

  );
}

const titleStyle = {
  fontSize: '13vw',
  fontWeight: 'bold',
  color: "#588996",
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};

const descStyle = {
  // textAlign: 'center',
  marginTop: '2vw',
  lineHeight: '3vw',
  fontSize: '2vw',
  color: "#000000",
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};

export default Welcome