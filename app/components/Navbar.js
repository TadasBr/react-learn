import React, { useState } from 'react';
import styled from 'styled-components';
import Icons from './Icons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 122px;
  height: 550px;
  background: white;
  position: relative;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  box-shadow: 30px 0px 30px 0px rgba(0, 0, 0, 0.1);
  .theS {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    color: darkslateblue;
    height: 122px;
    width: 100%;
    font-size: 16px;
  }
  @media screen and (max-width: 600px) {
    // flex-direction: row;
    // width: 100%;
    // box-shadow: none;
    // height: 122px;
    // .theS {
    //   height: 100%;
    //   width: 122px;
    }
  }
`;

const Navbar = (navLinks, backGround, hoverBackGround, linkColor, logo) => {
  // const [hoverIndex, setHoverIndex] = useState(-1);
  // const [navOpen, setNavOpen] = useState(false);
  return (
    <Wrapper>
      <div className="theS">
        <h1>S</h1>
      </div>
      <Icons />
    </Wrapper>
  );
};

export default Navbar;
