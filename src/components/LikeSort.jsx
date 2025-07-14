import useStore from "../store/useStore";
import { MoreArrowIcon } from "@/components/common/Icon"

function LikeSort() {
    const { sortLikeList } = useStore();
    
    return (
            /* 정렬 UI 변경 해야함 */
            <select 
                className="text-sm text-[var(--color-gray-700)]"
                onChange={(e) => { sortLikeList(e.target.value) }}>
                <option value="newheart">최신하트순</option>
                <option value="discount">할인율순</option>
                <option value="priceLow">낮은 가격순</option>
                <option value="priceHigh">높은 가격순</option>
            </select>
    )
}

export default LikeSort