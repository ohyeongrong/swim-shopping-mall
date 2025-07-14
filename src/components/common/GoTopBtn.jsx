import { GoTopIcon } from "@/components/common/Icon"
import "@/components/common/GoTopBtn.css"
import { useEffect, useState } from "react"

function GoTopBtn() {

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {

        const handleScroll = () =>{
            if(window.scrollY > 0){
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        };

        window.addEventListener("scroll", handleScroll)
        
        return () => { 
            window.removeEventListener("scroll", handleScroll) 
        }
    },[])

    return (
        <>
            {
                showBtn
                && (
                    <aside className="gototop-area">
                        <div className="flex justify-end">
                            <button 
                                className="shadow-md"
                                onClick={()=> window.scrollTo({top: 0, behavior: "smooth"})}
                            >
                                <GoTopIcon />
                            </button>
                        </div>
                    </aside>
                )
            }
        </>
    )
}

export default GoTopBtn