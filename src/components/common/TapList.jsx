function TapList({ tabList, onTabClick, onTabChange, ListLength}) {

    return(
            <div className="text-sm font-bold">
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
                                            {ListLength}
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