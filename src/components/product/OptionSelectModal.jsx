import useStore from "@/store/useStore"
import { useState } from "react";
import useCartStore from "@/store/useCartStore";

function OptionSelectModal() {
    
    const { selectedPrd, hide, quantity, increase, decrease, setQuantity, dcPrice } = useStore();
    const { addCartList } = useCartStore();
    const [selectedOption, setSelectedOption] = useState("");

    const handleAddCartList = () => {

        if(!selectedOption){
            alert("옵션을 먼저 선택해 주세요.")
            return;
        }

        const cartItem = {
            // id: selectedPrd.id,
            // image: selectedPrd.image,
            // name: selectedPrd.name,
            // price: selectedPrd.price,
            // saleRate: selectedPrd.saleRate,
            // dcprice: dcPrice,
            ...selectedPrd,
            checked : true,
            selectedOption : selectedOption,
            quantity : quantity 
        };

        addCartList(cartItem);
        setSelectedOption("");
        setQuantity(1);
        hide();
    };

    return (
        <>
            <div className="modal-content">
                <div className="option-penal">
                    <select value={selectedOption} onChange={(e)=>{setSelectedOption(e.target.value)}}>
                        <option value="">사이즈 선택</option>
                        {
                            selectedPrd.sizes.map((size, i)=>
                                <option value={size.label} key={i}>{size.label}</option>
                            )
                        }
                    </select>
                    {
                        selectedOption
                        &&
                        <ul className="count-list">
                            <li className="count-item">
                                <div>
                                    <span>{ selectedOption }</span>
                                    <button 
                                        type="button"
                                        onClick={()=>{
                                            setSelectedOption("");
                                            setQuantity(1);
                                        }}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="9" fill="#DDDDDD"></circle><path d="M12 6L6 12" stroke="#888888"></path><path d="M6 6L12 12" stroke="#888888"></path></svg>
                                    </button>
                                </div>
                                <div>
                                    <button type="button" onClick={ decrease }>-</button>
                                    <input type="number" onChange={(e)=>{setQuantity(e.target.value)}} value={ quantity } min="1" max="100" step="1" />
                                    <button type="button" onClick={ increase }>+</button>
                                </div>
                            </li>
                        </ul>
                    }
                    <div className="total-price">
                        <p>총 상품 금액</p>
                        {
                            selectedOption
                            ? <p><span>{ (dcPrice(selectedPrd) * quantity).toLocaleString() }원</span></p>
                            : <p><span>0원</span></p>
                        }
                        
                    </div>
                </div>
            </div>

            <div className="btn-area">
                <button 
                    type="button"
                    onClick={ ()=>{
                        handleAddCartList()
                    } }
                >장바구니에 담기</button>
            </div>
        </>
    )
}

export default OptionSelectModal