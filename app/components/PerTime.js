import React from 'react';
import styled from 'styled-components';
import { FaSlidersH } from 'react-icons/fa/index';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  .perTimeContent {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 300px;
    justify-content: space-between;
  }
  .perTimeButton {
    background-color: white;
    font-family: sans-serif;
    border: none;
    color: black;
    font-weight: 700;
    padding: 7px 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.1);
    margin: 0px 8px;
    flex: 1;
    outline: none;
  }
  .perTimeButton:hover {
    color: white;
    background-color: #fe8f66;
  }
  .keistasButtonas {
    padding: 7px 10px;
    border: none;
    color: black;
    background-color: transparent;
    box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    outline: none;
  }
  .keistasButtonas:hover {
    color: white;
    background-color: #fe8f66;
  }
`;
const PerTime = () => (
  <Wrapper>
    <div className="perTimeContent">
      <button className="perTimeButton">Today</button>
      <button className="perTimeButton">Week</button>
      <button className="perTimeButton">Month</button>
    </div>
    <div className="keistasButtonas">
      <FaSlidersH />
    </div>
  </Wrapper>
);

export default PerTime;
