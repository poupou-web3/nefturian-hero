"use client";
import React, { useState } from 'react';

const EthereumInput = ({ onMint }) => {
  const [address, setAddress] = useState('');

  const handleMintClick = () => {
    if (onMint) {
      onMint(address);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-between w-full max-w-2xl p-4 mx-auto mt-24 bg-white rounded-lg shadow-lg dark:bg-neutral-800">
      <a>To discover your nefturian input your Ethereum address </a>
      <textarea 
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full h-16 p-2 mb-2 text-base text-gray-700 placeholder-gray-600 bg-gray-100 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:bg-neutral-700 dark:text-neutral-100 dark:placeholder-neutral-200 dark:border-neutral-600" 
        placeholder="Ethereum address">
      </textarea>

      <button 
        onClick={handleMintClick}
        className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
        Mint
      </button>
    </div>
  );
};

export default EthereumInput;