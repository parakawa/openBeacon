import React, { Component } from "react";
import ReactTable from "react-table";
import Link from "next/link";
import "react-table/react-table.css";
import { Layout } from "../../Components/Layout";
import "./style.css";

const data = [
  {
    position: 1,
    name: "Roy Agasthyan",
    lastname: "Sanchez",
    age: 26
  },
  {
    position: 2,
    name: "Sam Thomason",
    age: 22,
    lastname: "Rodriguez"
  },
  {
    position: 3,
    name: "Michael Jackson",
    age: 36,
    lastname: "Mendoza"
  },
  {
    position: 4,
    name: "Samuel Roy",
    age: 56,
    lastname: "Misari"
  },
  {
    position: 5,
    name: "Rima Soy",
    age: 28,
    lastname: "Atencia"
  },
  {
    position: 6,
    name: "Suzi Eliamma",
    age: 28,
    lastname: "Torres"
  }
];

class UsersTable extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      { Header: "N°", accessor: "position" },
      { Header: "Nombre", accessor: "name" },
      { Header: "Apellido", accessor: "lastname" },
      { Header: "N° DNI", accessor: "age" },
      { Header: "Código", accessor: "code" },
      { Header: "T. Inicio", accessor: "startTime" },
      { Header: "T. Terminado", accessor: "endTime" },
      { Header: "Foto", accessor: "photo" },
      { Header: "Finalización", accessor: "ended" }
    ];
  }
  render() {
    return (
      <Layout>
        <h2 className="table-title">INGRESO A OPEN PUCP</h2>
        <div className="next_navigation_register">
          <span>Registrar nuevo usuario</span>
          <Link href="/register">
            <button className="btn btn__navigation">+</button>
          </Link>
        </div>
        <ReactTable
          data={data}
          columns={this.columns}
          defaultPageSize={3}
          pageSizeOptions={[3, 6]}
          className="custom_users_table"
          previousText="Anterior"
          nextText="Siguiente"
          pageText="Página"
          ofText="de"
          rowsText="Filas"
        />
      </Layout>
    );
  }
}

export default UsersTable;
