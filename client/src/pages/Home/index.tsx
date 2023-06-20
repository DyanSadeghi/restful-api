import Layout from '../../layout'
import { Box, Stack, Typography, IconButton } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { getUserCourses } from '../../services/Courses';
import { CoursesT } from '../../data/courses';

const Home = () => {
  const [courses, setCourses] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    getUserCourses().then((res) => setCourses(res.data))
  }, [])

  return (
    <Layout>
      <Stack
        direction='column'
        alignItems='center'
        spacing={4}
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
          <Typography sx={{ fontWeight: 700, color: '#5C5C5C', fontSize: '15.5px' }}>لیست دوره های من</Typography>
          <IconButton sx={{ position: 'absolute', left: '10px' }} onClick={() => navigate('/login')}>
            <LogoutIcon sx={{ fontSize: '20px', fill: '#333', opacity: '0.7' }} />
          </IconButton>
        </Box>
        <Stack
          direction="column"
          spacing={2}
          sx={{ width: 1, paddingBottom: '20px' }}
        >
          {courses.map((course: CoursesT) => {
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
                key={course.id}
                onClick={() => navigate(`course/${course.id}`)}
              >
                <Stack
                  direction="column"
                  spacing={0.8}
                >
                  <Typography sx={{ fontWeight: 700, color: '#5C5C5C', fontSize: '15px' }}>
                    {course.title}
                  </Typography>
                  <Typography sx={{ fontWeight: 500, color: '#333', fontSize: '13px' }}>
                    ... {course.body.substring(0, 29)}
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
                    {course.price}
                  </Typography>
                  <Typography sx={{ fontWeight: 700, color: '#fff', fontSize: '14px' }}>
                    هزار تومان
                  </Typography>
                </Stack>
              </Stack>
            )
          })}
        </Stack>
      </Stack>
    </Layout>
  )
}

export default Home