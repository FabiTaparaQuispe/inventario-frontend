import MUIDataTable from "mui-datatables";

import React, { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Grid,
  Typography,

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";

const datatableData = [
  ["Joe James", "Example Inc.", "Yonkers", "NY"],
  ["John Walsh", "Example Inc.", "Hartford", "CT"],
  ["Bob Herm", "Example Inc.", "Tampa", "FL"],
  ["James Houston", "Example Inc.", "Dallas", "TX"],
  ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
  ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
  ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
  ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
  ["Meral Elias", "Example Inc.", "Hartford", "CT"],
  ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
  ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
  ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
  ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
  ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
  ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
  ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
  ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
];

// const useStyles = makeStyles(theme => ({
//   tableOverflow: {
//     overflow: 'auto'
//   }
// }))


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    maxWidth: 600,
    margin: 'auto',
  },
  title: {
    marginBottom: theme.spacing(3),
    textAlign: 'center',
  },
  field: {
    marginBottom: theme.spacing(2),
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(3),
  },
}));

export default function Notifications() {
  const classes = useStyles();

  const [form, setForm] = useState({
    codigo: '',
    nombre: '',
    descripcion: '',
    cantidad: '',
    precio: '',
    categoria: '',
  });

  const [errors, setErrors] = useState({});

  const categorias = ['Electrónicos', 'Alimentos', 'Ropa', 'Herramientas'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.codigo) newErrors.codigo = 'El código es obligatorio.';
    if (!form.nombre) newErrors.nombre = 'El nombre es obligatorio.';
    if (!form.cantidad || isNaN(form.cantidad) || form.cantidad <= 0) {
      newErrors.cantidad = 'Ingrese una cantidad válida.';
    }
    if (!form.precio || isNaN(form.precio) || form.precio <= 0) {
      newErrors.precio = 'Ingrese un precio válido.';
    }
    if (!form.categoria) newErrors.categoria = 'Seleccione una categoría.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Producto registrado con éxito.');
      setForm({
        codigo: '',
        nombre: '',
        descripcion: '',
        cantidad: '',
        precio: '',
        categoria: '',
      });
    }
  };

  const handleClear = () => {
    setForm({
      codigo: '',
      nombre: '',
      descripcion: '',
      cantidad: '',
      precio: '',
      categoria: '',
    });
    setErrors({});
  };
  return (
    <>
      <PageTitle title="Consulta" />
      <TextField id="standard-basic" label="Standard" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Employee List"
            data={datatableData}
            columns={["Name", "Company", "City", "State"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
