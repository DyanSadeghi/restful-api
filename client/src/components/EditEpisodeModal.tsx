import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { TextField, Typography } from "@mui/material"
import { editEpisode } from '../services/Episodes';
import { useState } from 'react';

const EditEpisodeModal = ({ open, onClose, episodeId }: any) => {
    const [title, setTitle] = useState('')

    const onSubmit = () => {
        editEpisode(episodeId, title).finally(() => onClose())
    }


    return (
        <Dialog open={open} keepMounted onClose={onClose} fullWidth maxWidth="sm" scroll="paper">
            <DialogTitle>
                <div style={{ position: 'absolute', left: 10, top: 10 }}>
                    <IconButton color="secondary" className="bg" onClick={onClose}>
                        <CloseIcon width={16} height={16} />
                    </IconButton>
                </div>
                <div style={{ direction: 'rtl' }}>ویرایش قسمت</div>
                <div></div>
            </DialogTitle>
            <DialogContent dividers>
                <TextField value={title} onChange={(e) => setTitle(e.target.value)} placeholder='عنوان جدید قسمت' sx={{ width: 1 }} />

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

export default EditEpisodeModal;
