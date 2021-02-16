import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #EEE;
  height: 100vh;
  border-radius: 10px;
  position:relative;
  overflow: hidden;
  .Container{
  top: 0px;
  left: 0px;
  background: white;
  border-radius: 20px;
  height: 550px;
  margin: 80px 150px 80px 150px;
  position: relative;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  @media screen and (max-width: 768px) {
  margin: 20px;
  }
`;

const BackGround = ({children}) => {
  return (
    <Wrapper>
      <div className="Container">
        {children}
      </div>
    </Wrapper>
  );
};

export default BackGround
