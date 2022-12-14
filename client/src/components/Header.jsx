import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";


export const Header = () => {

  return (
    <nav style={{position:'sticky', top:'0'}} className="navbar navbar-expand-lg navbar-dark bg-secondary justify-content-between">

      <div className="container">
        <h1><Link to={'/'} className="text-light">Dentalys</Link></h1>

      </div>

      <Link
        className="btn btn nuevo-post d-block d-md-inline-block"
        to={"/listado/pacientes"}
      >
        Pacientes
      </Link>
      <Link
        className="btn btn nuevo-post d-block d-md-inline-block"
        to={"/pacientes/nuevo"}
      >
        Agendamiento
      </Link>
      <Link
        className="btn btn nuevo-post d-block d-md-inline-block"
        to={"/header/recordatorio"}
      >
        Recordatorio
      </Link>

    </nav>


  );
};