import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOptions from './SidebarOptions';

export default function Sidebar() {
    return (
        <Wrapper className='sidebar'>
            <TwitterIcon className='sidebar__twitterIcon'/>
            <SidebarOptions />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border-right:1px solid var(--twitter-background);
    flex: 0.2;
    margin-top: 20px;
    padding: 0 20px;

    .sidebar__twitterIcon {
        color: var(--twitter-color);
        font-size: 30px !important;
        margin-left: 20px;
        margin-bottom: 20px;
    }
`
