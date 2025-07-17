import { EmptyIcon } from "@/components/common/Icon"

function EmptyState({ type, link }) {
    
    const emptyMessages = [
        { type: "review", message: "작성된 리뷰가 없습니다.", btnMessage: "상품 리뷰 작성하기"},
        { type: "mylike", message: "찜한 상품이 없습니다.", btnMessage: "취향에 맞는 상품 찾기"},
        { type: "inquiry", message: "문의 내역이 없습니다.", btnMessage: "상품 문의 작성하기"},
        { type: "cart", message: "장바구니에 담은 상품이 없습니다.", btnMessage: "쇼핑 계속하기"},
    ];

    const typeFind = emptyMessages.find((item) => item.type === type)

    return (
        <div className="flex flex-col py-20 items-center gap-10">
            <div className="flex flex-col items-center gap-3">
                <EmptyIcon />
                <p className="text-xs text-[var(--color-gray-600)]">{ typeFind.message }</p>
            </div>
            <button type="button" className="bg-[var(--color-black)] text-sm text-[var(--color-white)] w-60 h-12" onClick={ link }>{ typeFind.btnMessage }</button>
        </div>
    )
}

export default EmptyState