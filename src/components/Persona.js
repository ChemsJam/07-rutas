import React from 'react'
import { useParams } from 'react-router-dom'

export const Persona = () => {

    const {nombre, apellido} = useParams();

  return (
    <div>
        <h1>Página de Persona: {nombre} {apellido}</h1>
        <p>Está es la página de persona</p>
    </div>
  )
}
