import React from 'react'
import styled from 'styled-components'

export default function Options({Icon, text, active}) {

    return (
        <Wrapper className={`sidebar-opt ${active && 'sidebar-opt--active'}`}>
            <Icon />
            <h2>{text}</h2>
        </Wrapper>  
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin:0;
    padding:0;

    .MuiSvgIcon-root {
        font-size: 30px;
        padding: 12px 20px;
    }

    h2 {
        font-size: 20px;
        margin-right: 20px;
    }
`


