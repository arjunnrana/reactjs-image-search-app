import { Typography } from "@mui/material";
import { useState } from "react";
import unsplashLogo from "../assets/unsplash.svg";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <Typography variant="h3">
        Search App: Using
        {/* <img src={unsplashLogo} alt="unsplash_logo" /> */}
        {"  "}
        Unsplash
      </Typography>
      <hr />

      <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
          <lable>Enter Search Term</lable>
          <input value={term} onChange={handleChange} />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
