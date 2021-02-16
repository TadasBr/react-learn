import React from 'react';
import styled from 'styled-components';
import SearchBox from './Searchbox';
import DropDown from './DropDown';

const Wrapper = styled.div`
  position: relative;
  padding: 40px;
  .top-content {
    width: calc(100% + 20px);
    margin: 0 -10px;
    justify-content: space-between;
    flex-direction: row;
    display: flex;
  }
`;
const Top = () => (
  <Wrapper>
    <div className="top-content">
      <SearchBox />
      <DropDown />
    </div>
  </Wrapper>
);

export default Top;
