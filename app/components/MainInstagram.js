import React from 'react';
import styled from 'styled-components';
import InstagramPost from './InstagramPost';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  margin-left: -20px;
`;

const MainInstagram = () => (
  <Wrapper>
    <InstagramPost>
      <img className="mainPhoto" src={require('../images/8_1000.jpg')} />
    </InstagramPost>
    <InstagramPost>
      <img className="mainPhoto" src={require('../images/7_1000.jpg')} />
    </InstagramPost>
  </Wrapper>
);

export default MainInstagram;
