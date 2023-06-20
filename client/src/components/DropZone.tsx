import { Box, Typography } from '@mui/material'
import { useRef } from 'react';

interface DropZoneProps {
    title: string;
    course: any;
    setCourse: any;
}

const DropZone = ({ title, course, setCourse }: DropZoneProps) => {
    const fileInput = useRef<any>();
    const handleChange = (e: any) => {
        console.log(e.target.files[0])
        setCourse({ ...course, image: e.target.files[0] })
    }
    return (
        <Box
            sx={{
                width: 1,
                height: 200,
                border: '1px dashed #51A8B1',
                backgroundColor: course.image ? '#00cf002e' : '#f7f7f7',
                display: 'grid',
                placeItems: 'center',
                borderRadius: '14px',
                cursor: 'pointer',
            }}
            onClick={() => fileInput.current.click()}
        >
            <Typography sx={{ fontSize: 18, fontWeight: 600, color: '#a3a3a3' }}>{course.image ? 'تصویر دوره با موفقیت انتخاب شد' : title}</Typography>
            <input type="file" ref={fileInput} style={{ display: 'none' }} onChange={(e) => handleChange(e)} />
        </Box>
    )
}

export default DropZone