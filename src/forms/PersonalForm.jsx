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

// Opciones de ejemplo para el campo 'Cargo'.
// En un caso real, esto vendría de una API, similar a 'especies'
const CARGO_OPTS_EJEMPLO = [
    { id: 1, nombre: 'Gerente' },
    { id: 2, nombre: 'Asistente Administrativo' },
    { id: 3, nombre: 'Veterinario' },
    { id: 4, nombre: 'Obrero de Campo' },
];

// Opciones de Estado (tomado de la imagen)
const ESTADO_OPTS = ['Activo', 'Inactivo', 'Vacaciones', 'Suspendido'];

/**
 * Componente de formulario para crear o actualizar un empleado.
 * @param {object} initialData - Datos del empleado para edición (opcional).
 * @param {function} onSubmit - Función a ejecutar al enviar el formulario.
 * @param {array} cargos - Lista de cargos disponibles (opcional, usa el ejemplo si está vacío).
 */
const EmpleadoForm = ({ initialData = {}, onSubmit, cargos = CARGO_OPTS_EJEMPLO, handleClose}) => {
    // Determinamos si estamos editando o creando
    const isEditing = !!initialData.id;

    // 1. Inicialización del Estado
    const [formData, setFormData] = useState({
        // IDs: Usar la clave exacta de C#
        IdEmpleado: initialData.id ?? null, 
        CargoId: initialData.cargo ?? '',         

        Nombre: initialData.nombre || '',
        Apellido: initialData.apellido || '',        
        SalarioBase: initialData.salario ?? '', 
        FechaIngreso: initialData.fechaIngreso || '',
        FotoUrl: initialData.FotoUrl || '',        
    });

    // 2. Efecto para manejar la carga asíncrona de datos de edición (si es necesario)
    // Este useEffect se asegura de que el formulario refleje los datos de 'initialData' si cambian.
    useEffect(() => {
        if (initialData.IdEmpleado) {
            setFormData({
                // Mapeo seguro de todas las propiedades
                IdEmpleado: initialData.IdEmpleado ?? null,
                CargoId: initialData.CargoId ?? '',
                Nombre: initialData.Nombre ?? '',
                Apellido: initialData.Apellido ?? '',
                SalarioBase: initialData.SalarioBase ?? '',
                FotoUrl: initialData.FotoUrl ?? '',
                                
                // Formato de fecha para el input type="date"
                FechaIngreso: initialData.FechaIngreso ? initialData.FechaIngreso.split('T')[0] : '',
            });
        }
    }, [initialData]);

    // 3. Handler de Cambio
    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        console.log("handleee changee", name, newValue)

        // Convertir SalarioBase a número para evitar problemas si es un campo numérico estricto
        if (name === 'SalarioBase' && newValue !== '') {
            newValue = Number(newValue);
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    };

    // 4. Handler de Envío
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Lógica de limpieza para creación (similar a la discusión anterior)
        const dataToSend = { ...formData };

        if (!isEditing) {
            // Si estamos creando, eliminamos la clave IdEmpleado para que la API la genere
            delete dataToSend.IdEmpleado;
        }

        // Llamar a la función onSubmit (ej. enviar a tu API)
        onSubmit(dataToSend);
    };

    return (
        <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{ p: 3, borderRadius: 2 }} 
        >
            <Grid container spacing={3}>
                
                {/* Nombre y Apellido */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        label="Nombre"
                        name="Nombre"
                        placeholder="Nombre del empleado"
                        value={formData.Nombre}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        label="Apellido"
                        name="Apellido"
                        placeholder="Apellido del empleado"
                        value={formData.Apellido}
                        onChange={handleChange}
                    />
                </Grid>
                
                {/* Cargo y Fecha de Ingreso */}
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                        <InputLabel>Cargo</InputLabel>
                        <Select
                            name="CargoId"
                            value={formData.CargoId}
                            label="Cargo"
                            onChange={handleChange}
                        >
                            <MenuItem value={formData.CargoId}>Selecciona un cargo</MenuItem>
                            {cargos.map((opt) => (
                                <MenuItem key={opt.idCargo} value={opt.idCargo}>{opt.nombre}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        label="Fecha de Ingreso"
                        name="FechaIngreso"
                        type="date"
                        value={formData.FechaIngreso}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        label="Salario Base"
                        name="SalarioBase"
                        type="number"
                        placeholder="0.00"
                        value={formData.SalarioBase}
                        onChange={handleChange}
                        inputProps={{ step: "0.01" }} // Para aceptar decimales
                    />
                </Grid>


                {/* FotoUrl (Oculto o en otra sección si es necesario) */}
                <Grid item xs={12} sm={6}>
                     {/* Este campo no se muestra en el diseño, pero lo incluimos para el modelo de datos */}
                    <TextField
                        fullWidth
                        label="URL de la Foto"
                        name="FotoUrl"
                        value={formData.FotoUrl}
                        onChange={handleChange}
                        sx={{ visibility: 'hidden', height: 0 }}
                    />
                </Grid>
                
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
                    <Button
                        variant="outlined"
                        onClick={() =>  handleClose()}
                    >
                        Cancelar
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ 
                            bgcolor: '#6FBF6A', // Usando el color verde de tu diseño
                            '&:hover': { bgcolor: '#5a9957' }
                        }}
                    >
                        {isEditing ? 'Guardar Cambios' : 'Registrar Empleado'}
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default EmpleadoForm;