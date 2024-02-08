import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <h1>Error404</h1>
      <p>Error404 Page not found...</p>
      <Link to="/inicio">Volver a la pagina de inicio</Link>
    </div>
  );
};
