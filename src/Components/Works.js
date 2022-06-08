import React from 'react';
import LinkCard from './LinkCard';

const Works = () => {
  return (
    <>
      <div style={{paddingTop: '30vw',}}>
        <div style={titleStyle}>Works</div>
          

          {/* <LinkCard url={"https://www.sk-my-portfolio.com/website/src/index.html"} />

          <LinkCard url={"https://www.sk-my-portfolio.com/website/src/index.html"}  /> */}

        {/* <div style={{display:'flex', }}>
          <LinkCard title={'Laptop'} desc={"Blender"} img={"../../../worksImgs/laptop.png"} />
          <LinkCard url={"https://www.sk-my-portfolio.com/website/src/index.html"} title={'Simple Counter'} img={"https://www.sk-my-portfolio.com/website/imgs/simpleCounter.png"} />
          <LinkCard url={"https://www.sk-my-portfolio.com/website/src/index.html"} title={'Simple Counter'} img={"https://www.sk-my-portfolio.com/website/imgs/simpleCounter.png"} />
        </div> */}
      </div>
    </>

  );
}


const titleStyle = {
  fontFamily: 'Arial',
  fontWeight: 'bold',
  fontSize: '4vw',
  textAlign: 'center',
  color: '#000000',
  marginBottom: '5vw'
};

export default Works