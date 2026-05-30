import { Navigate } from "react-router";
import type { props } from "../../interfaces/props";
import { useContext } from "react";
import {AuthContext} from '../../context/AuthContext';

function ProtectedRoute({children}: props ){
    const {currentUser} = useContext(AuthContext);

    const auth = currentUser;

    return auth ? children : <Navigate to="/" />;
}

export default ProtectedRoute;