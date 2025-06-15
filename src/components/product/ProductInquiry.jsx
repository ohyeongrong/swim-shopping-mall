import { Link } from "react-router-dom"

function ProductInquiry() {
    return(
        <div className="prd-inquiry-wrap">
            <div className="inquiry-title">
                <h3>상품문의 [0]</h3>
            </div>

            <ul className="inquiry-list">
                {/* 글 있을때 반복문 */}
                <li className="inquiry-item">
                    <ul className="write-info">
                        <li><span className="complete">답변완료</span></li>
                        <li><span>날짜</span></li>
                        <li><span>회원아이디</span></li>
                    </ul>
                    <div className="inquiry-txt">
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 11V6.5H12.5V13.5H4" stroke="#161616" stroke-width="1.5"></path><path d="M7 8.75V11.25" stroke="#161616" stroke-width="1.5"></path><path d="M10 6.5V4.5C10 2.84315 8.65685 1.5 7 1.5V1.5C5.34315 1.5 4 2.84315 4 4.5V6.5" stroke="#161616" stroke-width="1.5"></path></svg>
                        <div>비밀글입니다.</div>
                        {/* 글 내용 클릭하면 내용 나오는거임  */}
                    </div>
                </li>
            
            </ul>

            {/* 글 없을 때 */}
            <div>
                <span>상품 문의가 없습니다.</span>
            </div>
            
            {/* productQna 컴포넌트로 이동 */}
            <Link>상품 문의하기</Link>
        </div>
    )
}

export default ProductInquiry