import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit("cars");
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <h1>Search Bar : bond</h1>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
