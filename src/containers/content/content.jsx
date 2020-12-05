import React, { useState, useContext, useEffect } from "react";

const Content = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
  });

  const fetchItems = () => {};

  const displayShopItem = (itemList) => {};

  return <main></main>;
};

export default Content;
