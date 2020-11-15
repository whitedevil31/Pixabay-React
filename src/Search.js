import React, { useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    props.searchText(text);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden my-7 mx-auto mt-5">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-8 border-teal-800 py-2 mb-4">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent  border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image ....."
          />
          <button
            className="flex-shrink-0 bg-teal-200 hover:bg-teal-600 border-teal-500 text-sm border-2 text-black py-1 px-1 rounded"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
