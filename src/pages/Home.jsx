import { Link } from "react-router-dom"
import swimwearProducts from "../data/swimwearProducts";
import ProductCarousel from "../components/ProductCarousel";

function Home() {

    return (
        <>
        {/* 헤더영역 */}
        <header>
            <h1><Link><sapn>logo</sapn></Link></h1>
            <nav>
                <ul>
                    <li><Link aria-label="검색"><span>Search</span></Link></li>
                    <li>
                        <Link aria-label="장바구니">
                            <span>Cart</span>
                            <span aria-label="0개의 상품이 담겨 있습니다.">0</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>

        {/* 글로벌 네비게이션 바 */}
        <div className="gnb-bar">
            <ul>
                <li>
                    <Link>신상</Link>
                </li>
                <li>
                    <Link>베스트</Link>
                </li>
                <li>
                    <Link>세일</Link>
                </li>
                <li>
                    <Link>스타일</Link>
                </li>
                <li>
                    <Link>이벤트</Link>
                </li>
            </ul>
        </div>


        <main>
            {/* 제품 스와이퍼 영역 */}
            <section>
                <div className="swiper-title">
                    <h2>
                        <span>고객님을 위한</span>
                        <span>카테고리별 상품</span>
                    </h2>
                    <span>
                        <Link>더보기</Link>
                    </span>
                </div>
                <ProductCarousel products={swimwearProducts} />
            </section>
        </main>

        {/* 푸터영역 */}
        <footer>
            <details>
                <summary>
                    사업자 정보
                    화살표아이콘
                </summary>
                <ul>
                    <li><span>대표</span>이름요</li>
                    <li><span>사업자등록번호</span>000-00-00000</li>
                    <li><span>주소</span>서을특별시 가나구 가나다라로 00길 00, 가나다빌딩 </li>
                    <li><span>전화번호</span>0000-0000</li>
                    <li><span>이메일</span>abcd@abcd.co.kr</li>
                    <li><span>통신판매업</span>0000-가나다라-00000</li>
                </ul>
            </details>
            {/* 푸터 메뉴 */}
            <ul>
                <li>
                    <Link>앱설치</Link>
                </li>
                <li>
                    <Link>고객센터</Link>
                </li>
                <li>
                    <Link>공지사항</Link>
                </li>
                <li>
                    <Link>이용약관</Link>
                </li>
                <li>
                    <Link>개인정보처리방침</Link>
                </li>
            </ul>
            {/* sns 버튼 영역 */}
            <ul>
                <li>유튜브아이콘</li>
                <li>페이스북아이콘</li>
                <li>인스타아이콘</li>
            </ul>
            <p>COPYRIGHTⓒ 2025 ABCDE. ALL RIGHTS RESERVED.</p>
        </footer>

        {/* 하단 액션바 메뉴 */}
        <div className="actionbar">
            <nav>
                <ul>
                    <li>
                        <Link>아이콘<span>CATEGORY</span></Link>
                    </li>
                    <li>
                        <Link>아이콘<span>고민중?</span></Link>
                    </li>
                    <li>
                        <Link>아이콘<span>HOME</span></Link>
                    </li>
                    <li>
                        <Link to={'/mylike'}>아이콘<span>WISH</span></Link>
                    </li>
                    <li>
                        <Link>아이콘<span>MY</span></Link>
                    </li>
                </ul>
            </nav>
        </div>

        {/* 탑 버튼 영역  이거는 모든 페이지 공용으로 넣어야할듯*/}
        <aside className="gototop-area">
            <button type="button">위로</button>
        </aside>
        </>
    )
}

export default Home