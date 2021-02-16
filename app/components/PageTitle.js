import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import PerTime from './PerTime';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PageTitle = () => (
  <Wrapper>
    <Title />
    <PerTime />
  </Wrapper>
);

export default PageTitle;
