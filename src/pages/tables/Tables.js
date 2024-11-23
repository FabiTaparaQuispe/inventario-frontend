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
    textAlign: 'center !important' ,
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

export default function Tables() {
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
      <PageTitle title="Registro de Productos" className={classes.title} />
      {/* <Typography variant="h5" className={classes.title}>
        Registro de Productos
      </Typography> */}
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          fullWidth
          label="Código del Producto"
          name="codigo"
          value={form.codigo}
          onChange={handleChange}
          error={!!errors.codigo}
          helperText={errors.codigo}
        />
        <TextField
          className={classes.field}
          fullWidth
          label="Nombre del Producto"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          error={!!errors.nombre}
          helperText={errors.nombre}
        />
        <TextField
          className={classes.field}
          fullWidth
          label="Descripción"
          name="descripcion"
          value={form.descripcion}
          onChange={handleChange}
          multiline
          rows={3}
        />
        <TextField
          className={classes.field}
          fullWidth
          label="Cantidad"
          name="cantidad"
          value={form.cantidad}
          onChange={handleChange}
          error={!!errors.cantidad}
          helperText={errors.cantidad}
        />
        <TextField
          className={classes.field}
          fullWidth
          label="Precio Unitario"
          name="precio"
          value={form.precio}
          onChange={handleChange}
          error={!!errors.precio}
          helperText={errors.precio}
        />
        <TextField
          className={classes.field}
          fullWidth
          select
          label="Categoría"
          name="categoria"
          value={form.categoria}
          onChange={handleChange}
          error={!!errors.categoria}
          helperText={errors.categoria}
        >
          {categorias.map((cat, index) => (
            <MenuItem key={index} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>
        <div className={classes.buttonGroup}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Registrar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClear}
          >
            Limpiar
          </Button>
        </div>
      </form>
      
    </>
  );
}
