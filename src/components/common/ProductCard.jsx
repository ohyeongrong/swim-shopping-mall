import LikeBtn from '@/components/common/LikeBtn'
import '@/components/common/ProductCard.css'
import { Link } from 'react-router-dom';

function ProductCard({ prd }) {

    const dcPrice = Math.round(prd.price * (1 - prd.saleRate / 100));

    return (

        <div>
            <Link to={`/product/${prd.id}`}>
                <div className="thumb-area">
                    <img src={ prd.image } alt={ prd.name } />
                </div>
                <div className="info-area prdbrand">
                    <div className="prd-title flex flex-col">
                        <span className="brand-name">{ prd.brand }</span>
                        <span className="product-name prdname">{ prd.name }</span>
                    </div>
                    <div className="prd-price">
                        {/* 제품 할인 */}
                        {
                            prd.saleRate > 0
                            && <span className="discount">{ prd.saleRate }%</span>
                        }
                        <span>{ dcPrice.toLocaleString() }원</span>
                    </div>
                </div>
            </Link>
            <div className="likeBtn relative">
                <LikeBtn dcPrice={dcPrice} prd={prd}/>
            </div>
        </div>

    )
}

export default ProductCard