import useProdcutStore from "@/store/useProdcutStore";
import { useState } from "react";
import { MoreArrowIcon } from "@/components/common/Icon"
import Button from '@/components/common/Button';

function ProductDetail() {

    const [expanded, setExpanded] = useState(false);

    const { selectedPrd } = useProdcutStore();

    return (
        <>
            <div className={`py-10 ${expanded ? 'max-h-[9999px]' : 'max-h-[700px]'} overflow-hidden transition-[max-height] duration-500 ease-in-out`}>
                {
                    Array.isArray(selectedPrd.detailImages) &&
                    selectedPrd.detailImages.map((img, index) => (
                        <img key={index} src={img} alt={`상세 이미지 ${index}`} />
                    ))
                }
            </div>
            <div className="relative mb-4">
                <div className="absolute w-full bottom-[50px] h-[150px] bg-linear-to-b from-white/0 to-white to-90%"></div>
                <div className="px-4">
                    <Button
                        onClick={() => setExpanded(!expanded)}
                        variant="secondary"
                        className="w-full gap-1 font-bold"
                        content={
                            expanded
                                ? <>
                                    상품 정보 접기
                                    <div style={{transform : 'rotate(0deg)'}}>
                                        <MoreArrowIcon/>
                                    </div>
                                </>
                                : <>
                                    상품 정보 더보기
                                    <div style={{transform : 'rotate(180deg)'}}>
                                        <MoreArrowIcon/>
                                    </div>
                                </>
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default ProductDetail