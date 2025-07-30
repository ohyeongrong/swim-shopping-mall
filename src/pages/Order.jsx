import BottomActionBar from '@/components/common/BottomActionBar';
import Button from '@/components/common/Button';
import useCartStore from "@/store/useCartStore"
import ProductCard from "@/components/common/ProductCard";
import InputField from "@/components/common/InputField";
import useMemberStore from "@/store/useMemberStore";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useOrderStore from '@/store/useOrderStore';
import { MoreArrowIcon } from "@/components/common/Icon";


function Order() {

    const { removeOderComplete } = useCartStore();

    const { addOrderList, orderList } = useOrderStore();

    const { loginUser } = useMemberStore();

    const navigate = useNavigate();
    const location = useLocation();
    const [productsToOrder, setProductsToOrder] = useState(() => location.state?.products || []);


    // 할인된 가격 계산 함수
    const getDiscountedPrice = (prd) => Math.round(prd.price * (1 - prd.saleRate / 100));

    // 총 상품 금액
    const totalPrice = productsToOrder.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // 총 할인 금액
    const totalDiscount = productsToOrder.reduce((sum, item) => 
        sum + Math.round(item.price * (item.saleRate / 100)) * item.quantity, 0
    );

    // 최종 결제 금액
    const finalPrice = totalPrice - totalDiscount;

    const [tel, setTel] = useState('');
    const [address, setAddress] = useState('');
    const [recipient, setRecipient] = useState('');

    const handleSumit = () => {
        const order = {
            products: productsToOrder,
            user: loginUser,
            shipping: { tel, address, recipient }
        }

        addOrderList(order)
        removeOderComplete(order.products);
        console.log(orderList);
        setRecipient("");
        setTel("");
        setAddress("");
        setProductsToOrder([]);
        navigate('/OrderComplete')
    }


    return (
        <section className="lg:max-w-[1440px] lg:m-auto relative">
            <div className='grid lg:grid-cols-6 lg:gap-16 lg:py-1 relative px-4 lg:px-0 pb-8'>
                <div className="lg:col-span-4 text-sm lg:text-base flex flex-col gap-4 pb-10">
                    {/* 상단 타이틀 진행도 */}
                    <div className="hidden lg:flex justify-between py-10">
                        <h2 className="text-4xl font-bold">주문서 작성</h2>
                        <div className="flex items-center gap-2 font-bold">
                            <p className="text-[var(--color-gray-400)]">01 장바구니</p>
                            <div className="rotate-90">
                                <MoreArrowIcon stroke="var(--color-gray-400)"/>
                            </div>
                            <p>02 주문서 작성</p>
                            <div className="rotate-90">
                                <MoreArrowIcon />
                            </div>
                            <p className="text-[var(--color-gray-400)]">03 주문완료</p>
                        </div>
                    </div>

                    <div className='border-b-2 py-2'>
                        <h2 className='text-base font-bold'>주문상품</h2>
                    </div>
                    <div className="pt-4 flex flex-col gap-4.5 justify-between ">
                        {
                            productsToOrder.map((prd, i)=> {
                                return (
                                    
                                        <div className="w-full flex flex-col gap-4.5" key={prd.id + i}>
                                            {/* 제품 카드 */}
                                            <ProductCard product={prd} direction='horizontal' showOption={true} imgHeight="h-30 lg:h-40"/>
                                            <div className="border-b border-[var(--color-gray-300)]"></div>
                                        </div>
                                )
                            })
                        }

                        {/* 선택 상품 총 금액 */}
                        <div className="w-full flex justify-center pb-4.5 border-b border-[var(--color-black)]">
                            <p>{finalPrice.toLocaleString()}원 + 배송비 0원 =
                                <span className=" text-[var(--color-black)] font-extrabold">
                                    {finalPrice.toLocaleString()}원 
                                </span>
                            </p>
                        </div>

                    </div>
                
                    <div className="border-t-8  border-[var(--color-gray-300)] lg:hidden"></div>       
                    <div className='px-4 py-8 lg:px-0 flex flex-col gap-2 text-sm'>
                        <h2 className='text-base font-bold'>주문자 정보</h2>
                        <div className="border-t-2"></div>
                        <InputField
                            id="name"
                            label="이름"
                            type="text"
                            // value={loginUser.name}
                            disabled
                        />

                        <InputField
                            id="email"
                            label="이메일 아이디"
                            type="email"
                            placeholder="example@email.com"
                            // value={loginUser.email}
                            disabled
                        />
                    </div>

                    <div className="border-t-8  border-[var(--color-gray-300)] lg:hidden"></div>       
                    <div className='px-4 py-8 lg:px-0 flex flex-col gap-2 text-sm'>
                        <h2 className='text-base font-bold'>배송지</h2>
                        <div className="border-t-2"></div>
                        <div className='flex flex-col gap-2'>
                            <InputField
                                id="name"
                                label="받는 분"
                                placeholder="성함"
                                onChange={(e) => setRecipient(e.target.value)}
                            />
                            <InputField
                                id="phone"
                                label="연락처"
                                type="tel"
                                placeholder="010-1234-5678"
                                pattern="^010-\d{4}-\d{4}$"
                                onChange={(e) => setTel(e.target.value)}
                            />
                            <InputField
                                id="address"
                                label="주소"
                                placeholder="서울특별시 가나구 가나다라로 00길 00, 가나다빌딩"
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="border-t-8  border-[var(--color-gray-300)] lg:hidden"></div>       
                {/* 총 결제 금액 */}
                <div className="lg:col-span-2 lg:border-l lg:border-[var(--color-gray-300)] text-[var(--color-black)]  px-4 lg:px-10 flex flex-col gap-4 py-10 lg:mt-22">
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
                    <Button 
                        content={`${finalPrice.toLocaleString()}원 주문하기 (${productsToOrder.length}개)`} 
                        size="xl" className="w-full hidden lg:block"
                        onClick = {()=> handleSumit()}
                    />
                </div>
            </div>        

            <BottomActionBar 
                content={ 
                    <Button 
                    content={`${finalPrice.toLocaleString()}원 주문하기 (${productsToOrder.length}개)`} 
                    size="xl" className="w-full"
                    onClick = {()=> handleSumit()}
                    />
                }
            />
        </section>
    )
}

export default Order