import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  margin-left: -20px;
  .photo {
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    margin-top: 20px;
    vertical-align: middle;
    width: 100%;
  }
`;

const MainFacebook = () => (
  <Wrapper>
    <div>
      <img className="photo" alt="can't load the image" src={require('../images/1fb.png')}/>
      <img className="photo" alt="can't load the image" src={require('../images/2fb.png')}/>
      <img className="photo" alt="can't load the image" src={require('../images/3fb.png')}/>
    </div>
  </Wrapper>
);

export default MainFacebook;
