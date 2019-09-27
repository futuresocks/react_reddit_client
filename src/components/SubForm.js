import React, { useState } from "react";

export default function SubForm({ handleSubmit }) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleSubmit(input);
    setInput("");
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter a sub-reddit"
        value={input}
      />
      <input type="submit" value="Subscribe" />
    </form>
  );
}
