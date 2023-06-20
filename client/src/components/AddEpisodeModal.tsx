import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Stack, TextField } from "@mui/material"
import { useState } from 'react';
import { useParams } from 'react-router'
import { addEpisode } from '../services/Episodes'

const AddEpisodeModal = ({ open, onClose }: any) => {
    const [episode, setEpisode] = useState({ title: '', number: '', videoUrl: '', body: '' });
    const params = useParams();
    const course_id = params.id ? params.id : '';

    const onSubmit = () => {

        addEpisode(course_id, episode.title, episode.body, episode.videoUrl, episode.number)
            .then((res) => console.log(res))
    }
    return (
        <Dialog open={open} keepMounted onClose={onClose} fullWidth maxWidth="md" scroll="paper">
            <DialogTitle>
                <div style={{ position: 'absolute', left: 10, top: 10 }}>
                    <IconButton color="secondary" className="bg" onClick={onClose}>
                        <CloseIcon width={16} height={16} />
                    </IconButton>
                </div>
                <div style={{ direction: 'rtl' }}>افزودن قسمت جدید</div>
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

                        <TextField
                            placeholder='لینک قسمت'
                            sx={{ width: "50%" }}
                            value={episode.videoUrl}
                            onChange={(e) => setEpisode({ ...episode, videoUrl: e.target.value })}
                        />
                        <TextField
                            placeholder='شماره قسمت'
                            sx={{ width: "50%" }}
                            value={episode.number}
                            onChange={(e) => setEpisode({ ...episode, number: e.target.value })}
                        />
                        <TextField
                            placeholder='عنوان قسمت'
                            sx={{ width: "50%" }}
                            value={episode.title}
                            onChange={(e) => setEpisode({ ...episode, title: e.target.value })}
                        />

                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        spacing={2}
                        sx={{ width: 1 }}
                    >
                        <TextField
                            multiline
                            minRows={5}
                            placeholder='توضیحات قسمت'
                            sx={{ width: 1 }}
                            value={episode.body}
                            onChange={(e) => setEpisode({ ...episode, body: e.target.value })}
                        />
                    </Stack>
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

export default AddEpisodeModal;
