import { Link, useParams } from "react-router-dom"
import { useEffect } from "react";
import ThumSwiper from "../components/ThumSwiper";
import useStore from "../store/useStore";
import LikeBtn from "../components/common/LikeBtn";
import ProductTapMenu from "../components/product/ProductTapMenu";

function Product() {

    const { prdId } = useParams();
    const { foundPrd, selectedPrd, productsList } = useStore();
    const dcPrice = Math.round(selectedPrd.price * (1 - selectedPrd.saleRate / 100));

    useEffect(()=>{
        foundPrd(prdId);
    },[prdId, productsList, foundPrd, selectedPrd]);

    return (
        <>
            {/* 공용헤더 */}

            {/* 상품 섬네일 영역 */}
            <ThumSwiper/>

            {/* 상품 기본 정보 영역 */}
            <section className="prd-default-info container">
                <div className="prd-title">
                    <div className="prd-brand">
                        <Link>
                            {selectedPrd.brand}
                            <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L5 4.94937L1 1" stroke="var(--gray-01)"></path></svg>
                        </Link>
                    </div>
                    <div className="prd-name">
                        <p>{selectedPrd.name}</p>
                    </div>
                    <LikeBtn prd={selectedPrd} dcPrice={dcPrice}/>
                </div>
                <div className="prd-review">
                    <div className="flex">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.54739 0.964187C5.72735 0.58081 6.27265 0.58081 6.45261 0.964188L7.58625 3.37915C7.65704 3.52994 7.79827 3.63558 7.96291 3.66088L10.5389 4.0568C10.941 4.1186 11.1049 4.6092 10.8207 4.9003L8.92637 6.8404C8.81546 6.95399 8.76508 7.1135 8.79064 7.27019L9.23322 9.98359C9.30041 10.3956 8.86306 10.7036 8.49778 10.5016L6.24196 9.2542C6.0914 9.17094 5.9086 9.17094 5.75804 9.2542L3.50223 10.5016C3.13694 10.7036 2.69959 10.3956 2.76678 9.98359L3.20936 7.27019C3.23492 7.1135 3.18454 6.95399 3.07363 6.8404L1.17935 4.9003C0.895122 4.6092 1.05902 4.1186 1.46114 4.0568L4.03709 3.66088C4.20173 3.63558 4.34296 3.52994 4.41375 3.37915L5.54739 0.964187Z" fill="var(--gray-01)"></path></svg>
                        <span> 4.9 | 5,583건 </span>
                    </div>
                </div>
                <div className="price-info">

                        {
                            selectedPrd.saleRate > 0
                            ? <>
                                <del>{selectedPrd.price}</del>
                                <div>
                                    <span className="discount">{ selectedPrd.saleRate }%</span>
                                    <span>{dcPrice}원</span>
                                </div>
                            </>
                            :   <div>
                                    <span>{dcPrice}원</span>
                                </div>
                        }

                </div>
            </section>

            {/* 상품 디테일 정보 영역 */}
            <ProductTapMenu/>
        </>
    )
}

export default Product