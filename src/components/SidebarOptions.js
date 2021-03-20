import React from 'react'
import { options } from '../utils/options';
import Options from './Option';
import { Button } from "@material-ui/core";
import styled from 'styled-components'

 export default function SidebarOptions() {
     return (
        <Wrapper>
          {options.map((opt, index) => ( 
              <Options key={index} {...opt}/>
            ))}
        <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
        </Wrapper>
     )
 }

 const Wrapper = styled.div`
    .sidebar__tweet{
        background-color: var(--twitter-color) !important;
        border: none !important;
        color: #fff !important;
        font-weight: 900 !important;
        text-transform: inherit !important;
        border-radius: 30px !important;
        height: 50px !important;
        margin-top: 20px !important;
    }
 `
