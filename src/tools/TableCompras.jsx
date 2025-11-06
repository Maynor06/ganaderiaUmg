import ModalGeneric from "@/components/Modal";
import AnimalForm from "@/forms/AnimalForm";
import { Api } from "@/lib/api";
import { DeleteOutline, EditOutlined, VisibilityOutlined } from "@mui/icons-material";
import { Dialog, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Link from "next/link";
import { useState } from "react";
import ModalPersonal from "./ModalPersonal";
import DeleteDialog from "./DeleteDialog";
import ModalCompra from "./ModalCompra";


const TableCompras = ({ rows, colums, rowsname, useRefresh }) => {
    const [modalShow, setModalShow] = useState(false)
    const [dataModal, setDataModal] = useState({})
    const [modalDelete, setModalDelete] = useState(false)
    const [datadelete, setDataDelete] = useState({});

    const deleteCompra = async () => {
        if(!datadelete) return;
        console.log(datadelete)

        try{
            await Api.delet(`/compra/delete/${datadelete.id}`)
            alert(`la compra ${datadelete.id} ha sido eliminado`)
            useRefresh();
        }catch (error) {
            console.error(error.message)
        }

    }

    const handleCloseDelete = () => {
        setModalDelete(false);
        setDataDelete({})
    }
    const deleteConfirm = (data) => {
        setDataDelete(data)
        setModalDelete(true)
    }

    const handleOpen = (data) => {
        setDataModal(data)
        setModalShow(true)        
    }

    const handleClose = () => {
        setModalShow(false)
        setDataModal({})
    }

    return (
        <TableContainer component={Paper} style={{borderRadius: 'none' }} >
            <Table sx={{ minWidth: 650 }} aria-label="animales table">

                <TableHead>
                    <TableRow>
                        {colums.map((key) => (
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
                    {rows.map((empleado) => (
                        <TableRow
                            key={empleado.id} 
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {rowsname.map((key) => (
                                <TableCell key={key} >
                                    {empleado[key]}
                                </TableCell>
                            ))}
                            <TableCell>
                                <Link href={`/Dashboard/Animales/${empleado.id}`} >
                                    <VisibilityOutlined />
                                </Link>
                                <button onClick={() =>  handleOpen(empleado)} className="hover:bg-amber-200" >
                                    <EditOutlined/>
                                </button>
                                <button onClick={() => deleteConfirm(empleado)} >
                                    <DeleteOutline sx={{color: 'red'}} />
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ModalCompra data={dataModal} handleClose={handleClose} onSucces={useRefresh} open={modalShow}  />
            <DeleteDialog  open={modalDelete} handleClose={handleCloseDelete}  data={datadelete} onConfirm={deleteCompra} /> 
        </TableContainer>
    );
}

export default TableCompras