import AnimalForm from "@/forms/AnimalForm"
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

const ModalGeneric = ({ open, handleClose, data = {} }) => {
    const isEditing = !!data.codigo;


    const [dataEspecie, setDataEspecia] = useState([])
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null)
    const [success, setSucces] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoad(true);
            setError(null)

            try {
                const list = await Api.get(`/Especie`)
                setDataEspecia(list);
            } catch (error) {
                console.error("Error al obtener datos de las especies:", error);
                setError(error)
            } finally {
                setLoad(false);
            }
        };

        fetchData()

    }, []);

    const createAnimal = async (data) => {

        const dataCreate = {...data};

        delete dataCreate.IdAnimal;

        try{
            const response = await Api.post('/Animal', dataCreate);
            if(response.ok){
                setSucces(true)
            }
            handleClose();
        }catch {
            console.error("Error al crear el animal", error);
            setError(error)
        }finally{
            handleClose()
        }
    }

    const animalUpdate = async (data) => {
        console.log("estooo le mandamos", data)

        try{
            const response = await Api.put(`/Animal/${data.IdAnimal}`, data);
            if(response.ok){
                setSucces(true)
            }
            handleClose();
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
                    {isEditing ? 'Actualizar Animal' : 'Crear Nuevo Animal'}
                </Typography>
                <AnimalForm 
                    initialData={data} 
                    onSubmit={isEditing ? animalUpdate: createAnimal } 
                    especies={dataEspecie} 
                />
            </Box>
        </Modal>
    )
}

export default ModalGeneric