import useStore from "@/store/useStore";

function LikeBtn({prd, dcPrice}) {

    const { likeList, addLikeList } = useStore();

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
                    dcPrice: dcPrice
                });
        }}>

        {/* 좋아요 버튼 컬러 */}
        {
            isLiked
            ? <svg width="26" height="26" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.42969 14.5418L17.0011 26L28.5725 14.5418L21.9632 8L17.0011 12.9064L12.0391 8L5.42969 14.5418Z" fill="black"></path></svg>
            : <svg width="26" height="26" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.298 13.6175L17.0011 14.3127L17.7042 13.6175L21.9628 9.40665L27.1512 14.542L17.0011 24.5927L6.85106 14.542L12.0394 9.40665L16.298 13.6175Z" stroke="black"></path></svg>
        }

        </button>
    )
}

export default LikeBtn