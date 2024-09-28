'use client'

import React, { useEffect, useState } from "react";
import Table from "./table/Table";
import { InputText } from 'primereact/inputtext';

const Stats = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        const mappedData = data.map(user => ({
          pair: { text: user.name, textPart: `@${user.username}` },
          performance: user.company.catchPhrase,
          pnl: user.phone,
          time: user.address.city,
          buyPrice: user.address.street,
          sellPrice: user.website,
          buy: { exchange: user.company.name },
          sell: { exchange: user.company.bs }
        }));

        setProducts(mappedData);
        setFilteredProducts(mappedData);  // Initially show all data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = products.filter(product => {
        // Global Search
        return (
          product.pair.text.toLowerCase().includes(searchQuery.toLowerCase()) || // Name search
          product.pair.textPart.toLowerCase().includes(searchQuery.toLowerCase()) || // Username search
          product.performance.toLowerCase().includes(searchQuery.toLowerCase()) ||  // Catchphrase search
          product.pnl.toLowerCase().includes(searchQuery.toLowerCase()) ||  // Phone search
          product.time.toLowerCase().includes(searchQuery.toLowerCase()) ||  // City search
          product.buyPrice.toLowerCase().includes(searchQuery.toLowerCase()) ||  // Street search
          product.sellPrice.toLowerCase().includes(searchQuery.toLowerCase()) ||  // Website search
          product.buy.exchange.toLowerCase().includes(searchQuery.toLowerCase()) ||  // Company search
          product.sell.exchange.toLowerCase().includes(searchQuery.toLowerCase())   // Business search
        );
      });
      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [searchQuery, products]);

  const columns = [
    { field: "pair", header: "NAME/USERNAME" },
    { field: "performance", header: "CATCHPHRASE" },
    { field: "pnl", header: "PHONE" },
    { field: "time", header: "CITY" },
    { field: "buyPrice", header: "STREET" },
    { field: "sellPrice", header: "WEBSITE" },
    { field: "buy", header: "COMPANY" },
    { field: "sell", header: "BUSINESS" },
  ];

  return (
    <>
      <div className="w-full flex justify-end items-center">
        <InputText 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Users"
          className="w-[150px] h-auto bg-blue-700 text-white p-4 rounded-[10px]"  // Add Tailwind or PrimeReact styles as needed
        />
      </div>

      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <Table data={filteredProducts} columns={columns} />
      )}
    </>
  );
};

export default Stats;
