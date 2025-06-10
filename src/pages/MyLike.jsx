import useStore from "../store/useStore";
import ProductCarousel from "../components/ProductCarousel";
import ProductSort from "../components/ProductSort"


function MyLike() {

    const { likeList } = useStore();
    
    return (
        <>
            <ProductSort />
            <ProductCarousel products={likeList}/>
        </>
    )
}

export default MyLike