import usePrdInquiryStore from "@/store/usePrdInquiryStore";
import { useParams } from "react-router-dom";
import usePrdInquiry from "@/hooks/usePrdInquiry";

function InquiryList() {

    const { inquiryList, toggleInquiry, openedInquiryId } = usePrdInquiryStore();

    const { filterPrdInquiryList } = usePrdInquiry();

    
    const maskUserId = (id) => {
        const idBackSlice = id.slice(0, -3);
        return `${idBackSlice}***`;
    };

    return (
            <ul className="inquiry-list">

                {/* 문의글 리스트 반복 */}
                {
                    filterPrdInquiryList.map(list => {
                        
                        const date = list.writeAt.substring(0, 10);

                        return (
                            <li className="inquiry-item" key={ list.writer + list.id }
                                onClick={()=>{ toggleInquiry(list.id, list.isSecret) }}>

                                <ul className="write-info">
                                    { 
                                        // 답변 여부 뱃지
                                        list.answered
                                        ? <li><span className="answer complete">답변완료</span></li>
                                        : <li><span className="answer wait">답변대기</span></li>
                                    }
                                    <li><span>{ date }</span></li>
                                    <li><span>{ maskUserId(list.writer) }</span></li>
                                </ul>

                                <div className="inquiry-title">
                                    {
                                        // 비밀글 여부
                                        list.isSecret === 'private'
                                        &&
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 11V6.5H12.5V13.5H4" stroke="#161616" stroke-width="1.5"></path><path d="M7 8.75V11.25" stroke="#161616" stroke-width="1.5"></path><path d="M10 6.5V4.5C10 2.84315 8.65685 1.5 7 1.5V1.5C5.34315 1.5 4 2.84315 4 4.5V6.5" stroke="#161616" stroke-width="1.5"></path></svg>
                                    }
                                    <p>{ list.title }</p>
                                </div>

                                {/* 글 내용 클릭하면 내용 나오는거임  */}
                                {
                                    openedInquiryId === list.id
                                    &&
                                    <div>
                                        <div className="inquiry-content"><p>{ list.content }</p></div>
                                        <div className="inquiry-answer">
                                            <span>답변</span>
                                            <p>{ list.answerContent }</p>
                                            <p>{ list.answeredAt }</p>
                                        </div>
                                    </div>
                                }
                            </li>
                        )
                    })
                }

            </ul>
    )
}

export default InquiryList