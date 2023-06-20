import { Dialog, DialogProps, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef, ReactElement, ReactNode, Ref, useImperativeHandle, useState } from 'react';

interface ModalTransitionProps extends TransitionProps {
    children: ReactElement<any, any>;
}

export interface ModalRef {
    open: () => Promise<void>;
    close: () => void;
}

const Transition = forwardRef(function Transition(
    props: ModalTransitionProps,
    ref: Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface Props extends Partial<DialogProps> {
    children: ReactNode;
}

const Modal = ({
    children,
    ...props
}: Props, ref: Ref<ModalRef>) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open: async () => {
            setOpen(true);
        },
        close: () => {
            setOpen(false);
        }
    }))

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            TransitionComponent={Transition}
            {...props}
            open={open}
            onClose={handleClose}
        >
            {children}
        </Dialog>
    )
}

export default forwardRef(Modal);