import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Box
} from '@mui/material';

// Opciones estáticas (siempre es mejor si vienen de la API, pero las mantenemos aquí)
const SEXO_OPTS = ['Macho', 'Hembra'];
const ESTADO_OPTS = ['Activo', 'Inactivo', 'En Tratamiento', 'Vendido'];

const AnimalForm = ({ initialData = {}, onSubmit, especies = [] }) => {
  const isEditing = !!initialData.codigo;
  let razaInitialId = '';
  let especieInitialId = '';
  let initialPeso = '';
  if(isEditing){
    let especiaInital = especies.find(especie => especie.nombre == initialData.especie);
    razaInitialId = especiaInital.razas.find(raza => raza.nombre == initialData.raza)?.id;
    especieInitialId = especiaInital.idEspecie;

    initialPeso = initialData.peso.replace('kg', '')
}

  const [formData, setFormData] = useState({
    IdAnimal: initialData.id || null,
    Codigo: initialData.codigo || '',
    Nombre: initialData.nombre || '',
    EspecieId: especieInitialId ?? '', 
    RazaId: razaInitialId ?? '',
    sexo: initialData.sexo || '',
    FechaNacimiento: initialData.fecha_nacimiento || '',
    Estado: initialData.estado || 'Activo', 
    Peso: Number(initialPeso) || '',
    FotoUrl: initialData.foto_url || '',
  });

  useEffect(() => {
    if (initialData.id_animal) {
      // Mapear manualmente para asegurar que los nombres de las claves coincidan
      setFormData({
        Codigo: initialData.codigo || '',
        Nombre: initialData.nombre || '',
        EspecieId: initialData.especie ?? '',
        RazaId: initialData.raza ?? '',
        sexo: initialData.sexo || '',
        Estado: initialData.estado || 'Activo', 
        FotoUrl: initialData.foto_url || '',        
        FechaNacimiento: initialData.fecha_nacimiento ? initialData.fecha_nacimiento.split('T')[0] : '',
        Peso: String(initialData.peso ?? ''), 
      });
    }
  }, [initialData]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
        const newData = {
            ...prevData,
            [name]: value,
        };

        if (name === 'EspecieId') {
            newData.RazaId = ''; 
        }
        
        return newData;
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const getRazasForEspecie = (especies, especieId) => {
    // Si no hay ID o es un string vacío, retorna un array vacío.
    if (!especieId) return [];

    const idToSearch = Number(especieId); 
    const especieEncontrada = especies.find(e => e.idEspecie === idToSearch);
    
    return especieEncontrada ? especieEncontrada.razas : [];
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, p: 3, borderRadius: 2 }}>
      <Grid container spacing={3}>
        {/* Código */}
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            label="Código"
            name="Codigo"
            value={formData.Codigo}
            onChange={handleChange}
          />
        </Grid>
        {/* Nombre */}
        <Grid item xs={12} sm={8}>
          <TextField
            required
            fullWidth
            label="Nombre"
            name="Nombre"
            value={formData.Nombre}
            onChange={handleChange}
          />
        </Grid>
        
        {/* Especie */}
        <Grid item xs={12} width={'9rem'} sm={4}>
          <FormControl fullWidth required>
            <InputLabel>Especie</InputLabel>
            <Select
              name="EspecieId"
              value={formData.EspecieId || ''} 
              label="Especie"
              onChange={handleChange}
            >
              <MenuItem value={formData.EspecieId}> {initialData.especie || ''}
              </MenuItem>
              {especies.map((opt) => (
                <MenuItem key={opt.idEspecie} value={opt.idEspecie}>{opt.nombre}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} width={'9rem'} sm={4}>
          <FormControl 
             fullWidth 
             required 
             disabled={!formData.EspecieId} 
          >
            <InputLabel>Raza</InputLabel>
            <Select
              name="RazaId"
              value={formData.RazaId || ''} 
              label="Raza"
              onChange={handleChange}
            >
              <MenuItem value={formData.RazaId}>{initialData.raza || ' '} </MenuItem> 
              {getRazasForEspecie(especies, formData.EspecieId).map((opt) => (
                <MenuItem key={opt.id} value={opt.id}>{opt.nombre}</MenuItem> 
              ))}
            </Select>
          </FormControl>
        </Grid>
        
        {/* Sexo */}
        <Grid item xs={12} width={'9rem'} sm={4}>
          <FormControl fullWidth required>
            <InputLabel>Sexo</InputLabel>
            <Select
              name="sexo"
              value={formData.sexo || ''}
              label="Sexo"
              onChange={handleChange}
            >
              <MenuItem value="">{' '}</MenuItem>
              {SEXO_OPTS.map((opt) => (
                <MenuItem key={opt} value={opt}>{opt}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        
        {/* Fecha de Nacimiento */}
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            label="Fecha de Nacimiento"
            name="FechaNacimiento"
            type="date"
            value={formData.FechaNacimiento}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        {/* Peso */}
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            label="Peso (kg)"
            name="Peso"
            type="number"
            value={formData.Peso}
            onChange={handleChange}
          />
        </Grid>
        {/* Estado */}
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth required>
            <InputLabel>Estado</InputLabel>
            <Select
              name="Estado"
              value={formData.Estado}
              label="Estado"
              onChange={handleChange}
            >
              {ESTADO_OPTS.map((opt) => (
                <MenuItem key={opt} value={opt}>{opt}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* URL de la Foto */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="URL de la Foto"
            name="FotoUrl"
            value={formData.FotoUrl}
            onChange={handleChange}
            helperText="Si no proporciona una URL, se usará una imagen predeterminada."
          />
        </Grid>

        {/* Botón de Envío */}
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            {isEditing ? 'Guardar Cambios' : 'Registrar Animal'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnimalForm;