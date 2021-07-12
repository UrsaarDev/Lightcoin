
import { Box } from "@material-ui/core";
import React from 'react';
// import '../styles/index.scss';

function CardHeader(props) {
    const baseUrl = 'http://localhost:3000/'
    return  <Box className='card-header font3'>
                <Box component='span'>{props.title}</Box>
                <img alt='' className='action' src={baseUrl + props.src} />
            </Box>
    ;
}

export default CardHeader;