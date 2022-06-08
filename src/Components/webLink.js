import React from 'react'

const WebLink = (props) => {
  return (
    <>
      <div style={cardStyle}>
        <a href={props.url} target="_blank" style={{textDecoration: 'none', }}>
          <div style={{display:'flex'}}>
            <img src={props.img} alt="img" style={{width: '30%', height:'8vw', borderRadius: '5vw 0px 0px 5vw'}} />
            <div style={{fontSize:'2vw', minFontSize:'18px', marginTop:'1vw', marginLeft:'1vw', fontWeight:'bold', textAlign:'left', color:'black'}}> 
              { props.title }
            </div>
          </div>
          
        </a>
      </div>
    </>
    
  )
}


WebLink.defaultProps = {
  url: "#",
  title: "Title",
  img: "https://www.sk-my-portfolio.com//img/instagram.png"
}

const cardStyle = {
  marginLeft: '3vw',
  // minWidth: '150px',
  // minHeight: '150px',
  height: '8vw',
  width: '28vw',
  background: '#FFFFFF',
  border: '1px solid #717171',
  // boxSizing: 'border-box',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '5vw',
};

export default WebLink