import react, { useState } from "react";

const Test = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = { name: username, userage: age };
    // console.log(data);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        name="username"
        value={username}
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        name="age"
        value={age}
        type="text"
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default Test;
