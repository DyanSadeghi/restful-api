import Layout from '../../layout'
import { Box, Stack, Typography, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from "react-router";
import banner from '../../assets/images/banner.png';
import { EpisodesT } from '../../data/courses';
import { useEffect, useState } from 'react';
import { getUserEpisodes } from '../../services/Episodes';

const SingleCourse = () => {
    const navigate = useNavigate();
    const params = useParams();
    const courseId = params.id || '';
    const [episodes, setEpisodes] = useState([])
    const [course, setCourse] = useState<any>({})

    useEffect(() => {
        getUserEpisodes(courseId).then((res) => {
            setEpisodes(res.data.episodes)
            setCourse(res.data)
        })
    }, [])
    return (
        <Layout>
            <Stack
                direction='column'
                alignItems='center'
                spacing={3}
                sx={{ width: 1, backgroundColor: '#d8e9eb47', minHeight: '100vh', padding: '20px', boxSizing: 'border-box' }}>
                <Box
                    sx={{
                        backgroundColor: '#fff',
                        width: 1,
                        borderRadius: '14px',
                        height: '50px',
                        display: 'grid',
                        placeItems: 'center',
                        boxShadow: '0px 4px 4px #D8E9EB',
                        border: '1px solid #D8E9EB',
                        position: 'relative'
                    }}
                >
                    <Typography sx={{ fontWeight: 700, color: '#5C5C5C', fontSize: '15.5px' }}>{course.title}</Typography>
                    <IconButton sx={{ position: 'absolute', left: '10px' }} onClick={() => navigate(-1)}>
                        <ArrowBackIcon sx={{ fontSize: '20px', fill: '#333', opacity: '0.7' }} />
                    </IconButton>
                </Box>
                <img src={course.image} alt="course image" style={{ boxShadow: '0px 4px 4px #D8E9EB', width: '100%', borderRadius: '14px', height: '32%' }} />
                <Stack
                    direction="column"
                    spacing={2}
                    sx={{ width: 1, paddingBottom: '20px' }}
                >
                    <>
                        <Typography sx={{ width: 1, textAlign: 'center', fontWeight: 500 }}>لیست محتوای دوره</Typography>
                        {episodes.map((episode: EpisodesT, index: number) => {
                            return (
                                <Stack
                                    justifyContent="center"
                                    sx={{
                                        backgroundColor: '#fff',
                                        width: 1,
                                        borderRadius: '14px',
                                        height: '70px',
                                        boxShadow: '0px 4px 4px #D8E9EB',
                                        border: '1px solid #D8E9EB',
                                        textAlign: 'right',
                                        boxSizing: 'border-box',
                                        padding: '10px 15px 10px 0px',
                                        position: 'relative',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => window.open(episode.videoUrl, "_blank")}
                                    key={index}
                                >
                                    <Stack
                                        direction="column"
                                        spacing={0.8}
                                    >
                                        <Typography sx={{ fontWeight: 700, color: '#5C5C5C', fontSize: '15px' }}>
                                            {episode.title}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 500, color: '#333', fontSize: '13px' }}>
                                            ... {episode.body.substring(0, 29)}
                                        </Typography>
                                    </Stack>
                                    <Stack
                                        direction="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        sx={{
                                            position: 'absolute',
                                            left: 0,
                                            borderRadius: '14px 0px 0px 14px',
                                            backgroundColor: 'primary.main',
                                            height: 1,
                                            width: '75px',
                                            boxSizing: 'border-box'
                                        }}
                                    >
                                        <Typography sx={{ fontWeight: 700, color: '#fff', fontSize: '25px' }}>
                                            {index + 1 < 10 ? '0' : ''}
                                            {index + 1}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            )
                        })}
                    </>
                </Stack>
            </Stack>
        </Layout>
    )
}

export default SingleCourse