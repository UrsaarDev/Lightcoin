
import React from 'react';

import { Box, Grid, Radio } from "@material-ui/core";

// import '../styles/index.scss';

function PeriodRow(props) {
    const handleChangePeriod = (event) => {
        props.setPeriod(event.target.value);
    };

    return  <Grid className='grey-border2' container spacing={3}>
                <Grid item md={6}>
                    <Radio
                        checked={props.periodValue === props.value}
                        onChange={handleChangePeriod}
                        value={props.value}
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <Box className='font4' component='span' pl={2.4}>{props.value}</Box>
                </Grid>
                <Grid className='text-right' item xs={12} sm={12} md={6}>
                    <Box className='font4' component='span' >You will receive {(props.unlimited) ? props.amountValue:parseInt(props.amountValue)} ATRI</Box>
                </Grid>
            </Grid>
    ;
}

export default PeriodRow;