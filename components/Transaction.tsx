
import { Box,Radio } from "@material-ui/core";

import React from 'react';

// import '../styles/index.scss';

function Transaction(props) {
    const [paymentValue, setPaymentMethod] = React.useState('ETH');
    const [cryptoAmountValue, setCryptoAmount] = React.useState('0');

    const handleChangePaymentMethod = (event) => {
        setPaymentMethod(event.target.value);
    };
    const handleChangeAmount = (event) => {
        props.setAmount(event.target.value);
        setCryptoAmount('0.000000');
    };

    return  <Box className='card-content'>
                <Box className='grey-border1' mt={2} pb={1.3}>
                    <Box className='font4' component='span'>Amount in ATRI:</Box>
                    <input className='card-input font4 text-right' defaultValue='0' onChange={handleChangeAmount}/>
                </Box>
                <Box className='grey-border1' mt={2} pb={1.3}>
                    <Box className='font4' component='span'>Payment method:</Box>
                    <Box className='float-right radio-group font4'>
                        <Radio
                            checked={paymentValue === 'ETH'}
                            onChange={handleChangePaymentMethod}
                            value="ETH"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <Box component='span'>ETH</Box>
                        <Radio
                            checked={paymentValue === 'USDT'}
                            onChange={handleChangePaymentMethod}
                            value="USDT"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'B' }}
                        />
                        <Box component='span'>USDT</Box>
                    </Box>
                </Box>
                <Box className='grey-border1' mt={2} pb={1.3}>
                    <Box className='font4' component='span'>Amount in crypto:</Box>
                    <Box className='float-right' component='span'>
                        <Box component='span'>{cryptoAmountValue}</Box>{'\u00a0'}
                        <Box className='eth-string' component='span'>{paymentValue}</Box>
                    </Box>
                </Box>
            </Box>
    ;
}

export default Transaction;