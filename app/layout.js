"use client";
import { Inter } from "next/font/google";
import './global.css';
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    } else {
      alert("MetaMask is not installed");
    }
  };

  return (
    <html lang="en">
      <head>
        <title>My DApp</title>
      </head>
      <body className={inter.className}>
        <nav style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
          <button onClick={connectWallet}>
            {account ? `Connected: ${account.substring(0, 6)}...${account.substring(account.length - 4)}` : "Connect Wallet"}
          </button>
        </nav>
        {children}
      </body>
    </html>
  );
}
