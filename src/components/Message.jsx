import React, { useState } from 'react'

function Message({ activeNumber }) {
    const [message, setMessage] = useState('')


    return (
        <>
            <div className='flex flex-col justify-center items-center mt-[20px] gap-3'>
                <h2 className='text-2xl text-mainOrange'>Step {activeNumber}</h2>
                <p className='text-xl'>{messages[activeNumber - 1]}</p>
            </div>
        </>
    )
}

const messages = [
    "Learn react 🚀",
    "Get Paid 🤑",
    "Invest income ✔",
]

export default Message