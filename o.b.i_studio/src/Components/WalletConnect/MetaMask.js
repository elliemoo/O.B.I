import React, {useState} from 'react'
import {ethers} from 'ethers';
import './MetaMask.modules.css';
const MetaMask = () => {


  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');

  const connectWalletHandler = () => {
    if (window.ethereum){
      window.ethereum.request({method: 'eth_requestAccounts'}) // account api call (promise)
      .then(result => {
        accountChangeHandler(result[0]); // grabbing first account

      });
    } else {
      setErrorMessage('Install MetaMask');
    }
  }

  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount.toString());
  }
  
  const getUserBalance = (address) => {
    window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']}) // balance api call (promise)
    .then (balance => {
      setUserBalance(ethers.utils.formatEther(balance));
    })
  }

  // to handle when account or chain changes 
  const chainChangedHandler = () => {
    window.location.reload();

  }
  window.ethereum.on('accountsChanged', accountChangeHandler);
  window.ethereum.on('chainChanged', chainChangedHandler);
  

  return (
    <div className='walletCard'>
      <button onClick={connectWalletHandler}>Wallet Connect</button>
     {/* <div className='balanceDispaly'>
        <p1 style={{color: 'white'}}>Balance: {userBalance}</p1>
  </div>*/}
      {errorMessage}
    </div>
  )
}

export default MetaMask; 