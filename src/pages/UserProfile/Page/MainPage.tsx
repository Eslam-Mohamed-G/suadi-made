import React from 'react'
import { useLocation } from 'react-router-dom'

export default function MainPage() {
    const location = useLocation()
    return (
        <div className="">
            <header className='bg-white h-24 border-b border-borderColor content-center px-8'>
                <h1 className='text-2xl text-textColor font-bold'>الرئيسية</h1>
                <p className='text-paragraphTextColor'>تواصل مع الشركات والموردين</p>
            </header>
        </div>
    )
}
