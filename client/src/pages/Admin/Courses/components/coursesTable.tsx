import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { Courses, CoursesT } from '../../../../data/courses';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { getCourses } from '../../../../services/Courses'
import DeleteCourseModal from '../../../../components/DeleteCourseModal';


export default function CoursesTable() {
    const navigate = useNavigate()
    const [courses, setCourses] = useState([])
    const [modal, setModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState('');

    const handleDelete = (id: any) => {
        setModal(true)
        setSelectedCourse(id)
    }
    useEffect(() => {
        getCourses().then((res) => setCourses(res.data))
    }, [])
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, direction: 'rtl' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">عنوان دوره</TableCell>
                        <TableCell align="right">توضیحات</TableCell>
                        <TableCell align="right">قیمت</TableCell>
                        <TableCell align="right">عملیات</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {courses.map((course: any) => (
                        <TableRow
                            key={course.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" align="right">
                                {course.title}
                            </TableCell>
                            <TableCell align="right">{course.body}</TableCell>
                            <TableCell align="right">{course.price} تومان</TableCell>
                            <TableCell align="right">
                                <IconButton>
                                    <EditIcon sx={{ fontSize: 25 }} onClick={() => navigate(`/admin/courses/${course._id}`)} />
                                </IconButton>
                                <IconButton>
                                    <DeleteIcon sx={{ fontSize: 25 }} onClick={() => handleDelete(course._id)} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <DeleteCourseModal open={modal} onClose={() => setModal(false)} courseId={selectedCourse} />
        </TableContainer>
    );
}