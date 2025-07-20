import { DeleteIcon, PlusIcon, MinusIcon } from "@/components/common/Icon";
import Button from "@/components/common/Button";

function OptionBottomSheet({
    mode = 'edit',
    sizes = [],
    selectedOption,
    setSelectedOption,
    quantity,
    setQuantity,
    totalPrice,
    onSubmit,
    submitLabel = "확인",
    showDelete = true,
    onClose,
    }) {
        

    const increase = () => setQuantity(quantity + 1);
    const decrease = () => setQuantity(Math.max(1, quantity - 1));


    return (
        <div className="z-1000 fixed inset-0 bg-[var(--color-black)]/40">
            <div className="fixed right-0 left-0 bottom-0 bg-[var(--color-white)]">
                {/* 닫기 버튼 */}
                <div className="flex items-center justify-center py-2">
                    <button type="button" onClick={onClose}>
                        <div className="bg-[var(--color-gray-400)] w-10 h-1 rounded-full"></div>
                        <span className="hidden">닫기</span>
                    </button>
                </div>

                {/* 옵션 선택 & 수량 조절 */}
                <div className="text-sm text-[var(--color-black)] px-[var(--spacing-16-32)] py-3 flex flex-col gap-3">
                    {/* 옵션 선택 */}
                    <select
                        className="w-full border border-[var(--color-gray-500)] px-4 py-3.5"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option value="">옵션 선택</option>
                        {
                            sizes.map((size, i) => (
                                <option value={size.label} key={i}>{size.label}</option>
                            ))
                        }
                    </select>

                    {/* 수량 조절 */}
                    { selectedOption && (
                        <ul className="pl-2 py-3">
                            <li className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                <span className="text-sm">{selectedOption}</span>
                                {showDelete && (
                                    <button
                                    type="button"
                                    onClick={() => {
                                        setSelectedOption("");
                                        setQuantity(1);
                                    }}
                                    >
                                    <DeleteIcon />
                                    </button>
                                )}
                                </div>

                                <div className="flex items-center border border-[var(--color-gray-500)]">
                                    <div className="flex justify-center items-center w-8 h-8 bg-[var(--color-gray-100)]">
                                        <button type="button" onClick={decrease}>
                                        <MinusIcon />
                                        </button>
                                    </div>
                                    <input
                                        className="text-center px-2 text-xs w-12"
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        min="1"
                                        max="100"
                                        step="1"
                                    />
                                    <div className="flex justify-center items-center w-8 h-8 bg-[var(--color-gray-300)]">
                                        <button type="button" onClick={increase}>
                                        <PlusIcon />
                                        </button>
                                    </div>
                                </div>
                                
                            </li>
                        </ul>
                    )}

                    {/* ✅ mode가 'add'일 때만 총합 표시 */}
                    { mode === 'add' && selectedOption && (
                        <div className="border-t border-[var(--color-gray-300)] flex justify-between items-center py-4">
                            <p>총 결제 금액</p>
                            <strong className="text-xl font-extrabold">{totalPrice.toLocaleString()}원</strong>
                        </div>
                    )}

                    {/* 하단 버튼 */}
                    <Button
                        content={submitLabel}
                        size="lg"
                        className="w-full"
                        onClick={onSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default OptionBottomSheet;
