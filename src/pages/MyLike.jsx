import useStore from "../store/useStore";
import LikeSort from "../components/LikeSort"
import BottomActionBar from "@/components/common/BottomActionBar";
import ProductCard from '@/components/common/ProductCard'
import Header from '@/components/common/Header';

function MyLike() {

    const { likeList } = useStore();
    
    return (
        <>
            <section>
                <LikeSort />
                <div className="grid grid-cols-2 gap-1.5">
                    {
                        likeList.map( prd => <ProductCard prd={ prd } variant="like"/>)
                    }
                </div>
            </section>
        </>
    )
}

export default MyLike