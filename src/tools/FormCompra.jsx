'use client';
import React, { useState, useMemo, useEffect } from 'react';
import { TextField, Button, Grid, Box, MenuItem, FormControl, InputLabel, Select, IconButton, Switch, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

// --- MOCK DATA ---
const TIPO_PAGO_MOCK = ['Efectivo', 'Transferencia', 'Crédito'];

const getInitialState = () => ({
    idCompra: null, 
    proveedorId: '',
    fecha: new Date().toISOString().split('T')[0],
    tipoPago: '',
    observaciones: '',
    detalles: [{ idTemp: Date.now(), idDetalleCompra: null, productoId: '', cantidad: 0, precioUnitario: 0 }],
    actualizarInventario: true,
});
const CompraForm = ({ initialData = {}, onSubmit, onCancel, proveedores, productos }) => {
    const [formData, setFormData] = useState(getInitialState());



    useEffect(() => {
        if (initialData) {
            const mappedDetails = initialData.detalleCompras?.map(det => ({
                idDetalleCompra: det.detalleCompraId || null, 
                productoId: det.productoId ?? '',
                cantidad: det.cantidad,
                precioUnitario: det.precioUnitario,
            })) ?? []; 

            setFormData({
            idCompra: initialData.id ?? null,
            proveedorId: initialData.proveedorId ?? '', 
            
            fecha: initialData.fecha || new Date().toISOString().split('T')[0],
            tipoPago: initialData.tipoPago ?? '',             
            detalles: mappedDetails.length > 0 ? mappedDetails : getInitialState().detalles,
            actualizarInventario: initialData.actualizarInventario ?? true,
        });
    }
}, [initialData]);

    const handleHeaderChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData(prev => ({ 
            ...prev, 
            [name]: type === 'checkbox' ? checked : value 
        }));
    };

    const handleDetailChange = (idTemp, e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            detalles: prev.detalles.map(det => 
                det.idTemp === idTemp 
                    ? { ...det, [name]: name === 'cantidad' || name === 'precioUnitario' ? parseFloat(value) || 0 : value }
                    : det
            ),
        }));
    };

    const addDetail = () => {
        setFormData(prev => ({
            ...prev,
            detalles: [...prev.detalles, { idTemp: Date.now(), idDetalleCompra: null, productoId: '', cantidad: 0, precioUnitario: 0 }],
        }));
    };

    const removeDetail = (idTemp) => {
        setFormData(prev => ({
            ...prev,
            detalles: prev.detalles.filter(det => det.idTemp !== idTemp),
        }));
    };

    const totalCompra = useMemo(() => {
        return formData.detalles.reduce((sum, det) => {
            const subtotal = (det.cantidad || 0) * (det.precioUnitario || 0);
            return sum + subtotal;
        }, 0);
    }, [formData.detalles]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Mapea los datos al DTO que espera tu backend (compraRequestDto)
        const compraRequestDto = {
            ProveedorId: formData.proveedorId,
            Fecha: formData.fecha,
            TipoPago: formData.tipoPago,
            Total: totalCompra, 
            // Esto es clave: incluye IdDetalleCompra si existe (para actualizar) o null (para añadir)
            DetalleCompras: formData.detalles.map(det => ({
                IdDetalleCompra: det.idDetalleCompra, // null si es nuevo, ID si es existente
                ProductoId: det.productoId,
                Cantidad: det.cantidad,
                PrecioUnitario: det.precioUnitario,
            })),
        };

        // Llama a la función del padre. El padre decidirá si es POST o PUT.
        onSubmit(compraRequestDto, formData.idCompra); 
    };

    const isUpdateMode = formData.idCompra !== null;

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            
            <Typography variant="h6" sx={{ mb: 2, color: '#4CAF50' }}>Información General</Typography>
            <Grid container spacing={3}>
                
                {/* 1. Fecha, Proveedor, Tipo de Pago */}
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        fullWidth
                        label="Fecha"
                        name="fecha"
                        type="date"
                        value={formData.fecha}
                        onChange={handleHeaderChange}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={4} width={'9rem'} >
                    <FormControl fullWidth required>
                        <InputLabel>Proveedor</InputLabel>
                        <Select
                            label="Proveedor"
                            name="proveedorId"
                            value={formData.proveedorId}
                            onChange={handleHeaderChange}
                        >
                            {proveedores.map((p) => (
                                <MenuItem key={p.id} value={p.id}>
                                    {p.nombre}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4} width={'9rem'} >
                    <FormControl fullWidth required>
                        <InputLabel>Tipo de Pago</InputLabel>
                        <Select
                            label="TipoPago"
                            name="tipoPago"
                            value={formData.tipoPago}
                            onChange={handleHeaderChange}
                        >
                            {TIPO_PAGO_MOCK.map((tp) => (
                                <MenuItem key={tp} value={tp}>
                                    {tp}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Box sx={{ mt: 4, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ color: '#4CAF50' }}>Productos</Typography>
                <Button 
                    variant="contained" 
                    startIcon={<AddIcon />} 
                    onClick={addDetail}
                    sx={{ backgroundColor: '#4CAF50', '&:hover': { backgroundColor: '#38a169' } }}
                >
                    Agregar producto
                </Button>
            </Box>

            {formData.detalles.map((detalle, index) => (
                <Grid container spacing={2} key={index} sx={{ mb: 2, border: '1px solid #ddd', borderRadius: 1, p: 2 }}>
                    {/* Producto */}
                    <Grid item xs={12} sm={4} width={'9rem'} >
                        <FormControl fullWidth required>
                            <InputLabel>Producto</InputLabel>
                            <Select
                                label="Producto"
                                name="productoId"
                                value={detalle.productoId}
                                onChange={(e) => handleDetailChange(detalle.idTemp, e)}
                            >
                                {productos.map((prod) => (
                                    <MenuItem key={prod.idProducto} value={prod.idProducto}>
                                        {prod.nombre}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Cantidad */}
                    <Grid item xs={12} sm={2}>
                        <TextField
                            fullWidth
                            label="Cantidad"
                            name="cantidad"
                            type="number"
                            value={detalle.cantidad}
                            onChange={(e) => handleDetailChange(detalle.idTemp, e)}
                        />
                    </Grid>

                    {/* Precio Unitario */}
                    <Grid item xs={12} sm={3}>
                        <TextField
                            fullWidth
                            label="Precio Unit."
                            name="precioUnitario"
                            type="number"
                            value={detalle.precioUnitario}
                            onChange={(e) => handleDetailChange(detalle.idTemp, e)}
                        />
                    </Grid>

                    {/* Subtotal y Botón Eliminar */}
                    <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="body1" sx={{ color: '#000', fontWeight: 'bold' }}>
                            Subtotal: Q {((detalle.cantidad || 0) * (detalle.precioUnitario || 0)).toFixed(2)}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <IconButton color="error" onClick={() => removeDetail(detalle.idTemp)}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>

                </Grid>
            ))}


            {/* --- Footer (Inventario y Total) --- */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3, p: 2, borderTop: '1px solid #ddd' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Switch
                        checked={formData.actualizarInventario}
                        onChange={handleHeaderChange}
                        name="actualizarInventario"
                        sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': { color: '#4CAF50' },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#4CAF50' },
                        }}
                    />
                    <Typography>Actualizar inventario al guardar</Typography>
                </Box>
                
                <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="h5" sx={{ color: '#4CAF50', fontWeight: 'bold' }}>
                        Total: Q {totalCompra.toFixed(2)}
                    </Typography>
                </Box>
            </Box>


            {/* Botones de Acción */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
                <Button variant="outlined" onClick={onCancel}>
                    Cancelar
                </Button>
                <Button 
                    variant="contained" 
                    type="submit" 
                    sx={{ backgroundColor: '#4CAF50', '&:hover': { backgroundColor: '#38a169' } }}
                >
                    {isUpdateMode ? 'Actualizar' : 'Guardar'}
                </Button>
            </Box>
        </Box>
    );
};

export default CompraForm;