import InquiryWriteModal from "./InquiryWriteModal"
import usePrdInquiryStore from "@/store/usePrdInquiryStore";
import InquiryList from "@/components/product/InquiryList"
import usePrdInquiry from "@/hooks/useFilterPrdPost";
import FullScreenModal from "../common/FullScreenModal";
import { useRef } from "react";
import EmptyState from '@/components/common/EmptyState';

function ProductInquiry() {

    const formRef = useRef();

    const { addInquiryList, inquiryList, isVisible, show, hide }  = usePrdInquiryStore();
    const { filterPrdInquiryList } = usePrdInquiry();
    
    
    return(
        <>
            <div className="px-4 lg:px-0 py-10">
                <div>
                    <h3 className="font-bold text-xl">상품문의 <span className="text-[var(--color-gray-500)]">{ filterPrdInquiryList.length }</span></h3>
                </div>

                {
                    filterPrdInquiryList.length > 0
                    ? <InquiryList />
                    : <EmptyState type={'inquiry'} link={ show }/>
                }

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