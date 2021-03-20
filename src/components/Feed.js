import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Post from './Post'
import TweetBox from './TweetBox'
import db from '../database/firebase'
import FlipMove from 'react-flip-move'

export default function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    return (
        <Wrapper>
            <div className='feed__header'>
                <h2>Home </h2>
            </div>
            <TweetBox/>
            <FlipMove>
            {posts.map(post => (
                <Post key={post.text} {...post}/>
            ))}
            </FlipMove>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex: 0.5;
    overflow-y: scroll;
    min-width: fit-content;
    border-right: 1px solid var(--twitter-background);
    -ms-overflow-style: none; 
    scrollbar-width: none; 

    ::-webkit-scrollbar {
    display: none;
    }
   
    .feed__header {
        position: sticky;
        top: 0;
        background-color: white;
        z-index: 3;
        border: 1px solid var(--twitter-background);
        padding: 15px 2px;
        h2{
             font-size:20px;
             padding: 0 5px;
        }
    }

`