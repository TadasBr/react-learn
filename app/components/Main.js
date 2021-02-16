import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  margin-left: -20px;
}
.photo{
  box-shadow: 10px 10px 20px 0px rgba(0,0,0,.5);
  border-radius: 15px;
  margin-top: 20px;
  vertical-align: middle;
  width: 100%;
}
.column{
  margin-left: 20px;
  flex: calc(50% - 20px);
  max-width: calc(50% - 20px);
}
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
`;

const Main = () => (
  <Wrapper>
    <div className="column">
      <img className="photo" alt="can't load the image" src={require('../images/1_1000.jpg')} />
      <img className="photo" alt="can't load the image" src={require('../images/2_1000.jpg')} />
      <img className="photo" alt="can't load the image" src={require('../images/3_1000.jpg')} />
    </div>
    <div className="column">
      <img className="photo" alt="can't load the image" src={require('../images/4_1000.jpg')} />
      <img className="photo" alt="can't load the image" src={require('../images/5_1000.jpg')} />
      <img className="photo" alt="can't load the image" src={require('../images/6_1000.jpg')} />
    </div>
  </Wrapper>
);

export default Main;
