import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material"
import { useEffect, useState } from 'react';
import DropZone from './DropZone';
import { getUsers } from '../services/Users';
import { addCourse } from '../services/Courses';

const AddCourseModal = ({ open, onClose }: any) => {
    const [course, setCourse] = useState({ title: '', user: { id: '' }, price: '', description: '', image: '' });
    const [users, setUsers] = useState([])
    const onSubmit = () => {
        addCourse(course.title, course.user, course.price, course.description, course.image)
            .finally(() => onClose())
    }
    useEffect(() => {
        getUsers().then((res) => setUsers(res.data))
    }, []);

    return (
        <Dialog open={open} keepMounted onClose={onClose} fullWidth maxWidth="md" scroll="paper">
            <DialogTitle>
                <div style={{ position: 'absolute', left: 10, top: 10 }}>
                    <IconButton color="secondary" className="bg" onClick={onClose}>
                        <CloseIcon width={16} height={16} />
                    </IconButton>
                </div>
                <div style={{ direction: 'rtl' }}>افزودن دوره جدید</div>
                <div></div>
            </DialogTitle>
            <DialogContent dividers>
                <Stack
                    direction="column"
                    spacing={2}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        spacing={2}
                        sx={{ width: 1 }}
                    >
                        <FormControl sx={{ width: '50%' }}>
                            <InputLabel id="demo-simple-select-label">انتخاب کاربر</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                value={course.user.id}
                                onChange={(e) => setCourse({ ...course, user: { id: e.target.value } })}
                            >
                                {users.map((user: any) => {
                                    return (
                                        <MenuItem key={user.id} value={user.id}>
                                            {user.email}
                                        </MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                        <TextField
                            placeholder='عنوان دوره'
                            value={course.title}
                            onChange={(e) => setCourse({ ...course, title: e.target.value })}
                            sx={{ width: "50%" }}
                        />
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        spacing={2}
                        sx={{ width: 1 }}
                    >
                        <TextField
                            placeholder='توضیحات دوره'
                            sx={{ width: "50%" }}
                            value={course.description}
                            onChange={(e) => setCourse({ ...course, description: e.target.value })}
                        />
                        <TextField
                            placeholder='قیمت دوره'
                            sx={{ width: "50%" }}
                            value={course.price}
                            onChange={(e) => setCourse({ ...course, price: e.target.value })}
                        />
                    </Stack>
                    <TextField
                        placeholder='لینک تصویر دوره'
                        sx={{ width: 1 }}
                        value={course.image}
                        onChange={(e) => setCourse({ ...course, image: e.target.value })}
                    />
                    {/* <DropZone title="انتخاب تصویر دوره" course={course} setCourse={setCourse} /> */}
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} aria-label="cancel" variant="outlined" color="primary" sx={{ minWidth: 120 }}>
                    بستن
                </Button>
                <Button onClick={onSubmit} aria-label="cancel" variant="contained" color="primary" sx={{ minWidth: 120, color: '#fff' }}>
                    تایید
                </Button>

            </DialogActions>
        </Dialog>
    );
};

export default AddCourseModal;
