import React from 'react'

export default function GreenAuthenticator() {
    return (
        <div className='bg-mainColor h-full relative flex pt-20 px-8'>
            {/* logo */}
            <div className="w-28 h-28 absolute end-0 top-0">
                <img src="/min-logo-end.png" alt="min-logo-end" className="w-full object-contain" />
            </div>

            <div className="text-white max-w-72 md:max-w-80 flex flex-col items-start">
                <div className="w-40 h-40 content-center">
                    <img src="/footer/white-saudi-made-logo.png" alt="white-saudi-made-logo" className="w-full object-contain" />
                </div>
                <h1 className='text-2xl font-bold'>اكتشف أفضل الشركات السعودية المتخصصة</h1>
                <p className='text-lg'>اكتشف الشركات الموثوقة، اطلب الخدمات، ووسع شبكة علاقاتك التجارية</p>

                <ul className='flex flex-col gap-2 mt-5'>
                    <li className='flex flex-row items-center gap-2'>
                        <div className="w-9 h-9 bg-[#48795ACC] rounded-lg flex items-center justify-center">
                            <img src="/ShieldCheck.png" alt="ShieldCheck" className='w-5 h-5' />
                        </div>
                        <span className='text-lg font-bold'>شركات موثقة ومعتمدة</span>
                    </li>
                    <li className='flex flex-row items-center gap-2'>
                        <div className="w-9 h-9 bg-[#48795ACC] rounded-lg flex items-center justify-center">
                            <img src="/Users.png" alt="Users" className='w-5 h-5' />
                        </div>
                        <span className='text-lg font-bold'>دعم عملاء متميز</span>
                    </li>
                </ul>
            </div>

            {/* logo */}
            <div className="w-32 h-32 absolute start-0 bottom-6">
                <img src="/min-logo.png" alt="min-logo" className="w-full object-contain" />
            </div>
        </div>
    )
}
