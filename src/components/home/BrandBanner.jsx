import useProdcutStore from "@/store/useProdcutStore";
import ProductSwiper from "@/components/common/ProductSwiper";
import ProductCard from "../common/ProductCard";

function BrandBanner({ brand, img, title, subTitle }) {
    
    const { productsList } = useProdcutStore();

    const brandList = productsList.filter(item => item.brand === brand);

    return(
        <div className="px-4 lg:px-0 flex flex-col gap-4 my-16 lg:mb-40 flex-1">
            <div className="relative">
                <div className='aspect-[4/5]'>
                    <img className='w-full h-full object-cover' src={img} alt={brand} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end gap-3 pl-6 pb-8 text-white">
                    <p className='text-xs'>{brand}</p>
                    <h2 className='text-2xl/7 font-bold line-clamp-2 pr-6'>{title}</h2>
                    <p className='text-sm'>{subTitle}</p>
                </div>
            </div>
            <div className="flex gap-2">
                { brandList.map((prd, i) => <ProductCard key={i} product={prd} direction='vertical'/>) }
            </div>
        </div>
    )
}

export default BrandBanner