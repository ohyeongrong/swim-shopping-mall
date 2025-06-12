import { Link, useParams } from "react-router-dom"
import { useEffect } from "react";
import ThumSwiper from "../components/ThumSwiper";
import useStore from "../store/useStore";

function Product() {

    const { prdId } = useParams();
    const { foundPrd } = useStore();

    useEffect(()=>{
        foundPrd(prdId);
    },[prdId]);

    return (
        <>
            {/* 공용헤더 */}

            {/* 상품 섬네일 영역 */}
            <ThumSwiper/>

            {/* 상품 기본 정보 영역 */}
            <section className="prd-default-info">
                <div className="prd-title">
                    <Link>브랜드명</Link>
                    <p>제품명</p>
                    <button type="button">좋아요</button>
                </div>
                <div className="price-info">
                    <del>159,000</del>
                    <div>
                        <span>20%</span>
                        <span>127,200</span>
                        <span>쿠폰적용가</span>
                        <button type="button">쿠폰받기</button>
                    </div>
                </div>
            </section>

            {/* 상품 디테일 정보 영영 */}
            <section className="prd-detail-info">
                <div className="tap-menu">
                    <ul>
                        <li>
                            <Link>상세정보</Link>
                        </li>
                        <li>
                            <Link>리뷰</Link>
                        </li>
                        <li>
                            <Link>문의</Link>
                        </li>
                    </ul>
                </div>
                {/* 상세정보, 리뷰, 문의에 따라 변화 */}
                <div className="tap-content">
                    <p>제품 상세 정보</p>
                </div>
            </section>
        </>
    )
}

export default Product