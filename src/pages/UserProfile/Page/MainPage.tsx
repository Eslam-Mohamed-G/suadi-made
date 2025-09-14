import React from 'react'
import { useLocation } from 'react-router-dom'

export default function MainPage() {
    const location = useLocation()
    return (
        <div className="">
            <header className='bg-white h-20 border-b border-borderColor'>
                <h1 className='text-2xl text-textColor font-bold'>الرئيسية</h1>
                <p>تواصل مع الشركات والموردين</p>
            </header>
        </div>
    )
}
