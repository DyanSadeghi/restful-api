import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { WhoAmI } from "../services/Auth";
import { LinearProgress } from '@mui/material';


function RequireAuth({
    children,
    fallback,
}: {
    children: JSX.Element;
    fallback?: string;
}) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>();

    useEffect(() => {

        setLoading(true);
        WhoAmI().then((res: any) => setUser(res.data)).finally(() => setLoading(false));


    }, []);


    return user ? (
        user.type === "admin" ? (
            children
        ) : (
            <Navigate to={fallback || "/"} />
        )
    ) : loading ? (
        <LinearProgress />
    ) : (
        <Navigate to="/login" />
    )


}

export default RequireAuth;
