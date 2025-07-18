function BottomActionBar({ content }) {
    return(
        <div className="relative">
            <div className="flex gap-2 fixed bottom-0 rigth-0 left-0 z-100  bg-[var(--color-white)] w-full px-4 py-3">
                { content }
            </div>
        </div>
    )
}

export default BottomActionBar