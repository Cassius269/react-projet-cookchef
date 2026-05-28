import { Navigate } from "react-router";
import type { props } from "../../interfaces/props";

function ProtectedRoute({children}: props ){
    const auth = false;

    return auth ? children : <Navigate to="/" />;
}

export default ProtectedRoute;