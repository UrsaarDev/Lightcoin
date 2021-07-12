
import { Box,Button } from "@material-ui/core";
import React from 'react';
import { useStore } from "../store";
import { addressPreview } from "../lib/utils";
// import '../styles/index.scss';

const Header = (props) => {
    const { isLoggedIn, selectedAddress,  connectWallet } = useStore();
    const baseUrl = "http://localhost:3000/"
    return  <Box className='header'>
                <Box className='logo'>
                    <a href='/'>
                        <img alt='' src={baseUrl + 'image/logo.png'} />
                    </a>
                    <Button className='font2' variant="outlined" color="secondary" onClick={async () =>{
                        connectWallet();
                    }}>
                        {isLoggedIn ? addressPreview(selectedAddress) : "Connect"}
                    </Button>
                </Box>
            </Box>
    ;
}

export default Header;