import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEllipsisH, FaHeart, FaComment, FaPaperPlane, FaRegClipboard, } from 'react-icons/fa';

const Wrapper = styled.div`
  margin-top: 20px;
  vertical-align: middle;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  .posTop {
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .poster {
    margin: 15px;
    display: flex;
    flex-direction: row;
  }
  .posterPhoto {
    width: 50px;
    height: 50px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 15px;
  }
  .photo {
    display: inline;
    margin: 0 auto;
    margin-left: -25%;
    height: 100%;
    width: auto;
  }
  .name {
    display: flex;
    text-align: center;
    color: black;
    margin-top: 17px;
    font-size: 16px;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
  .mainPhoto {
    height: 100%;
    width: 100%;
  }
  .bottom {
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .moreButton {
    margin: 28px;
  }
  .icons {
    margin: 28px;
    display: flex;
    flex-direction: row;
  }
  .icon {
    margin-right: 15px;
  }
  .rIcon {
    margin: 28px;
  }
  .icon:hover {
    transform: scale(1.2);
  }
  .clicked {
    color: red;
  }
`;

const InstagramPost = ({ children }) => {
  const [click, setClick] = useState(false);

  const toggler = () => (click ? setClick(false) : setClick(true));

  const like = () => (click ? 'icon clicked' : 'icon');

  return (
    <Wrapper>
      <div className="posTop">
        <div className="poster">
          <div className="posterPhoto">
            <img
              className="photo"
              alt="can't load the image"
              src={require('../images/png.jpg')}
            />
          </div>
          <div className="name">Kristina</div>
        </div>
        <div className="moreButton">
          <FaEllipsisH size="24px" />
        </div>
      </div>
      <div className="content">
        {children}
        <div className="bottom">
          <div className="icons">
            <div onClick={toggler} className={like()}>
              <FaHeart size="24px" />
            </div>
            <div className="icon">
              <FaComment size="24px" />
            </div>
            <div className="icon">
              <FaPaperPlane size="24px" />
            </div>
          </div>
          <div className="rIcon">
            <FaRegClipboard size="24px" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default InstagramPost;
