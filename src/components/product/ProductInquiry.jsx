import InquiryWriteModal from "./InquiryWriteModal"
import usePrdInquiryStore from "@/store/usePrdInquiryStore";
import InquiryList from "@/components/product/InquiryList"
import usePrdInquiry from "@/hooks/useFilterPrdPost";
import FullScreenModal from "../common/FullScreenModal";
import { useRef } from "react";

function ProductInquiry() {

    const formRef = useRef();

    const { addInquiryList, inquiryList, isVisible, show, hide }  = usePrdInquiryStore();
    const { filterPrdInquiryList } = usePrdInquiry();
    
    return(
        <>
            <div className="prd-inquiry-wrap">
                <div className="prd-inquiry-title">
                    <h3>상품문의 [{ filterPrdInquiryList.length }]</h3>
                </div>

                {
                    filterPrdInquiryList.length > 0
                    ? /* 글 있을때 */
                        <InquiryList />
                    : /* 글 없을 때 */
                        <div>
                            <svg width="135" height="80" viewBox="0 0 135 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M58.0879 10.1961L0.0486755 0V30.5882L58.0879 18.0392V10.1961Z" fill="url(#paint0_linear_233_20511)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M65.9318 0L51.0298 7.84314V10.1961H54.9514V18.0392H51.0298V20.3922H52.5985L47.8926 80H83.971L79.2651 20.3922H80.8338V18.0392H76.9122V10.1961H80.8338V7.84314L65.9318 0ZM58.0887 18.0392H73.7749V10.1961H58.0887V18.0392Z" fill="#CCCCCC"></path><path opacity="0.8" d="M62.0098 74.5099C62.0098 72.3441 63.7655 70.5884 65.9313 70.5884C68.0972 70.5884 69.8529 72.3441 69.8529 74.5099V76.8629H62.0098V74.5099Z" fill="white"></path><rect x="58.0879" y="10.1963" width="15.6863" height="7.84314" fill="#EEEEEE"></rect><defs><linearGradient id="paint0_linear_233_20511" x1="58.0879" y1="14.1176" x2="0.0486755" y2="14.1176" gradientUnits="userSpaceOnUse"><stop stop-color="#EEEEEE"></stop><stop offset="1" stop-color="#EEEEEE" stop-opacity="0"></stop></linearGradient></defs></svg>
                            <p>문의글이 없습니다.</p>
                        </div>
                }

                {/* productQna 컴포넌트로 이동 */}
                <div>
                    <button onClick={ show }>상품 문의하기</button>
                </div>
            </div>

            

            { 
                isVisible 
                &&  <FullScreenModal 
                        modalContent={ <InquiryWriteModal ref={ formRef } /> } 
                        title="상품 문의하기"
                        onClose={ hide }
                        submitLabel="등록하기"
                        onSubmit={() => {
                        const data = formRef.current?.getFormData?.();
                        addInquiryList(data)
                        console.log(inquiryList);
                        hide();
                        }}
                        />
            }
            
        </>
    )
}

export default ProductInquiry