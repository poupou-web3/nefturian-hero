"use client";
import React, { useState, useEffect } from 'react';

const FetchImage = ({ id }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.nefturians.io/metadata/${id}`);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (data && data.image) return <img src={data.image} alt="Fetched Image" />;
  return <p>No image found.</p>;
};

export default FetchImage;