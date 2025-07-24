import { useNavigate } from "react-router-dom"
import { BackArrowIcon } from "@/components/common/Icon"

export function BackBtn() {
    const navigate = useNavigate();
    return (
        <button type="button" onClick={() => navigate(-1)}>
            <BackArrowIcon />
        </button>
    );
}
