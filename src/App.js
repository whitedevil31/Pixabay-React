import React, { useState, useEffect } from "react";
import questions from "./data";
import Component from "./Component";
import Card from "./Card";
import Search from "./Search";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_KEY}&q=${searchTerm}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);

        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [searchTerm]);
  return (
    <div className="container mx-auto">
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

// <div
//   className="min-h-screen w-screen flex justify-center items-center flex-col-reverse lg:flex-row justify-around"
//   style={{
//     background: "linear-gradient(to bottom, #F0F4FD,#A1A3BA)",
//   }}
// >
//   <div className="mt-5 text-center lg:text-left">
//     <h1 className="font-black text-4xl">Fresh Healthy </h1>
//     <p className="font-extralight text-3xl lg:text-6xl">Delicious Salads</p>
//     <p className="font-semibold">We made fresh and healthy food</p>
//     <p className="font-semibold rounded-full px-10 py-3 shadow-lg  inline-block bg-indigo-600 uppercase text-lg tracking-wider  ">
//       Explore
//     </p>
//   </div>
//   <img
//     src={
//       "https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-1200x628-facebook-1200x628.jpg"
//     }
//     alt="food"
//     className="rounded w-screen lg:max-w-xl"
//   />
// </div>

// {/* {questions.map((question) => {
//   return <Component key={question.id} {...question}></Component>;
// })} */}
