import { Box, Stack, Typography, IconButton, Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router';
import AdminLayout from '../../../layout/adminLayout'
import AdminTable from './components/coursesTable';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import AddCourseModal from '../../../components/AddCourseModal';
import { useState } from 'react';

const Courses = () => {
    const [modal, setModal] = useState(false);

    const navigate = useNavigate();
    return (
        <AdminLayout>
            <Stack
                direction='column'
                alignItems='center'
                spacing={4}
                sx={{ width: 1, backgroundColor: '#d8e9eb47', maxHeight: '100vh', padding: '20px', boxSizing: 'border-box' }}>
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
                    <Typography sx={{ fontWeight: 700, color: '#5C5C5C', fontSize: '15.5px' }}>لیست دوره ها</Typography>
                    <IconButton sx={{ position: 'absolute', right: '10px' }} onClick={() => navigate('/login')}>
                        <LogoutIcon sx={{ fontSize: '20px', fill: '#333', opacity: '0.7' }} />
                    </IconButton>
                    <IconButton sx={{ position: 'absolute', left: '10px' }} onClick={() => navigate(-1)}>
                        <ArrowBackIcon sx={{ fontSize: '20px', fill: '#333', opacity: '0.7' }} />
                    </IconButton>
                </Box>
                <Stack
                    direction="row"
                    justifyContent={'end'}
                    sx={{ width: 1 }}
                >
                    <Button onClick={() => setModal(true)}>
                        افزودن دوره جدید
                        <AddIcon />
                    </Button>
                </Stack>
                <AdminTable />
                <AddCourseModal open={modal} onClose={() => setModal(false)} />
            </Stack>
        </AdminLayout>
    )
}

export default Courses