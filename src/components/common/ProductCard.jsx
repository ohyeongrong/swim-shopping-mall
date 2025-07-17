import LikeBtn from '@/components/common/LikeBtn'
import { Link } from 'react-router-dom';
import useStore from "@/store/useStore"
import useCartStore from "@/store/useCartStore"

function ProductCard({ prd, type }) {

    const { dcPrice } = useStore();
    const { 
        cartList, removeCartList, toggleAllChecked, 
        toggleItemChecked, removeChecked, 
        getTotalProductPrice, getTotalDiscount
    } = useCartStore();

    const renderPrice = () => {
        if(type === 'cart') {
            return prd.saleRate > 0 ? (
                <>
                    <del className="text-xs  text-[var(--color-gray-500)]">{(prd.price * prd.quantity).toLocaleString()}원</del>
                    <div className="flex gap-1">
                        <span className="text-[var(--color-main)]">{ prd.saleRate }%</span>
                        <span>{(dcPrice(prd) * prd.quantity).toLocaleString()}원</span>
                    </div>
                </>
            ) : (
                <div>
                    <span>{(dcPrice(prd) * prd.quantity).toLocaleString()}원</span>
                </div>
            )
        }

        return (
            <div className="flex gap-1">
                { prd.saleRate > 0 && (<span className="text-[var(--color-main)]">{ prd.saleRate }%</span>) }
                <span>{ dcPrice(prd).toLocaleString() }원</span>
            </div>
        )
    }


    return (

        <div className="relative">
            <div className="absolute top-0 left-17">
                <LikeBtn dcPrice={dcPrice} prd={prd}/>
            </div>
            <Link to={`/product/${prd.id}`}>
                <div className={`text-sm ${ type === 'cart' && "flex flex-row gap-3"}`}>
                    <div className={`${ type === 'cart' && "h-32"}`}>
                        <img className="w-full h-full aspect-3/4 object-cover" src={ prd.image } alt={ prd.name } />
                    </div>
                    <div className="flex flex-col justify-between gap-0.5">
                        <div className="flex flex-col">
                            {type === 'cart' ? null : <p className="text-[var(--color-black)] font-bold line-clamp-1 text-ellipsis pt-2">{ prd.brand }</p>}
                            <p className="text-[var(--color-black)] line-clamp-1 text-ellipsis">{ prd.name }</p>
                            { type === 'cart' && <p className="text-xs">사이즈 { prd.selectedOption } / 수량 { prd.quantity }</p>}
                        </div>
                        <div className="text-[15px] font-bold text-[var(--color-black)]">
                            { renderPrice() }
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default ProductCard