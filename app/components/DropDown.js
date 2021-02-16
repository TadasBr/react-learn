import React from 'react';
import styled from 'styled-components';
import { FaChevronCircleDown } from 'react-icons/fa';

const Wrapper = styled.div`
  position: relative;
  margin: 0 10px;
}
& i{
  margin-left: 5px;
}
.dropbtn {
  border-radius: 10px;
  background-color: darkslateblue;
  font-family: sans-serif;
  color: white;
  height: 45px;
  padding: 0 20px;
  font-size: 16px;
  border: none;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  top: 100%;
  right: 0;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #d8deed;}

&:hover .dropdown-content {display: block;}

&:hover .dropbtn {background-color: dodgerblue;}
`;

const DropDown = () => (
  <Wrapper>
    <button className="dropbtn">
      Dropdown
      <FaChevronCircleDown />
    </button>
    <div className="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </Wrapper>
);

export default DropDown;
