import usePrdInquiryStore from "@/store/usePrdInquiryStore";
import useFilterPrdPost from "@/hooks/useFilterPrdPost";
import { SecretIcon } from "@/components/common/Icon";
import Button from '@/components/common/Button';

function InquiryList() {

    const { inquiryList, toggleInquiry, openedInquiryId, show } = usePrdInquiryStore();

    const { filterPrdInquiryList } = useFilterPrdPost();

    
    const maskUserId = (id) => {
        const idBackSlice = id.slice(0, -3);
        return `${idBackSlice}***`;
    };

    return (
        <div className="flex flex-col items-center gap-4 pb-4">
            <ul className="flex flex-col w-full">

                {/* 문의글 리스트 반복 */}
                {
                    filterPrdInquiryList.map(list => {
                        
                        const date = list.writeAt.substring(0, 10);

                        return (
                            <li 
                                className="flex flex-col gap-2 py-6 border-b border-[var(--color-gray-400)]" 
                                key={ list.writer + list.id }
                                onClick={()=>{ toggleInquiry(list.id, list.isSecret) }}>

                                <ul className="flex gap-2 text-xs text-[var(--color-gray-600)]">
                                    { 
                                        // 답변 여부 뱃지
                                        list.answered
                                        ? <li className="flex items-center px-1 text-[10px] font-bold bg-[var(--color-black)] text-[var(--color-white)] ">답변완료</li>
                                        : <li className="flex items-center px-1 text-[10px] font-bold bg-[var(--color-gray-300)] text-[var(--color-gray-600)] ">답변대기</li>
                                    }
                                    <li className="after:ml-2 after:content-['|']">{ date }</li>
                                    <li>{ maskUserId(list.writer) }</li>
                                </ul>
                                <div className="text-sm">
                                    <div className="flex gap-1">
                                        {
                                            // 비밀글 여부
                                            list.isSecret === 'private'
                                            ? <><SecretIcon /><p>비밀글입니다.</p></>
                                            : <p>{ list.title }</p>
                                        }
                                        
                                    </div>

                                    {/* 글 내용 클릭하면 내용 나오는거임  */}
                                    {
                                        openedInquiryId === list.id
                                        &&
                                        <div className="flex flex-col gap-2">
                                            <div><p>{ list.content }</p></div>
                                        </div>
                                    }
                                </div>
                            </li>
                        )
                    })
                }

            </ul>

            <Button content="상품 리뷰 작성하기" size="lg" className="w-full"  onClick={ show }/>
        </div>
    )
}

export default InquiryList