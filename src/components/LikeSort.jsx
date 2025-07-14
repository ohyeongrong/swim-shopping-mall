import useMyLikeStore from "../store/useMyLikeStore";
import { MoreArrowIcon } from "@/components/common/Icon"

function LikeSort() {
    const { sortLikeList } = useMyLikeStore();
    
    return (
            /* 공통 정렬로 쓰게 리팩토링 필요함 */
                <select 
                    className="text-xs font-bold text-[var(--color-gray-700)]"
                    onChange={(e) => { sortLikeList(e.target.value) }}>
                    <option value="newheart">최신하트순</option>
                    <option value="discount">할인율순</option>
                    <option value="priceLow">낮은 가격순</option>
                    <option value="priceHigh">높은 가격순</option>
                </select>
    )
}

export default LikeSort