import LikeBtn from '@/components/common/LikeBtn'
import { Link } from 'react-router-dom';
import useProdcutStore from "@/store/useProdcutStore"

function ProductCard({ 
    product, 
    showLikeBtn=true, 
    linkTo = `/product/${product.id}`, 
    direction ='vertical', 
    imgHeight,
    showOriginalPrice=false, 
    showBrand =true,
    showOption=false }) {

    const { dcPrice } = useProdcutStore();

    const renderPrice = () => {
        if(showOriginalPrice){
            if(product.price && product.saleRate > 0) {
                return (
                    <>
                        <del className="text-xs  text-[var(--color-gray-500)]">{(product.price * product.quantity).toLocaleString()}원</del>
                        <div className="flex gap-1">
                            <span className="text-[var(--color-main)]">{ product.saleRate }%</span>
                            <span>{(dcPrice(product) * product.quantity).toLocaleString()}원</span>
                        </div>
                    </>
                )} else {
                    return (
                        <div>
                            <span>{(dcPrice(product) * product.quantity).toLocaleString()}원</span>
                        </div>
                    )
            }
        }
        return (
            <div className="flex gap-1">
                { product.saleRate > 0 && (<span className="text-[var(--color-main)]">{ product.saleRate }%</span>) }
                <span>{ dcPrice(product).toLocaleString() }원</span>
            </div>
        )
    }

    const cardContent = (
        <Link to={ linkTo }>
            <div className={`text-sm ${ direction === 'horizontal' ? "flex flex-row gap-3" : 'flex flex-col'}`}>
                <div className={`aspect-[3/4] ${imgHeight}`}>
                    <img className='w-full h-full object-cover' src={ product.image } alt={ product.name }/>
                </div>
                <div className={`flex flex-col justify-between gap-0.5 ${direction === 'vertical' ? 'pt-2' :''}`}>
                    <div className="flex flex-col">
                        {/* showBrand - true / false */}
                        { showBrand && <p className="text-[var(--color-black)] font-bold line-clamp-1 text-ellipsis">{ product.brand }</p>}

                        <p className={`${!showBrand ? "text-[var(--color-black)]" : "text-[var(--color-gray-600)]"} line-clamp-1 text-ellipsis`}>
                            {product.name}
                        </p>
                        {/* showOption - true / false */}
                        { showOption && <p className="text-xs">사이즈 { product.selectedOption } / 수량 { product.quantity }</p>}
                    </div>
                    <div className="text-[15px] font-bold text-[var(--color-black)]">
                        { renderPrice() }
                    </div>
                </div>
            </div>
        </Link>
    )

    return (

        <div className="relative">
            {/* 찜 버튼 */}
            { showLikeBtn && (
                <div className={`absolute ${ direction === 'horizontal' ? "left-1" : 'right-1 top-1'}`}>
                    <LikeBtn prd={product}/>
                </div>
            )}
            {cardContent}
        </div>

    )
}

export default ProductCard