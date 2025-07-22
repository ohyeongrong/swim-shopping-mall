function TapList({ tabList, onTabClick, onTabChange }) {

    return(
            <div className="text-sm lg:text-base font-bold sticky top-0 bg-white">
                <ul className="flex w-full justify-center items-center text-center">
                    {
                        tabList.map((tap, i)=>
                            <li 
                                key={i} 
                                className= {`w-full py-3 border-b-2 ${ onTabClick === tap.type ? "border-[var(--color-black)] text-[var(--color-black)]" : "border-[var(--color-gray-300)]  text-[var(--color-gray-500)]" }`}>
                                <button type="button" onClick={() => onTabChange(tap.type)}>
                                    <div className="flex items-center gap-1">
                                        {tap.label}
                                        <span className="text-xs  text-[var(--color-gray-500)]">
                                            { tap.length > 0 && tap.length }
                                        </span>
                                    </div>
                                </button>
                            </li>
                        )
                    }

                </ul>
            </div>
    )
}

export default TapList