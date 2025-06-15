import useStore from "../store/useStore";
import ProductSwiper from "../components/ProductSwiper";
import LikeSort from "../components/LikeSort"


function MyLike() {

    const { likeList } = useStore();
    
    return (
        <>
            <LikeSort />
            <ProductSwiper products={likeList}/>
        </>
    )
}

export default MyLike