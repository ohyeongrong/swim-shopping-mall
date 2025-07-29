import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useOrderStore from '@/store/useOrderStore';
import useCartStore from '@/store/useCartStore';
import ProductCard from '@/components/common/ProductCard';
import Button from '@/components/common/Button';
import BottomActionBar from '@/components/common/BottomActionBar';

function OrderComplete() {
    const { orderList } = useOrderStore();
    const { removeOderComplete } = useCartStore();
    const navigate = useNavigate();

    // 마지막 주문 데이터 가져오기
    const lastOrder = orderList[orderList.length - 1];

    useEffect(() => {
        if (!lastOrder) {
            // 주문 없이 이 페이지 들어오면 홈으로 리디렉션
            navigate('/');
        }
    }, [lastOrder, navigate]);

    if (!lastOrder) return null;

    const { products } = lastOrder;

    const totalPrice = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
    const totalDiscount = products.reduce((sum, p) => sum + Math.round(p.price * (p.saleRate / 100)) * p.quantity, 0);
    const finalPrice = totalPrice - totalDiscount;

    return (
        <section>
            <div className="px-4 py-8">
                <h2 className="text-xl font-bold text-center">주문이 완료되었습니다!</h2>
                <p className="text-center text-sm text-gray-600 mb-10">
                    주문해 주셔서 감사합니다. 아래 주문 정보를 확인해 주세요.
                </p>

                <div className="border-b-2 py-2">
                    <h3 className="text-base font-bold">주문상품</h3>
                </div>
                <div className="pt-4 flex flex-col gap-4.5 justify-between ">
                {
                    products.map((prd, i)=> {
                        return (
                            <div className="w-full flex flex-col gap-4.5" key={prd.id + i}>
                                {/* 제품 카드 */}
                                <ProductCard product={prd} direction='horizontal' showOption={true} imgHeight="h-30 lg:h-40"/>
                                <div className="border-b border-[var(--color-gray-300)]"></div>
                            </div>
                        )
                    })
                }
                </div>
                {/* 결제 정보 */}
                <div className="lg:col-span-2 lg:border-l lg:border-[var(--color-gray-300)] text-[var(--color-black)] lg:px-10 flex flex-col gap-4 py-10">
                    <ul>
                        <li className="flex justify-between items-center">
                            <strong>총 결제 금액</strong>
                            <strong className="text-xl font-extrabold">{finalPrice.toLocaleString()}원</strong>
                        </li>
                    </ul>
                    <div className="border-t"></div>
                    <ul className="text-sm flex flex-col gap-2">
                        <li className="flex justify-between">
                            <p className=" text-[var(--color-gray-600)]">총 상품 금액</p>
                            <span>{totalPrice.toLocaleString()}원</span>
                        </li>
                        <li className="flex justify-between">
                            <p className=" text-[var(--color-gray-600)]">총 배송비</p>
                            <span>0원</span>
                        </li>
                        <li className="flex justify-between">
                            <p className=" text-[var(--color-gray-600)]">총 할인 금액</p>
                            <span>
                                {totalDiscount > 0 && '-'}
                                {totalDiscount.toLocaleString()}원
                            </span>
                        </li>
                    </ul>
                </div>

            </div>

            <BottomActionBar
                content={
                    <div className="flex gap-2 w-full">
                        <Button
                            content="홈으로 가기"
                            className="w-1/2"
                            variant='secondary'
                            onClick={() => navigate('/')}
                        />
                        <Button
                            content="주문내역 보기"
                            className="w-1/2"
                            onClick={() => navigate('/mypage')}
                        />
                    </div>
                }
            />
        </section>
    );
}

export default OrderComplete;
