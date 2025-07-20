import useMyLikeStore from "@/store/useMyLikeStore";
import { HeartFillIcon, HeartOutlineIcon } from "@/components/common/Icon"
import useProdcutStore from "@/store/useProdcutStore";

function LikeBtn({prd}) {

    const { likeList, addLikeList } = useMyLikeStore();
    const { dcPrice } = useProdcutStore();

    const isLiked = likeList.some(i => i.id === prd.id);
    
    return (
        <button
            type="button" 
            className="like-button" 
            aria-label="좋아요"
            onClick={() => { 
                addLikeList({
                    ...prd,
                    likedAt: new Date().toISOString(),
                    dcPrice: dcPrice(prd)
                });
        }}>

        {/* 좋아요 버튼 컬러 */}
        {
            isLiked
            ? <HeartFillIcon/>
            : <HeartOutlineIcon/>
        }

        </button>
    )
}

export default LikeBtn