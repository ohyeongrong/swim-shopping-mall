import useStore from "@/store/useProdcutStore"
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
        <div className="z-1000 fixed inset-0 bg-[var(--color-black)]/40">
            <div className="fixed right-0 left-0 bottom-0 bg-[var(--color-white)]">
                <div className="flex items-center justify-center py-2">
                    <button type="button" onClick={()=>{ reset() }}>
                        <div className=" bg-[var(--color-gray-400)] w-10 h-1"></div>    
                        <span className="hidden">닫기</span>
                    </button>
                </div>

                { modalContent }

            </div>
        </div>
    )
}

export default BottomSheetModal