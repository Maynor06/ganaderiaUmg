import AnimalForm from "@/forms/AnimalForm"
import EmpleadoForm from "@/forms/PersonalForm"
import { Api } from "@/lib/api"
import { Style } from "@mui/icons-material"
import { Box, Modal, Typography } from "@mui/material"
import { useEffect, useState } from "react"

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

const ModalPersonal = ({ open, handleClose, data = {}, onSucces }) => {
    const isEditing = !!data.id;


    const [dataCargos, setDataCargos] = useState([])
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null)
    const [success, setSucces] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoad(true);
            setError(null)

            try {
                const list = await Api.get(`/Cargo`)
                setDataCargos(list);
            } catch (error) {
                console.error("Error al obtener datos de todos los cargos:", error);
                setError(error)
            } finally {
                setLoad(false);
            }
        };

        fetchData()

    }, []);

    const createEmpleado = async (data) => {

        const dataCreate = {...data};

        delete dataCreate.IdEmpleado;

        try{
            const response = await Api.post('/Empleado', dataCreate);
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

    const empleadoUpdate = async (data) => {
        console.log("estooo le mandamos", data)

        try{
            const response = await Api.put(`/empleado/update/${data.IdEmpleado}`, data);
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
        return <div>Cargando datos de animales</div>
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
                    {isEditing ? 'Actualizar Empleado' : 'Crear Nuevo Empleado'}
                </Typography>
                <EmpleadoForm
                    initialData={data} 
                    onSubmit={isEditing ? empleadoUpdate: createEmpleado } 
                    cargos={dataCargos}
                    handleClose={handleClose}
                />
            </Box>
        </Modal>
    )
}

export default ModalPersonal