import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getEpisodes } from '../../../../services/Episodes';
import DeleteEpisodeModal from '../../../../components/DeleteEpisodeModal';
import EditEpisodeModal from '../../../../components/EditEpisodeModal';


export default function EpisodesTable() {
    const [data, setData] = useState([]);
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    const [selectedEpisode, setSelectedEpisode] = useState('');

    const params = useParams();
    const id = params.id ? params.id : '';

    useEffect(() => {
        getEpisodes(id).then((res) => setData(res.data))
    }, [])

    const onDelete = (id: string) => {
        setDeleteModal(true);
        setSelectedEpisode(id);
    }
    const onEdit = (id: string) => {
        setEditModal(true);
        setSelectedEpisode(id);
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, direction: 'rtl' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">شماره قسمت</TableCell>
                        <TableCell align="right">عنوان قسمت</TableCell>
                        <TableCell align="right">توضیحات</TableCell>
                        <TableCell align="right">عملیات</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((episode: any) => (
                        <TableRow
                            key={episode.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" align="right">
                                {episode.number}
                            </TableCell>
                            <TableCell component="th" scope="row" align="right">
                                {episode.title}
                            </TableCell>
                            <TableCell align="right">{episode.body}</TableCell>
                            <TableCell align="right">
                                <IconButton>
                                    <EditIcon onClick={() => onEdit(episode.id)} sx={{ fontSize: 25 }} />
                                </IconButton>
                                <IconButton>
                                    <DeleteIcon onClick={() => onDelete(episode.id)} sx={{ fontSize: 25 }} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <DeleteEpisodeModal open={deleteModal} onClose={() => setDeleteModal(false)} episodeId={selectedEpisode} />
            <EditEpisodeModal open={editModal} onClose={() => setEditModal(false)} episodeId={selectedEpisode} />
        </TableContainer>
    );
}