import React from 'react'
import styled from 'styled-components';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';


export default function Widget() {
    return (
        <Wrapper>
            <div className='widgets__input'>
            <SearchIcon className='widgets__searchIcon'/>
            <input type="text"  placeholder='search Twitter'/>
            </div>

            <div className="widgets__container">
            <h2>what's happening ? </h2>

            <TwitterTweetEmbed tweetId={'858551177860055040'}/>

            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="cleverqazi"
            options={{ height: 400 }}
            />

            <TwitterShareButton
            url={"https://facebook.com/cleverprogrammer"}
            options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
            />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex: 0.3;

    .widgets__input {
        display: flex;
        align-items: center;
        background-color: var(--twitter-background);
        padding: 10px;
        border-radius: 20px;
        margin-top: 10px;
        margin-left: 20px;
    }

    .widgets__input > input {
        border: none;
        outline: none;
        background-color: var(--twitter-background);
     }

    .widgets__searchIcon {
        color: gray;
    }

        .widgets__container {
        margin-top: 15px;
        margin-left: 20px;
        padding: 20px;
        background-color: #f5f8fa;
        border-radius: 20px;
        }

        .widgets__container > h2 {
        font-size: 18px;
        font-weight: 800;
        }

`
