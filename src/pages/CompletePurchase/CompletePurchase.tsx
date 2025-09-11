import React from 'react'

export default function CompletePurchase() {
    return (
        <div className='bg-backGroundColor flex flex-col gap-5 py-12 px-4 md:px-8 lg:px-16'>
            <header className='flex flex-col items-center gap-5'>
                <p className='text-paragraphTextColor flex flex-row gap-1 items-center sm:gap-2 w-full'>
                    <span>الرئيسية</span>
                    <img src="/company-details/CaretLeft.svg" alt="CaretLeft" className='w-4 h-4' />
                    <span>سلة التسوق</span>
                    <img src="/company-details/CaretLeft.svg" alt="CaretLeft" className='w-4 h-4' />
                    <span>إتمام الشراء</span>
                </p>

                <div className="flex flex-row items-center justify-between md:w-xl lg:w-2xl min-w-2xs font-bold text-lg text-textColor relative">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <span className='rounded-full bg-mainColor w-10 h-10 text-white flex items-center justify-center relative z-10'>1</span>
                        <span className=''>معلومات العميل والتسليم</span>
                    </div>
                    <span className='h-0.5 bg-[#D9D9D9] absolute start-20 end-14 top-5'></span>
                    <div className="flex flex-col items-center justify-center gap-2 ">
                        <span className='rounded-full bg-[#D9D9D9] w-10 h-10 text-textColor flex items-center justify-center relative z-10'>2</span>
                        <span className=''>مراجعة والدفع</span>
                    </div>
                </div>
            </header>
            
        </div>
    )
}
