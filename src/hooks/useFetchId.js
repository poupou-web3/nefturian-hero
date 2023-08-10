import { useState, useEffect } from 'react';


const useFetchId = (address) => {
  const [nefturianId, setNefturianId] = useState(null);
  useEffect(() => {
    const getId = async () => {
      try {
        const response = await fetch(`http://localhost:5000/id/${address}`);
        const data = await response.json();
        console.log("Nefturian ID:", data);
        if (data && data.id) {
          setNefturianId(data.id);
        }
      } catch (error) {
        console.error("Error fetching Nefturian ID:", error);
      }
    };
    getId();
  }, [address]);
  return nefturianId;
}

export default useFetchId;