import React, {forwardRef} from 'react'
import {Avatar} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import styled from 'styled-components';


const Post = forwardRef(
  ({displayName, username, verified, text, image, avatar}, ref) => {
    return (
        <Wrapper >
        <div ref={ref}> 
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon  className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
          </div>
        </Wrapper>
    )
}
)


const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    border-radius: 1px solid var(--twitter-background);
    padding-bottom: 10px;       

    .post__body{
        flex:1;
        padding: 10px;
        img {
            border-radius:20px;
            width: 100%;
        }
    } 

    .post__footer {
        display:flex;
        justify-content: space-between;
        margin-top: 10px;
    }

    .post__headerDescription {
      margin-bottom: 10px;
      font-size: 15px;
    }

    .post__badge {
        font-size: 14px !important;
        color: var(--twitter-color);
    }

    .post__headerSpecial {
        font-weight: 600;
        font-size: 12px;
        color: gray;
    }

    .post__avatar {
        padding: 20px;
    }
`

export default Post