import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import { Navigate } from "react-router";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthenticationContext);

    if(loading) {
        return <p>Loading</p>
    }

    if(user) {
        return children
    }
    else {
        return <Navigate to='/login'></Navigate>
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoutes;