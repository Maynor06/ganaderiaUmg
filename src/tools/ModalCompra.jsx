'use client'
import AnimalForm from "@/forms/AnimalForm"
import { Api } from "@/lib/api"
import { Style } from "@mui/icons-material"
import { Box, Modal, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import CompraForm from "./FormCompra"

const style = { // <- Define el estilo para la caja del Modal
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600, // Ajusta el ancho según necesites
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalCompra = ({ open, handleClose, data = {}, onSucces }) => {
    const isEditing = !!data.codigo;

    const [success, setSucces] = useState(false)
    const [proveedores, setProveedores] = useState([])
    const [productos, setProductos] = useState([])
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchData = async () => {
        setLoad(true)
        try{
            const response = await Api.get('/Proveedor');
            const responseProd = await Api.get('/Producto')
            if(response && responseProd){
                setProveedores(response)
                setProductos(responseProd)
            }
        }catch (error) {
            console.log(error)
            setError(error)
        }finally {
            setLoad(false)
        }}

        fetchData();
    }, [])

    const createCompra = async (data) => {
         const dataCreate = {...data};

        delete dataCreate.IdAnimal;

        try{
            const response = await Api.post('/Compra', dataCreate);
            if(response.ok){
                setSucces(true)
            }
            handleClose();
            onSucces();
        }catch {
            console.error("Error al crear el animal", error);
            setError(error)
        }finally{
            handleClose()
        }
    }

    const compraUpdate = async (data) => {
        console.log("estoooo le mandamos", data)
        try{
            const response = await Api.put(`/Compra/update/${data.Id}`, data);
            if(response.ok){
                setSucces(true)
            }            
            handleClose();
            onSucces();
        }catch {
            console.error("Error al actualizar el animal", error);
            setError(error)
        }
    }

    if (load) {
        return <div>Cargando datos de compras</div>
    }
    if (error) {
        return <div>Error al cargar los datos: {error.message} </div>
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}> 
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {isEditing ? 'Actualizar compra' : 'Crear Nueva compra'}
                </Typography>
                <CompraForm
                    initialData={data} 
                    onSubmit={isEditing ? compraUpdate: createCompra }  
                    productos={productos}
                    proveedores={proveedores}
                    onCancel={handleClose}
                />
            </Box>
        </Modal>
    )
}

export default ModalCompra