import React, { useState, useEffect } from "react";
import questions from "./data";
import "./index.css";
import Component from "./Component";
import Card from "./Card";
import Search from "./Search";
import Download from "./Download";
import Comp from "./Comp";
function App(props) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=19119977-7be1115a4b6e62c43822c7122&q=${searchTerm}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);

        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [searchTerm]);
  const dell = 56;

  return (
    <div className="container mx-auto h-screen">
      <Search searchText={(text) => setSearchTerm(text)} />
      {!loading && images.length === 0 && (
        <h1 className="font-bold text-center mx-auto text-4xl mt-32">
          No results found !
        </h1>
      )}
      <div className="grid grid-cols-1  sm:grid-cols-2 gap-2 md:grid-cols-2 gap-3 xl:grid-cols-3 gap-4  lg:grid-cols-3 gap-3">
        {images.map((data) => (
          <Card key={data.id} image={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
