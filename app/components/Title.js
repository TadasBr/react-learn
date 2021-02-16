import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #0b1a42;
  background-color: transparent;
  font-family: sans-serif;
  font-size: 18px;
  margin: -70px 0px 0px 0px;
  font-weight: 300;
`;
const Title = () => (
  <Wrapper>
    <h1>Your activity in social</h1>
  </Wrapper>
);

export default Title;
