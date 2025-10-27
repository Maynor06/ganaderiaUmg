import ModalGeneric from "@/components/Modal";
import AnimalForm from "@/forms/AnimalForm";
import { Api } from "@/lib/api";
import { DeleteOutline, EditOutlined, VisibilityOutlined } from "@mui/icons-material";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Link from "next/link";
import { useState } from "react";

const COLUMNS_KEYS = ['codigo', 'nombre', 'especie', 'raza', 'peso', 'estado'];

const TableSimple = ({ rows }) => {
    const [modalShow, setModalShow] = useState(false)



    return (
        <TableContainer component={Paper} style={{borderRadius: 'none' }} >
            <Table sx={{ minWidth: 650 }} aria-label="animales table">

                <TableHead>
                    <TableRow>
                        {COLUMNS_KEYS.map((key) => (
                            <TableCell key={key} >
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
                            key={animal.id} // Clave única para cada fila
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
                                <button onClick={() => {
                                    setModalShow(true)
                                }} >
                                    <EditOutlined/>
                                    <ModalGeneric open={modalShow} handleClose={() => setModalShow(false)} data={rows}/>
                                </button>
                                <button>
                                    <DeleteOutline sx={{color: 'red'}} />
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableSimple