import { useEffect, useRef, useState } from "react";
import useStore from "../store/useStore";

function ThumSwiper() {

    const { selectedPrd, thumImg } = useStore();

    const [imgIndex, setImgIndex] = useState(0);
    const [startX, setStartX] = useState(0);
    const [moveX, setMoveX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const touchAreaRef = useRef(null);

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        setIsDragging(true)
    }

    useEffect(() => {
    const area = touchAreaRef.current;

    const handleTouchMove = (e) => {
        e.preventDefault();
        if (!isDragging) return;
        setMoveX(e.touches[0].clientX - startX);
    };

    area.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
        area.removeEventListener("touchmove", handleTouchMove);
    };
    }, [startX, isDragging]);


    const handleTouchEnd = () => {
        setIsDragging(false);

        if (moveX > 50 && imgIndex > 0) {
            setImgIndex(imgIndex - 1);
        } else if (moveX < -50 && imgIndex < thumImg.length - 1) {
            setImgIndex(imgIndex + 1)
        }

        setMoveX(0);
    }

    return(
            <section className="prd-thum">
                <div 
                    className="thum-area"
                    onTouchStart={handleTouchStart}
                    ref={touchAreaRef}
                    onTouchEnd={handleTouchEnd}
                    >

                    <ul
                    style={{
                    transform: `translate3d(${-imgIndex * 360 + moveX}px, 0, 0)`,
                    transition: 'transform 0.7s ease',
                    transitionDuration: '300ms',
                    transitionDelay: '1ms'
                    }}
                    >

                        {/* 섬네일 이미지 반복 */}
                        {
                            thumImg.map((img, i) =>
                                <li aria-label={`${i + 1} / ${thumImg.length}`} key={ i }>
                                    <img src={img} alt={ selectedPrd.name } />
                                </li>
                            )
                        }

                    </ul>
                </div>
                {/* 프로그레스 바 */}
                <progress value={imgIndex + 1} max={thumImg.length} />
            </section>
    )
}

export default ThumSwiper