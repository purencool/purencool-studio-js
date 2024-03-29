import React from 'react';

export default (props) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d='M22,46a22,22,0,1,1,24-20c0,10,18,26,26,26a22,22,0,0,1,22,30l-8-16h-18l-6,16l8,14a22,22,0,0,1-20-24c0-10-16-26-28-26z' fill='#38c4e0'/>
      <path d='M16,10h16l8,14l-8,14h-16l-8-14z'  fill={props.fill || "#9FA2B4"}/>
    </svg>
);
