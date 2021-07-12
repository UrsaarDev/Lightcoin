
import { Box } from "@material-ui/core";
import React from 'react';
import { useStore } from "../store";

const AvailableBalance = (props) => {
    const { ethBalance, usdtBalance } = useStore();
    return  (
        <Box className='card-content'>
            <Box className='grey-border1' mt={2} pb={1.3}>
                <Box className='font4' component='span'>Available ETH balance:</Box>
                <Box className='card-input' component='span'>{ethBalance}</Box>
            </Box>
            <Box className='grey-border1' mt={2} pb={1.3}>
                <Box className='font4' component='span'>Available USDT balance:</Box>
                <Box className='card-input' component='span'>{usdtBalance}</Box>
            </Box>
            <Box className='grey-border1' mt={2} pb={1.3}>
                <Box className='font4' component='span'>Available ATRI balance:</Box>
                <Box className='card-input' component='span'>0</Box>
            </Box>
        </Box>
    );
    
}

export default AvailableBalance;