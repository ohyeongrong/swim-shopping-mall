
import { useState } from "react";
import useStore from "@/store/useStore";

function OptionEditModal ({selectedPrd}) {

    const { editOptQty, cartList, hide } = useStore();

    const [editSelOpt, setEditSelOpt] = useState( selectedPrd.selectedOption || "");
    const [editQty, setEditQty] = useState( selectedPrd.quantity || 1);
    const increase = () => setEditQty(prev => prev + 1);
    const decrease = () => setEditQty(prev => Math.max(1, prev - 1));

    return (
        <>
            <div className="modal-content">
                <div className="option-penal">
                    <select value={ editSelOpt } onChange={ e => setEditSelOpt(e.target.value) }>
                        {
                            selectedPrd.sizes.map((size, i)=>
                                <option value={ size.label } key={i}>{ size.label }</option>
                            )
                        }
                    </select>
                    {
                        selectedPrd.selectedOption
                        &&
                        <ul className="count-list">
                            <li className="count-item">
                                <div>
                                    <span>{ editSelOpt }</span>
                                    <button 
                                        type="button"
                                        onClick={()=>{
                                            setEditSelOpt("");
                                            setEditQty(1);
                                        }}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="9" fill="#DDDDDD"></circle><path d="M12 6L6 12" stroke="#888888"></path><path d="M6 6L12 12" stroke="#888888"></path></svg>
                                    </button>
                                </div>
                                <div>
                                    <button type="button" onClick={ decrease }>-</button>
                                    <input type="number" onChange={(e)=>{ setEditQty(e.target.value)} } value={ editQty } min="1" max="100" step="1" />
                                    <button type="button" onClick={ increase }>+</button>
                                </div>
                            </li>
                        </ul>
                    }

                </div>
            </div>

            <div className="btn-area">
                <button 
                    type="button"
                    onClick={()=>{
                        editOptQty(editSelOpt, editQty, selectedPrd)
                        console.log(cartList);
                        hide()
                    }}    
                >변경하기</button>
            </div>
        </>
    )
}

export default OptionEditModal