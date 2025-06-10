import useStore from "../store/useStore";
import ProductCarousel from "../components/ProductCarousel";

function MyLike() {

    const { likeList } = useStore();
    
    return (
        <>
            <select>
                <option value="new">최신순</option>
                <option value="popular">인기순</option>
                <option value="priceLow">낮은 가격순</option>
                <option value="priceHigh">높은 가격순</option>
            </select>
            <ProductCarousel products={likeList}/>
        </>
    )
}

export default MyLike