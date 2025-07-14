import useStore from "@/store/useStore"
import { useState } from "react";

function BottomSheetModal({modalContent}) {

    const { hide, setQuantity } = useStore();
    const [selectedOption, setSelectedOption] = useState("");

    const reset = () => {
        setSelectedOption("");
        setQuantity(1);
        hide();
    };

    return(
        <div className="modal-overay">
            <div className="modal-wrap">
                <div className="btn-close">
                    <button 
                        type="button"
                        onClick={()=>{
                            reset()
                        }}
                    ></button>
                </div>

                { modalContent }

            </div>
        </div>
    )
}

export default BottomSheetModal