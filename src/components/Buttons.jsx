import React from 'react'

function Buttons({ children, onClick }) {
    return (
        <div>
            <button onClick={onClick} className='bg-mainOrange px-[12px] py-[6px] text-textWhite'>{children}</button>
        </div>
    )
}

export default Buttons