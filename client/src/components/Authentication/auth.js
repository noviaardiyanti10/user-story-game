import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const LogAuth = ({children}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("logged in") === 'true') {
            localStorage.getItem("user");
            localStorage.getItem("level");
            localStorage.getItem("point");
            navigate("/");
        }
    }, [navigate])
    return children;
}
 
export default LogAuth;
