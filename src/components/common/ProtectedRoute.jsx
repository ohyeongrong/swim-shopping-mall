import { Navigate, useLocation } from "react-router-dom";
import useMemberStore from "@/store/useMemberStore";

function ProtectedRoute({ children }) {
    const { loginUser } = useMemberStore();
    const location = useLocation();

    if (!loginUser) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default ProtectedRoute;