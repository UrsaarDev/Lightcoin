
import React from 'react';
import { Box } from "@material-ui/core";

import PeriodRow from './PeriodRow';

// import '../styles/index.scss';

function LockingPeriod(props) {
    const [periodValue, setPeriod] = React.useState('Buy unlocked ATRI');

    return  <Box>
                <PeriodRow unlimited={true} amountValue={props.amountValue} periodValue={periodValue} setPeriod={setPeriod} value="Buy unlocked ATRI"/>
                <PeriodRow amountValue={props.amountValue} periodValue={periodValue} setPeriod={setPeriod} value="Lockup 1 month"/>
                <PeriodRow amountValue={props.amountValue} periodValue={periodValue} setPeriod={setPeriod} value="Lockup 3 month"/>
                <PeriodRow amountValue={props.amountValue} periodValue={periodValue} setPeriod={setPeriod} value="Lockup 6 month"/>
                <PeriodRow amountValue={props.amountValue} periodValue={periodValue} setPeriod={setPeriod} value="Lockup 12 month"/>
                <Box className='text-center' mt={1}>
                    <button className='submit-btn font1'>
                        BUY
                    </button>
                </Box>
            </Box>
    ;
}

export default LockingPeriod;