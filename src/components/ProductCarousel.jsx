import { Link } from "react-router-dom"
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useStore from "../store/useStore";

function ProductCarousel({products}) {

    const { likeList, addLikeList, productsList } = useStore();

    return (

        <div className="product-carousel">
            {
                products.map((prd) => {
                    const isLiked = likeList.some(i => i.id === prd.id);
                    const dcPrice = Math.round(prd.price * (1 - prd.saleRate / 100));
                    return (
                        <div className="product-card" key={ prd.id }>
                                <Link to={`/product/${prd.id}`}>
                                    <div className="thumb-area">
                                        <img src={ prd.image } alt={ prd.name } />
                                    </div>
                                    <div className="info-area">
                                        <div className="prd-title flex flex-col">
                                            <span className="brand-name">{ prd.brand }</span>
                                            <span className="product-name">{ prd.name }</span>
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
                                
                                <button
                                    type="button" 
                                    className="like-button" 
                                    aria-label="좋아요"
                                    onClick={() => { 
                                        addLikeList({
                                            ...prd,
                                            likedAt: new Date().toISOString(),
                                            dcPrice: dcPrice
                                        });
                                    }}>

                                    {/* 좋아요 버튼 컬러 */}
                                    {
                                        isLiked
                                        ? <FavoriteIcon style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: 'var(--main-color)' }}/>
                                        : <FavoriteBorderRoundedIcon style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: 'var(--gray-500)' }}/> 
                                    } 

                                </button>
                        </div>
                        )
                })
            }
        </div>

    )
}

export default ProductCarousel