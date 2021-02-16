import React, { useState } from 'react';
import { FaHome, FaEnvelope, FaChartPie, FaCog } from 'react-icons/fa';
import styled from 'styled-components';
import { NavLink, BrowserRouter } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  color: lightgrey;
  font-size: 10px;
  width: 100%;
  flex: 1;

  .iconbtn {
    height: 60px;
    size: 15px;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    color: lightgrey;
  }
  .iconbtn:hover {
    color: darkslateblue;
    transform: scale(1.2);
  }
  .social {
    height: 60px;
    size: 15px;
    display: flex;
    align-items: center;
    color: darkslateblue;
  }
  .active {
    color: darkslateblue;
    transform: scale(1.2);
  }
  .inactive {
    color: lightgrey;
  }
`;
const Icons = () => {
  // const [appState, changeState] = useState({
  //   activeObject: 1,
  //   objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  // });
  // function toggleActive(index) {
  //   changeState({ ...appState, activeObject: appState.objects[index] });
  // }
  // function toggleActiveStyles(index) {
  //   if (appState.objects[index] === appState.activeObject) {
  //     return 'iconbtn active';
  //   }
  //   return 'iconbtn';
  // }
  return (
    <Wrapper>
      <BrowserRouter forceRefresh>
        <NavLink exact to="/" className="iconbtn" activeClassName="iconbtn active">
          <FaHome size="24px" />
        </NavLink>
        <NavLink to="/instagram" className="iconbtn" activeClassName="iconbtn active">
          <FaEnvelope size="24px" />
        </NavLink>
        <div className="social">
          <h1>Social</h1>
        </div>
        <NavLink to="/facebook" className="iconbtn" activeClassName="iconbtn active">
          <FaChartPie size="24px" />
        </NavLink>
        <NavLink to="/twitter" className="iconbtn" activeClassName="iconbtn active">
          <FaCog size="24px" />
        </NavLink>
      </BrowserRouter>
    </Wrapper>
  );
};

export default Icons;
