import React, { useState } from 'react'

function Numbers({ activeNumber }) {




    return (
        <>
            <div className='flex justify-between items-center p-[20px]'>
                {activeNumber === 1 ? (
                    <div className='bg-mainOrange flex justify-center items-center text-textWhite  rounded-full w-[30px] h-[30px]'>1</div>

                ) : (<div className='bg-[silver] flex justify-center items-center  rounded-full w-[30px] h-[30px]'>1</div>)
                }
                {activeNumber === 2 ? (
                    <div className='bg-mainOrange flex justify-center items-center text-textWhite  rounded-full w-[30px] h-[30px]'>2</div>

                ) : (<div className='bg-[silver] flex justify-center items-center  rounded-full w-[30px] h-[30px]'>2</div>)
                }
                {activeNumber === 3 ? (
                    <div className='bg-mainOrange flex justify-center items-center text-textWhite  rounded-full w-[30px] h-[30px]'>3</div>

                ) : (<div className='bg-[silver] flex justify-center items-center  rounded-full w-[30px] h-[30px]'>3</div>)
                }



            </div>
        </>
    )
}

export default Numbers
