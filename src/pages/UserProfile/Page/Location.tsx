import React from 'react'
import Buildings from "../../../assets/products/Buildings.webp";

export default function Location() {
    return (
        <div className='flex flex-col'>
            <header className='bg-white h-24 border-b border-borderColor content-center px-8 flex items-center justify-between'>
                <div className="">
                    <h1 className='text-2xl text-textColor font-bold'>عناويني</h1>
                    <p className='text-paragraphTextColor'>إدارة عناوين التسليم الخاصة بك</p>
                </div>
                <button className='bg-mainColor text-white flex items-center justify-center gap-2 rounded-lg px-4 py-2'>
                    <img src="/userProfile/Plus.svg" alt="Plus" />
                    <span>إضافة عنوان</span>
                </button>
            </header>

            <main className='flex flex-row flex-wrap justify-around p-4 md:p-8 gap-10'>
                <div className="bg-white border border-mainColor rounded-lg p-4 flex flex-row items-center gap-5 max-w-96">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-14 h-14 bg-secondBackGroundColor text-mainColor rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mb-1"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                        </div>

                        <div className="flex flex-col text-paragraphTextColor">
                            <h1 className='text-xl font-bold text-textColor'>المنزل</h1>
                            <span className='text-paragraphTextColor'>حي النزهة، شارع الملك فهد، مبنى ١٢٣</span>
                            <span>الدور الثاني، شقة ٢٠٥</span>
                            <span>+966501234567</span>
                        </div>
                    </div>

                    <div className="flex flex-row gap-2">
                        <button className='cursor-pointer'>
                            <img src="/gray-icons/PencilSimpleLine.svg" alt="PencilSimpleLine" className='w-5 h-5' />
                        </button>
                        <button className='cursor-pointer'>
                            <img src="/gray-icons/TrashSimple.svg" alt="TrashSimple" className='w-5 h-5' />
                        </button>
                    </div>
                </div>

                <div className="bg-white border border-borderColor rounded-lg p-4 flex flex-col gap-4 max-w-96">
                    <div className="flex flex-row items-center gap-5">
                        <div className="flex flex-row gap-2 items-center">
                            <div className="w-14 h-14 bg-secondBackGroundColor text-mainColor rounded-full flex items-center justify-center">
                                <img src="/company-details/green-icons/Buildings.svg" alt="bulding" className='w-8 h-8' />
                            </div>

                            <div className="flex flex-col text-paragraphTextColor">
                                <h1 className='text-xl font-bold text-textColor'>العمل</h1>
                                <span className='text-paragraphTextColor'>حي العليا، طريق الملك عبدالعزيز، برج الأعمال</span>
                                <span>الطابق ١٥، مكتب ١٥٠٢</span>
                                <span>+966501234567</span>
                            </div>
                        </div>

                        <div className="flex flex-row gap-2">
                            <button className='cursor-pointer'>
                                <img src="/gray-icons/PencilSimpleLine.svg" alt="PencilSimpleLine" className='w-5 h-5' />
                            </button>
                            <button className='cursor-pointer'>
                                <img src="/gray-icons/TrashSimple.svg" alt="TrashSimple" className='w-5 h-5' />
                            </button>
                        </div>
                    </div>

                    <button className='border border-mainColor text-mainColor rounded-lg py-2 hover:bg-mainColor hover:text-white transition-colors ease-in-out duration-500 cursor-pointer'>
                        <span>تعيين كإفتراضي</span>
                    </button>
                </div> 
            </main>
        </div>
    )
}
