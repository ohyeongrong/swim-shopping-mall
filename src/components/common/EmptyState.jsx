import { EmptyIcon } from "@/components/common/Icon"

function EmptyState({ type }) {
    
    const emptyMessages = [
        { type: "review", message: "작성된 리뷰가 없습니다." },
        { type: "mylike", message: "찜한 상품이 없습니다." },
        { type: "inquiry", message: "문의 내역이 없습니다." },
    ];

    const typeFind = emptyMessages.find((item) => item.type === type)

    return (
        <div className="flex flex-col gap-4 items-center py-20">
            <EmptyIcon />
            <p className="text-xs text-[var(--color-gray-500)]">{ typeFind.message }</p>
        </div>
    )
}

export default EmptyState