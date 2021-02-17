import React from "react";
import Download from "./Download";
const Card = (props) => {
  const tags = props.image.tags.split(",");
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg ">
      <img src={props.image.webformatURL} className="w-full" />
      <div className="px-5 pt-5 flex justify-center flex-col">
        <p>Photo by:</p>
        <div className="font-bold text-blue-500 text-xl flex justify-center">
          {props.image.user}
        </div>
        <ul>
          <li>
            <strong>Views :</strong>
            {props.image.views}
          </li>
          <strong>Downloads :</strong>
          {props.image.downloads}
          <li>
            <strong>Likes :</strong>
            {props.image.likes}
          </li>
          {/* <li>
            <strong>Likes :</strong>
            {props.image.largeImageURL}
          </li> */}
        </ul>
        <button
          onClick={() => Download(props.image.largeImageURL)}
          className=" flex justify-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded  items-center mt-2 mx-10"
        >
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download</span>
        </button>
      </div>
      <div className="px-1 py-5  flex justify-evenly">
        {tags.map((data, index) => (
          <span
            key={index}
            className=" bg-gray-200 rounded-full px-5 py-1 font-semibold text-gray-600 mr-1"
          >
            #{data}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
