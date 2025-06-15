import { useState } from "react";
import useStore from "@/store/useStore"

function ProductDetail() {

    const [expanded, setExpanded] = useState(false);

    const { selectedPrd } = useStore();

    return (
        <div className="prd-detail-warp">
            <div className={`prd-detail-content ${expanded ? "expanded" : ""}`}>
                {
                    Array.isArray(selectedPrd.detailImages) &&
                    selectedPrd.detailImages.map((img, index) => (
                        <img key={index} src={img} alt={`상세 이미지 ${index}`} />
                    ))
                }
            </div>
            <div className="detail-more container">
                <button 
                    onClick={() => {setExpanded(!expanded), console.log(expanded);}}
                    type="button">

                        {
                            expanded
                            ? <>
                                <span>상품 정보 접기</span>
                                <div style={{transform : 'rotate(270deg)'}}>
                                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L5 4.94937L1 1" stroke="var(--txt-main-color)"></path></svg>
                                </div>
                            </>
                            : <>
                                <span>상품 정보 더보기</span>
                                <div style={{transform : 'rotate(90deg)'}}>
                                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L5 4.94937L1 1" stroke="var(--txt-main-color)"></path></svg>
                                </div>
                            </>

                        }

                </button>
            </div>
        </div>
    )
}

export default ProductDetail