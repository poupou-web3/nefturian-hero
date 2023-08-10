import Image from 'next/image'
import FetchImage from '../components/FetchImage';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="relative z-10 text-6xl font-bold text-center">
          <a>Nefturian Hero </a>
        </h1>
      </div>

    {/* Input text box */}
    <div className="relative flex flex-col items-center justify-between w-full max-w-2xl p-4 mx-auto mt-24 bg-white rounded-lg shadow-lg dark:bg-neutral-800">
      <a>To discover your nefturian input your Ethereum address </a>
      <textarea className="w-full h-16 p-2 mb-2 text-base text-gray-700 placeholder-gray-600 bg-gray-100 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:bg-neutral-700 dark:text-neutral-100 dark:placeholder-neutral-200 dark:border-neutral-600" placeholder="Ethereum address"></textarea>

      <button className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ">Mint</button>
    
    </div>

    {/* Fetch backend api to get the id of the nefturian */}


    <FetchImage id={101} />

    </main>
  )
}
