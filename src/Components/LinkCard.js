import React from 'react'

const LinkCard = (props) => {
  return (
    <>
      <div style={cardStyle}>
          <a href={props.url} target="_blank" style={{textDecoration: 'none', }}>

            <div style={{display:'flex'}}>
              <img src={props.img} alt="img" style={{height:'23vw',marginLeft:'2.3vw',marginTop:'1vw'}} />
              <div style={{lineHeight:'1.6', textAlign:'center', paddingLeft:'5vw'}}>
                <div style={{fontSize:'3vw', minFontSize:'18px', marginTop:'1vw', fontWeight:'bold', color:'black'}}> 
                  { props.title }
                </div>
                <div style={{ fontSize:'1.5vw', minFontSize:'18px', paddingBottom: '1vw',color:'black'}}>
                  { props.lang }
                </div>
                <div style={{ fontSize:'1.5vw', minFontSize:'18px',color:'black'}}>
                  { props.desc }
                </div>
              </div>
            </div>
          </a>
      </div>
    </>
    
  )
}


LinkCard.defaultProps = {
  url: "#",
  title: "Title",
  lang: "HTML / CSS / JavaScript",
  desc: ' ',
  img: "https://www.sk-my-portfolio.com//img/NoImage.png"
}

const cardStyle = {
  height: '25vw',
  width: '80vw',
  marginTop:'3vw',
  marginBottom:'3vw',
  background: '#F8F7EE',
  border: '1px solid #717171',
  boxSizing: 'border-box',
  boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)',
  borderRadius: '5vw'
};

export default LinkCard