import ModalGeneric from "@/components/Modal";
import AnimalForm from "@/forms/AnimalForm";
import { Api } from "@/lib/api";
import { DeleteOutline, EditOutlined, VisibilityOutlined } from "@mui/icons-material";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Link from "next/link";
import { useState } from "react";

const COLUMNS_KEYS = ['codigo', 'nombre', 'especie', 'raza', 'peso', 'estado'];

const TableSimple = ({ rows, onSucces }) => {
    const [modalShow, setModalShow] = useState(false)
    const [dataModal, setDataModal] = useState({})

    const hanldeOpen = (data) => {
        setDataModal(data)
        setModalShow(true)
    }

    const handleClose = () => {
        setDataModal({})
        setModalShow(false)
    }


    return (
        <TableContainer component={Paper} style={{borderRadius: '0.8rem' }} >
            <Table sx={{ minWidth: 650 }} aria-label="animales table">

                <TableHead>
                    <TableRow>
                        {COLUMNS_KEYS.map((key) => (
                            <TableCell key={key} style={{fontWeight: 'bold'}} >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </TableCell>
                        ))}
                        <TableCell>
                            Acciones
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((animal) => (
                        <TableRow
                            key={animal.id} 
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {COLUMNS_KEYS.map((key) => (
                                <TableCell key={key} >
                                    {animal[key]}
                                </TableCell>
                            ))}
                            <TableCell>
                                <Link href={`/Dashboard/Animales/${animal.id}`} >
                                    <VisibilityOutlined />
                                </Link>
                                <button onClick={() => hanldeOpen(animal)} >
                                    <EditOutlined/>
                                </button>
                                <button>
                                    <DeleteOutline sx={{color: 'red'}} />
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ModalGeneric open={modalShow} handleClose={handleClose} data={dataModal} onSucces ={onSucces}/>
        </TableContainer>
    );
}

export default TableSimple