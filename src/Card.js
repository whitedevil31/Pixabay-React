import React from "react";
const Card = (props) => {
  const tags = props.image.tags.split(",");
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg ">
      <img src={props.image.webformatURL} className="w-full" />
      <div className="px-5 py-5 ">
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
        </ul>
      </div>
      <div className="px-3 py-5  flex justify-evenly">
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
