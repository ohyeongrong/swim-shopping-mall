import usePrdInquiryStore from "@/store/usePrdInquiryStore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function InquiryWriteModal() {

    const { hide, addInquiryList, inquiryList }  = usePrdInquiryStore();

    const [radioChecked, setRadioChecked] = useState('public');
    const [title, setTitle] = useState("");
    const [content, setContet] = useState("");
    const [titleErr, setTitleErr] = useState("");
    const [contentErr, setContentErr] = useState("");

    const { prdId } = useParams();

    const handleAddInquiryList = () => {

        const write = {
            id: inquiryList.length + 1, //나중에 변경 해야함
            productId: prdId,
            writer: 'abcdefg', //로그인 구현하면 나중에 넣기
            title: title,
            content: content,
            isSecret: radioChecked,
            writeAt: new Date().toISOString(),
            answered: false,
            answerContent: '',
            answeredAt: '날짜',
        }

        const isEmpty = (text) => text.trim() === "";

        setTitleErr( isEmpty(title) ? "제목을 입력해 주세요." : "");
        setContentErr( isEmpty(content) ? "내용을 입력해 주세요." : "");

        if(!(isEmpty(title)) && !(isEmpty(content))){
            addInquiryList(write);
            setContet('');
            setTitle('');
            setRadioChecked('public');
            hide()
        }
    }

    return(
        <div className="qna-modal-wrap flex flex-col gap-2">
            <div className="flex justify-between">
                <h4>상품 문의하기</h4>
                <button onClick={ hide }>닫기</button>
            </div>

            <form /*onSubmit=""*/ autoComplete="off" noValidate className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <label>공개여부</label>
                    <div className="radio-group flex gap-3">
                        <div className="flex gap-1">
                            <input type="radio" name="secret" id="public" 
                                value="public" 
                                checked={ radioChecked === "public" }
                                onChange={(e)=>{ setRadioChecked(e.target.value) }} />
                            <label htmlFor="public">공개</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="radio" name="secret" id="private" 
                                value="private"
                                checked={ radioChecked === "private" } 
                                onChange={(e)=>{ setRadioChecked(e.target.value) }}
                            />
                            <label htmlFor="private">비공개</label>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="title">제목</label>
                    <input type="text" name="title" id="title" placeholder="제목을 입력해주세요." maxLength="50" 
                        onChange={(e)=>{ setTitle(e.target.value) }} />
                    {/* 에러 */}
                    { titleErr && <p className="error">{ titleErr }</p> }
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="content">내용</label>
                    <textarea name="content" id="content" placeholder="내용을 입력해 주세요." maxLength="1000"
                        onChange={(e)=>{ setContet(e.target.value) }}
                    ></textarea>
                    {/* 에러 */}
                    { contentErr && <p className="error">{ contentErr }</p> }
                </div>
            </form>

            <div className="btn-area">
                <button type="button" onClick={ hide }>닫기</button>
                <button type="submit"
                    onClick={()=>{ handleAddInquiryList() }}
                >등록하기</button>
            </div>
        </div>
    )
}

export default InquiryWriteModal