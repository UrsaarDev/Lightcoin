import React, { useEffect, useState } from 'react'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Grid, Box } from "@material-ui/core";
import CardHeader from '../components/CardHeader';
import AvailableBalance from "../components/AvailableBalance";
import Transaction from "../components/Transaction";
import LockingPeriod from "../components/LockingPeriod";
import Header from "../components/Header";
import GetGeneralData from "./api/generalData";

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {

  const generalData = await GetGeneralData();

  return {
    props: {
      generalData,
    }
  }
}

const Index = ({
  generalData
}: InferGetStaticPropsType<typeof getStaticProps>) => {

    const [amountValue, setAmount] = React.useState('0');
    return (
        <Box className='container'>
            <Header />
            <Box className='content'>
                <Grid container>
                    <Grid item xs={12} sm={1} md={1} lg={2}></Grid>
                    <Grid item xs={12} sm={10} md={10} lg={8}>
                        <Box>
                            <Box>
                                <Grid className='card-two' container spacing={3}>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <CardHeader title='AVAILABLE BALANCE' src='image/action1.png'/>
                                        <AvailableBalance />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <CardHeader title='YOUR TRANSACTION' src='image/action2.png'/>
                                        <Transaction setAmount={setAmount}/>
                                    </Grid>
                                </Grid>
                                <Box className='card-period'>
                                    <CardHeader title='SELECT YOUR LOCKING PERIOD' src='image/action3.png'/>
                                    <LockingPeriod amountValue={amountValue} />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={1} md={1} lg={2}></Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Index;
