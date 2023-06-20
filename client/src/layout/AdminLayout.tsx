import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
type Props = {
    children: JSX.Element | JSX.Element[];
    padding?: boolean;
};

const AdminLayout: FC<PropsWithChildren<Props>> = ({ children, padding }) => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                paddingX: { lg: "15%", xs: padding ? "24px" : '0px' },
                paddingY: padding ? '80px' : '0px',
                boxSizing: "border-box",
            }}
        >
            {children}
        </Box>
    );
};

export default AdminLayout;