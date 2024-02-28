import React from 'react'

function BurgerMenu({ viewStepper }) {
    return (

        <div className='flex flex-col gap-2 absolute top-2 right-2 p-[20px] cursor-pointer' onClick={viewStepper}>
            <div className='w-[20px] h-[2px] bg-slate-600'></div>
            <div className='w-[20px] h-[2px] bg-slate-600'></div>
            <div className='w-[20px] h-[2px] bg-slate-600'></div>
        </div>

    )
}

export default BurgerMenu