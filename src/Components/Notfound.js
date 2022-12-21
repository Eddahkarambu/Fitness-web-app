import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h1>Oops! You seem to be lost.</h1>
      <h2>
        The page your looking for has been deleted or maybe does not exist
      </h2>
      <h3>Follow the link below</h3>
      <Link to="/Home">Home</Link>
    </div>
  );
}
