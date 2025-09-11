import React from 'react'
import { Link } from 'react-router-dom'

export default function Servies() {
    return (
        <div className="pt-8">
            <section className='bg-gray-100 px-4 md:px-8 lg:px-16 py-10 flex flex-col items-center justify-center gap-6'>
                <header className='text-center'>
                    <h1 className='text-textColor font-bold text-4xl'>تصفية الخدمات</h1>
                </header>

                <div className="flex flex-col gap-6">
                    <form action="" className="grid grid-cols-2 md:grid-cols-4 max-w-3xl gap-4 w-fit bg-white border border-gray-400 rounded-lg px-4 py-8">
                        <div className="">
                            <div className="relative">
                                <input
                                    type="text"
                                    name='campany'
                                    placeholder="ابحث بإسم الشركة"
                                    className="w-full border border-gray-400 rounded-lg px-2 ps-7 py-2 cursor-pointer focus:outline-none hover:border-mainColor hover:bg-secondBackGroundColor transition-colors ease-in-out duration-500 placeholder:text-lg placeholder:text-textColor"
                                />
                                <span className="absolute z-10 start-1 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-textColor"><path d="m21 21-4.34-4.34" /><circle cx={11} cy={11} r={8} /></svg>
                                </span>
                            </div>
                        </div>

                        <div className="">
                            <div className="relative">
                                <input
                                    type="text"
                                    name='area'
                                    placeholder='المنطقة'
                                    className="w-full border border-gray-400 rounded-lg p-2 cursor-pointer focus:outline-none hover:border-mainColor hover:bg-secondBackGroundColor transition-colors ease-in-out duration-500 placeholder:text-lg placeholder:text-textColor"
                                />
                                <span className={`absolute end-1 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-300`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-textColor"><path d="m18 15-6-6-6 6" /></svg>
                                </span>
                            </div>
                        </div>

                        <div className="">
                            <div className="relative">
                                <input
                                    type="text"
                                    name='sector'
                                    placeholder='القطاع'
                                    className="w-full border border-gray-400 rounded-lg p-2 cursor-pointer focus:outline-none hover:border-mainColor hover:bg-secondBackGroundColor transition-colors ease-in-out duration-500 placeholder:text-lg placeholder:text-textColor"
                                />
                                <span className="absolute end-1 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-textColor"><path d="m18 15-6-6-6 6" /></svg>
                                </span>
                            </div>
                        </div>

                        <div className="md:px-6">
                            <button className='bg-white text-mainColor border border-mainColor hover:bg-mainColor hover:text-white transition-colors ease-in-out duration-500 rounded-lg px-4 py-1.5 w-full h-fit cursor-pointer'>
                                <span className='text-lg'>مسح الكل</span>
                            </button>
                        </div>
                    </form>

                    <div className="flex flex-col md:flex-row gap-8 justify-between items-center w-full">
                        <div className="">
                            <span className='bg-secondBackGroundColor rounded-2xl px-4 py-2'>تم العثور على 12شركة</span>
                        </div>

                        <div className="flex flex-row items-center justify-between w-full md:w-fit gap-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    name='area'
                                    placeholder='ترتيب حسب'
                                    className="w-full border border-gray-400 rounded-lg p-2 cursor-pointer focus:outline-none hover:border-mainColor hover:bg-secondBackGroundColor transition-colors ease-in-out duration-500 placeholder:text-lg placeholder:text-textColor"
                                />
                                <span className={`absolute end-1 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-300`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-textColor"><path d="m18 15-6-6-6 6" /></svg>
                                </span>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-2">
                                <div className="group">
                                    <button className='bg-white p-0.5 rounded border border-mainColor group-hover:bg-mainColor group-hover:text-white transition-colors ease-in-out duration-500 cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-mainColor group-hover:text-white transition-colors ease-in-out duration-500"><rect width={7} height={7} x={3} y={3} rx={1} /><rect width={7} height={7} x={14} y={3} rx={1} /><rect width={7} height={7} x={14} y={14} rx={1} /><rect width={7} height={7} x={3} y={14} rx={1} /></svg>
                                    </button>
                                </div>
                                <div className="group">
                                    <button className='bg-white p-0.5 rounded border border-mainColor group-hover:bg-mainColor group-hover:text-white transition-colors ease-in-out duration-500 cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-mainColor group-hover:text-white transition-colors ease-in-out duration-500"><path d="M3 5h.01" /><path d="M3 12h.01" /><path d="M3 19h.01" /><path d="M8 5h13" /><path d="M8 12h13" /><path d="M8 19h13" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='px-4 md:px-8 lg:px-16 py-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                    {Array.from({ length: 12 }, (_, i) => (
                        <div key={i} className="flex flex-col gap-4 border border-mainColor rounded-2xl p-4">
                            <header className="flex flex-row gap-2 items-center">
                                {/* img */}
                                <div className="w-36 h-36 md:w-40 md:h-40">
                                    <img src="/campany-img.png" alt="campany-img" className='w-full' />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className='text-xl md:text-3xl font-bold flex flex-row items-center gap-2'>شركة البناء المتقدم<img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4' /></h3>
                                    <span className='bg-secondaryColor text-white w-fit rounded-4xl px-4 py-2'>الخدمات اللوجيستية</span>
                                </div>
                            </header>

                            <div className="flex flex-col gap-4">
                                <ul className='text-paragraphTextColor'>
                                    <li className='text-xl font-bold text-textColor'><span>الخدمات الأساسية:</span></li>
                                    <li className='flex flex-row gap-2 items-center'><img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4'/><span>تصميم معماري متكامل</span> </li>
                                    <li className='flex flex-row gap-2 items-center'><img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4'/><span>إدارة مشاريع البناء</span> </li>
                                    <li className='flex flex-row gap-2 items-center'><img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4'/><span>مقاولات عامة ومتخصصة</span> </li>
                                    <li className='flex flex-row gap-2 items-center'><img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4'/><span>تشطيبات داخلية وخارجية</span> </li>
                                </ul>
                                <div className="flex flex-row justify-between items-center text-paragraphTextColor text-lg">
                                    <span className='flex flex-row items-center justify-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-paragraphTextColor"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx={12} cy={10} r={3} /></svg>
                                        سعودية • الرياض
                                    </span>
                                    <span className='flex flex-row items-center justify-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx={12} cy={12} r={3} /></svg>
                                        <span className='mb-1'>9.7k</span>
                                    </span>
                                </div>

                                <div className="flex flex-row items-center gap-2">
                                    <div className="flex flex-row items-center">
                                        <img src="/Star.png" alt="star" className='w-5 h-5' />
                                        <img src="/Star.png" alt="star" className='w-5 h-5' />
                                        <img src="/Star.png" alt="star" className='w-5 h-5' />
                                        <img src="/Star.png" alt="star" className='w-5 h-5' />
                                        <img src="/gray-star.png" alt="star" className='w-5 h-5' />
                                    </div>
                                    <span>4.7</span>
                                    <span className='text-sm text-paragraphTextColor'>(156)</span>
                                </div>

                                <div className="flex flex-row items-center gap-3">
                                    <span className='bg-gray-200 rounded-3xl px-2 py-1'>B2B</span>
                                    <span className='bg-gray-200 rounded-3xl px-2 py-1'>مقاول معتمد</span>
                                    <span className='bg-gray-200 rounded-3xl px-2 py-1'>ISO 9001</span>
                                </div>

                                <div className="flex flex-row items-center gap-4 w-full">
                                    <div className="group w-full flex">
                                        <Link  to="/companyDetails" className='border border-mainColor rounded-lg py-2 w-full text-center bg-mainColor group-hover:bg-white transition-colors ease-in-out duration-500 cursor-pointer'>
                                            <span className='text-xl text-white group-hover:text-mainColor transition-colors ease-in-out duration-500'>عرض الشركة</span>
                                        </Link>
                                    </div>
                                    <div className="group w-full">
                                        <button className='border border-mainColor rounded-lg py-2 w-full group-hover:bg-mainColor transition-colors ease-in-out duration-500 cursor-pointer'>
                                            <span className='text-xl group-hover:text-white transition-colors ease-in-out duration-500'>طلب خدمة</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <nav aria-label="Page navigation example" className='flex items-center justify-center mt-5'>
                    <ul className="flex items-center -space-x-px h-10 text-base mx-auto">
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Previous</span>

                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-white bg-mainColor border border-mainColor hover:bg-mainColor hover:text-white dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Next</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}
