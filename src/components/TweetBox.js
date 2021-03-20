import React, {useState} from 'react'
import styled from 'styled-components'
import { Button, Avatar } from "@material-ui/core";
import ScheduleIcon from '@material-ui/icons/Schedule';
import GifIcon from '@material-ui/icons/Gif';
import SentimentSatisfiedRoundedIcon from '@material-ui/icons/SentimentSatisfiedRounded';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import db from '../database/firebase'

export default function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
             displayName:'sean_orj',
             username:'UGuy0',
             verified: true,
             text: tweetMessage,
             image: tweetImage,
             avatar: 'https://images.unsplash.com/photo-1597809259188-0e5ffcbb0ba9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        });

        setTweetMessage('')
        setTweetImage('')
    }


    return (
        <Wrapper>
            <form onSubmit={sendTweet}>
                <div className="tweetBox__input">
                <Avatar />
                <input 
                    placeholder="what's on your mind ?" 
                    type="text"
                    value={tweetMessage}
                    onChange={e => setTweetMessage(e.target.value)}/>
                </div>

                <input 
                    type="text"
                    className="tweetBox_input_btn"
                    placeholder='Enter image Url'
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}/>

            <div className="tweetBox__btn">
                <div className="tweet__btn">
                    <PermMediaOutlinedIcon/>
                    <GifIcon/>
                    <PollOutlinedIcon/>
                    <SentimentSatisfiedRoundedIcon/>
                    <ScheduleIcon />
                </div>
                <Button type='submit' className='tweetBox__tweetButton'>Tweet</Button>
            </div>
            </form>
           
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-bottom: 10px;
    border-bottom: 8px solid var(--twitter-background);
    padding-right: 10px;

    form {
        display: flex;
        flex-direction: column;
    }

    .tweetBox__input {
        display: flex;
        padding: 25px;

        input {
            flex: 1;
            border: none;
            outline: none;
            font-size: 20px;
            padding: 0 8px;
        }
    }

    .tweetBox__btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .tweet__btn {
         margin-left: 45px;
    }

    .MuiSvgIcon-root {
        font-size: 25px;
        padding: 5px 10px;
        color: var(--twitter-color);
        cursor: pointer;
    }

    .MuiSvgIcon-root:hover{
        background: var(--twitter-background);
        border-radius: 50px;
    }

    .tweetBox__tweetButton {
        background-color: var(--twitter-color) !important;
        border: none !important;
        color: #fff !important;
        font-weight: 900 !important;
        text-transform: inherit !important;
        border-radius: 30px !important;
        height: 40px !important;
    }

    .tweetBox_input_btn {
        margin: 0 10px;
        border: none;
        outline: none;
        input {
            border: none;
            outline: none;
        }
    }


`

