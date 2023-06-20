import { Box, Stack, Typography, IconButton, TextField, Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate, useParams } from 'react-router';
import AdminLayout from '../../../layout/adminLayout'
import EpisodesTable from './components/episodesTable';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import AddEpisodeModal from '../../../components/AddEpisodeModal';
import AddIcon from '@mui/icons-material/Add';
import { editCourse } from '../../../services/Courses';


const Episodes = () => {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState('');
    const params = useParams()
    const courseId = params.id || '';
    const navigate = useNavigate();
    const onSubmit = () => {
        editCourse(courseId, title).finally(() => { navigate("/admin/courses") })
    }
    return (
        <AdminLayout>
            <Stack
                direction='column'
                alignItems='center'
                spacing={4}
                sx={{ width: 1, backgroundColor: '#d8e9eb47', height: '100vh', padding: '20px', boxSizing: 'border-box' }}>
                <Box
                    sx={{
                        backgroundColor: '#fff',
                        width: 1,
                        borderRadius: '14px',
                        minHeight: '50px',
                        display: 'grid',
                        placeItems: 'center',
                        boxShadow: '0px 4px 4px #D8E9EB',
                        border: '1px solid #D8E9EB',
                        position: 'relative'
                    }}
                >
                    <Typography sx={{ fontWeight: 700, color: '#5C5C5C', fontSize: '15.5px' }}>ویرایش دوره</Typography>
                    <IconButton sx={{ position: 'absolute', right: '10px' }} onClick={() => navigate('/login')}>
                        <LogoutIcon sx={{ fontSize: '20px', fill: '#333', opacity: '0.7' }} />
                    </IconButton>
                    <IconButton sx={{ position: 'absolute', left: '10px' }} onClick={() => navigate(-1)}>
                        <ArrowBackIcon sx={{ fontSize: '20px', fill: '#333', opacity: '0.7' }} />
                    </IconButton>
                </Box>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="end"
                    spacing={2}
                    sx={{ width: 1 }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            color: "#fff",
                            borderRadius: "25px",
                            textAlign: "center",
                            boxShadow: "unset !important",
                            fontSize: "15px",
                            fontWeight: 500,
                            width: "160px",
                            height: "45px",
                            alignItems: "center",
                        }}
                        onClick={onSubmit}
                    >
                        اعمال تغییرات
                    </Button>
                    <TextField value={title} onChange={(e) => setTitle(e.target.value)} placeholder='عنوان دوره' sx={{ width: '400px' }} />
                </Stack>
                <Stack
                    direction="row"
                    justifyContent={'end'}
                    sx={{ width: 1 }}
                >
                    <Button onClick={() => setModal(true)}>
                        افزودن قسمت جدید
                        <AddIcon />
                    </Button>
                </Stack>
                <EpisodesTable />
                <AddEpisodeModal open={modal} onClose={() => setModal(false)} />
            </Stack>
        </AdminLayout>
    )
}

export default Episodes