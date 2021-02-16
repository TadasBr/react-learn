import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Wrapper = styled.div`
  position: relative;
  height: 45px;
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  background-color: whitesmoke;
  margin: 0 10px;
  .search {
    width: 100%;
    height: 45px;
    vertical-align: middle;
    border: none;
    float: right;
    font-weight: 300;
    font-size: 20px;
    background-color: transparent;
    color: grey;
    outline: none;
    font-family: sans-serif;
    padding-left: 60px;
  }
  .search::placeholder {
    color: lightgrey;
  }
  .srchbtn {
    height: 45px;
    width: 45px;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-size: 18px;
    color: #cccccc;
  }
`;
const SearchBox = () => (
  <Wrapper>
    <div>
      <input className="search" type="text" name="" placeholder="Search" />
      <div className="srchbtn">
        <FaSearch />
      </div>
    </div>
  </Wrapper>
);

export default SearchBox;
