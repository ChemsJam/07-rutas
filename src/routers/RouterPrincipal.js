import React from "react";
import { Routes, Route, Link, BrowserRouter, NavLink } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Contacto } from "../components/Contacto";
import { Articulos } from "../components/Articulos";
import { Error } from "../components/Error";
import { Persona } from "../components/Persona";

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <h1>Cabecera</h1>
      <hr />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/inicio"
              className={({ isActive }) => (isActive ? "activado" : "")}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articulos"
              className={({ isActive }) => (isActive ? "activado" : "")}
            >
              Articulos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? "activado" : "")}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Cargamos componentes */}
      {/* Aqui cargamos el componente que coincide con el path */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/persona/:nombre/:apellido" element={<Persona />}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
