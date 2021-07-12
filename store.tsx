import {
  Context,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Web3Provider } from "@ethersproject/providers";
import { ethers } from 'ethers';
import dayjs from "dayjs";
import { hashMessage } from "@ethersproject/hash";
import web3Provider from "./services/web3Provider"
import { getUsdtBalance } from "./lib/web3";
 
const StoreContext: Context<Partial<any>> = createContext({});

export const useStore = () => useContext(StoreContext);

export const StoreWrapper = ({ children, userAddress, token }: any) => {
  const [provider, setProvider] = useState(null);
  const [ethBalance, setEthBalance] = useState<any>(null);
  const [usdtBalance, setUsdtEthBalance] = useState<any>(null);
  const [cluBalance, setCluBalance] = useState<any>(null);
  const [network, setNetwork] = useState<any>(null);
  const [selectedAddress, setSelectedAddress] = useState<string>(null);
  const [web3, setWeb3] = useState<Web3Provider>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const message = `Signing authentication request for CluCoin.com @ ${dayjs().format("MM/DD/YYYY @ H:mmA")}`;
  const hash = hashMessage(message + ":" + message.length.toString());

  useEffect(() => {
    // Verify Token and isLoggedIn
    if(localStorage.getItem('isLogin') == "true"){
      console.log('-------reconnect to wallet-------')
      reconnect();
    }

  }, []);

  const reconnect = async () => {
    await connectWallet();
  }

  const connectWallet = async () => {
    // Check if connection is already established
    console.log("----start wallet connection----");
    const _web3Provider = await web3Provider();
    const _provider = new ethers.providers.Web3Provider(_web3Provider);
    const signer = _provider.getSigner();
    const address = await signer.getAddress();
    const etherBalance = await _provider.getBalance(address);
    const network = await _provider.getNetwork();
    const usdtBalance = await getUsdtBalance(signer, address);
    // const signature = await signer.signMessage(`${message}:${message.length}`)
    // const isLogin = await login(address, signature, hash)

    await setProvider(_provider);
    await setEthBalance(ethers.utils.formatEther(etherBalance));
    await setUsdtEthBalance(ethers.utils.formatUnits(usdtBalance, 6));
    await setNetwork(network);
    await setSelectedAddress(address);
    await setIsLoggedIn(true);

    localStorage.setItem('isLogin', 'true');

    _web3Provider.on("disconnect", (error: { code: number; message: string }) => {
      console.log(error);
      disconnectWallet();
    });
    
    console.log(address, ethBalance, usdtBalance, network, cluBalance, hash);
  }

  const disconnectWallet = () => {
    console.log("------start disconnect to wallet-------");
    setIsLoggedIn(false);
    setProvider(null);
    setEthBalance(null);
    setNetwork(null);
    setSelectedAddress(null);
    localStorage.setItem('isLogin', 'false');
  }

  const value = {
    selectedAddress,
    isLoggedIn,
    ethBalance,
    usdtBalance,
    connectWallet,
    disconnectWallet,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
