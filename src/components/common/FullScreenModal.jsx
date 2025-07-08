function FullScreenModal({ modalContent, title, onClose, onSubmit, submitLabel }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <div className="full-modal-wrap flex flex-col gap-2">

            <div className="flex justify-between">
                {/* 여기 부분은 수정될건데 제품리뷰는 여기에 제품 상세 썸네일? 작게 들어갈거임 */}
                <h4>{ title }</h4>
                <button type="button" onClick={ onClose }>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9961 4.99609L11.9961 11.9961L4.99609 18.9961" stroke="var(--gray-02)"></path><path d="M19.0039 18.9961L14.0039 13.9961" stroke="var(--gray-02)"></path><path d="M5.00391 4.99609L10.0039 9.99609" stroke="var(--gray-02)"></path></svg>
                </button>
            </div>

            <form onSubmit={ handleSubmit } autoComplete="off" noValidate className="flex flex-col gap-4">
                { modalContent }
                <div className="btn-area">
                    <button type="button" onClick={ onClose }>닫기</button>
                    <button type="submit">{ submitLabel }</button>
                </div>
            </form>

        </div>
    )
}

export default FullScreenModal