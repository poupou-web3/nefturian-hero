"use client";
import Image from 'next/image'
import React, { useState } from 'react';
import FetchImage from '../components/FetchImage';
import EthereumInput from '../components/EthereumInput';
import useFetchId from '../hooks/useFetchId';

export default function Home() {
  const [nefturianId, setNefturianId] = useState(null);  // State variable for Nefturian ID
  
  const HandleAddressReceived = (receivedAddress) => {
    console.log("Received Ethereum Address:", receivedAddress);
    
    const id = useFetchId(receivedAddress);
    console.log("Nefturian ID:", id);

    setNefturianId(id);  // Set the state variable
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="relative z-10 text-6xl font-bold text-center">
          <a>Nefturian Hero </a>
        </h1>
      </div>

      <EthereumInput onMint={HandleAddressReceived} />

      <FetchImage address={nefturianId} />

    </main>
  )
}
