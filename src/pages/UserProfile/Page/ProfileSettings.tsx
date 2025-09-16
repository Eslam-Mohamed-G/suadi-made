import React from 'react'

export default function ProfileSettings() {
    return (
        <div className='flex flex-col'>
            <header className='bg-white h-24 border-b border-borderColor content-center px-8 flex items-center justify-between'>
                <div className="">
                    <h1 className='text-2xl text-textColor font-bold'>إعدادات الحساب</h1>
                    <p className='text-paragraphTextColor'>إدارة معلومات حسابك الشخصي</p>
                </div>
                <button className='bg-mainColor text-white flex items-center justify-center gap-2 rounded-lg px-4 py-2 cursor-pointer'>
                    <img src="/userProfile/PencilSimpleLine.svg" alt="PencilSimpleLine" />
                    <span>تعديل</span>
                </button>
            </header>
        </div>
    )
}
