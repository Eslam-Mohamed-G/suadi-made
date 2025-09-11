import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <main className='flex flex-col gap-16'>
            <section className="relative h-[85dvh] bg-cover bg-fixed bg-center bg-no-repeat" style={{ backgroundImage: 'url("/main-photo.png")' }}>
                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-12">
                    <div className="text-white leading-16">
                        <h1 className="text-white text-4xl md:text-6xl font-bold flex flex-col text-center">
                            <span className='tracking-tight'>مرحباً بك في صناعة سعودية</span>
                            <span className='text-secondaryTextColor leading-20'>دليل الأعمال السعـودي الرائد</span>
                        </h1>
                        <p className='text-center text-4xl pt-3'>اكتشف الشركات الموثوقة، اطلب الخدمات، ووسع شبكة علاقاتك التجارية</p>
                    </div>

                    {/* inputs */}
                    <div className="grid grid-cols-2 md:grid-cols-4 max-w-3xl gap-4 w-fit bg-white rounded-lg p-4">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="campany" className='text-2xl font-medium text-textColor'>اسم الشركة</label>
                            <input
                                type="text"
                                name='campany'
                                placeholder='ابحث عن ...'
                                className="w-full border-b border-gray-400 px-2 py-1 cursor-pointer focus:outline-none placeholder:text-lg"
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <label htmlFor="area" className='text-2xl font-medium text-textColor'>المنطقة</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name='area'
                                    placeholder='أين'
                                    className="w-full border-b border-gray-400 px-2 py-1 cursor-pointer focus:outline-none placeholder:text-lg"
                                />
                                <span className={`absolute end-1 top-1/2 -translate-y-1/2 -rotate-180 ltr:rotate-180 transition-all ease-in-out duration-300`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m18 15-6-6-6 6" /></svg>
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <label htmlFor="sector" className='text-2xl font-medium text-textColor'>القطاع</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name='sector'
                                    placeholder='القطاع'
                                    className="w-full border-b border-gray-400 px-2 py-1 cursor-pointer focus:outline-none placeholder:text-lg"
                                />
                                <span className="absolute end-1 top-1/2 -translate-y-1/2 -rotate-180 ltr:rotate-180 transition-all ease-in-out duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-gray-300"><path d="m18 15-6-6-6 6" /></svg>
                                </span>
                            </div>
                        </div>

                        <div className="content-end px-4">
                            <button className='bg-mainColor text-white rounded-lg px-4 py-2 h-11 w-full flex flex-row gap-2 items-center justify-center cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m21 21-4.34-4.34" /><circle cx={11} cy={11} r={8} /></svg>
                                <span className='text-lg'>بحث</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* second section */}
            <section className='flex flex-col justify-center px-4 md:px-8 lg:px-16'>
                <header className='text-center'>
                    <h1 className='text-textColor font-bold text-3xl'>الفئات المميزة</h1>
                    <p className='text-paragraphTextColor text-xl leading-16'>استكشف مختلف القطاعات والصناعات في المملكة العربية السعودية</p>
                </header>

                <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 w-full">
                        <div className="group">
                            <div className="border border-mainColor rounded-lg py-4 group-hover:bg-mainColor transition-colors ease-in-out duration-500">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="rounded-full w-20 h-20 bg-mainColor group-hover:bg-white flex items-center justify-center transition-colors ease-in-out duration-500">
                                        {/* <img src="/home-icons/Buildings.svg" alt="" className='text-white group-hover:text-mainColor transition-colors duration-500' /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-mainColor transition-colors ease-in-out duration-500"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" /><circle cx={17} cy={18} r={2} /><circle cx={7} cy={18} r={2} /></svg>
                                    </div>

                                    <div className="flex flex-col items-center justify-center gap-1 text-textColor group-hover:text-white transition-colors ease-in-out duration-500">
                                        <span className=' text-xl font-bold'>الخدمات اللوجستية</span>
                                        <span className='font-medium'>شركة + 650</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="border border-mainColor rounded-lg py-4 group-hover:bg-mainColor transition-colors ease-in-out duration-500">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="rounded-full w-20 h-20 bg-mainColor group-hover:bg-white flex items-center justify-center transition-colors ease-in-out duration-500">
                                        <img src="/home-icons/Buildings.svg" alt="" className='text-white group-hover:text-mainColor transition-colors duration-500' />
                                    </div>

                                    <div className="flex flex-col items-center justify-center gap-1 text-textColor group-hover:text-white transition-colors ease-in-out duration-500">
                                        <span className=' text-xl font-bold'>العقارات</span>
                                        <span className='font-medium'>شركة + 650</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="border border-mainColor rounded-lg py-4 group-hover:bg-mainColor transition-colors ease-in-out duration-500">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="rounded-full w-20 h-20 bg-mainColor group-hover:bg-white flex items-center justify-center transition-colors ease-in-out duration-500">
                                        {/* <img src="/home-icons/Buildings.svg" alt="" className='text-white group-hover:text-mainColor transition-colors duration-500' /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-mainColor transition-colors ease-in-out duration-500"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg>
                                    </div>

                                    <div className="flex flex-col items-center justify-center gap-1 text-textColor group-hover:text-white transition-colors ease-in-out duration-500">
                                        <span className=' text-xl font-bold'>الأغذية والمشروبات</span>
                                        <span className='font-medium'>شركة + 650</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="border border-mainColor rounded-lg py-4 group-hover:bg-mainColor transition-colors ease-in-out duration-500">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="rounded-full w-20 h-20 bg-mainColor group-hover:bg-white flex items-center justify-center transition-colors ease-in-out duration-500">
                                        <img src="/home-icons/Buildings.svg" alt="" className='text-white group-hover:text-mainColor transition-colors duration-500' />
                                    </div>

                                    <div className="flex flex-col items-center justify-center gap-1 text-textColor group-hover:text-white transition-colors ease-in-out duration-500">
                                        <span className=' text-xl font-bold'>البناء والتشييد</span>
                                        <span className='font-medium'>شركة + 650</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="border border-mainColor rounded-lg py-4 group-hover:bg-mainColor transition-colors ease-in-out duration-500">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="rounded-full w-20 h-20 bg-mainColor group-hover:bg-white flex items-center justify-center transition-colors ease-in-out duration-500">
                                        {/* <img src="/home-icons/Buildings.svg" alt="" className='text-white group-hover:text-mainColor transition-colors duration-500' /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-mainColor transition-colors ease-in-out duration-500"><path d="m17 2-5 5-5-5" /><rect width={20} height={15} x={2} y={7} rx={2} /></svg>
                                    </div>

                                    <div className="flex flex-col items-center justify-center gap-1 text-textColor group-hover:text-white transition-colors ease-in-out duration-500">
                                        <span className=' text-xl font-bold'>الإعلام</span>
                                        <span className='font-medium'>شركة + 650</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="border border-mainColor rounded-lg py-4 group-hover:bg-mainColor transition-colors ease-in-out duration-500">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="rounded-full w-20 h-20 bg-mainColor group-hover:bg-white flex items-center justify-center transition-colors ease-in-out duration-500">
                                        {/* <img src="/home-icons/Buildings.svg" alt="" className='text-white group-hover:text-mainColor transition-colors duration-500' /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-mainColor transition-colors ease-in-out duration-500"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
                                    </div>

                                    <div className="flex flex-col items-center justify-center gap-1 text-textColor group-hover:text-white transition-colors ease-in-out duration-500">
                                        <span className=' text-xl font-bold'>الرعاية الصحية</span>
                                        <span className='font-medium'>شركة + 650</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="border border-mainColor rounded-lg py-4 group-hover:bg-mainColor transition-colors ease-in-out duration-500">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="rounded-full w-20 h-20 bg-mainColor group-hover:bg-white flex items-center justify-center transition-colors ease-in-out duration-500">
                                        {/* <img src="/home-icons/Buildings.svg" alt="" className='text-white group-hover:text-mainColor transition-colors duration-500' /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-mainColor transition-colors ease-in-out duration-500"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
                                    </div>

                                    <div className="flex flex-col items-center justify-center gap-1 text-textColor group-hover:text-white transition-colors ease-in-out duration-500">
                                        <span className=' text-xl font-bold'>التعليم</span>
                                        <span className='font-medium'>شركة + 650</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="border border-mainColor rounded-lg py-4 group-hover:bg-mainColor transition-colors ease-in-out duration-500">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="rounded-full w-20 h-20 bg-mainColor group-hover:bg-white flex items-center justify-center transition-colors ease-in-out duration-500">
                                        {/* <img src="/home-icons/Buildings.svg" alt="" className='text-white group-hover:text-mainColor transition-colors duration-500' /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-mainColor transition-colors ease-in-out duration-500"><rect width={20} height={14} x={2} y={3} rx={2} /><line x1={8} x2={16} y1={21} y2={21} /><line x1={12} x2={12} y1={17} y2={21} /></svg>
                                    </div>

                                    <div className="flex flex-col items-center justify-center gap-1 text-textColor group-hover:text-white transition-colors ease-in-out duration-500">
                                        <span className=' text-xl font-bold'>التكنولوجيا</span>
                                        <span className='font-medium'>شركة + 650</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group">
                        <button className='border border-mainColor rounded-lg px-10 py-1 w-fit bg-white group-hover:bg-mainColor transition-colors ease-in-out duration-500'>
                            <span className='text-mainColor text-lg font-medium group-hover:text-white transition-colors ease-in-out duration-500'>عرض جميع الفئات</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* third section */}
            <section className='flex flex-col items-center justify-center gap-5 px-4 md:px-8 lg:px-16'>
                <header className='text-center'>
                    <h1 className='text-textColor font-bold text-3xl'>الشركات المميزة</h1>
                    <p className='text-paragraphTextColor text-xl leading-16'>اكتشف أفضل الشركات الموثقة والمعتمدة في المملكة العربية السعودية</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                    <div className="flex flex-col gap-4 border border-mainColor rounded-2xl p-4">
                        <header className="flex flex-row gap-2 items-center">
                            {/* img */}
                            <div className="w-40 h-40">
                                <img src="/campany-img.png" alt="campany-img" className='w-full' />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className='text-xl flex flex-row items-center justify-between'>لوجيستك الخليج <img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4' /></h3>
                                <span className='bg-secondaryColor text-white rounded-2xl px-3 py-2'>الخدمات اللوجيستية</span>
                            </div>
                        </header>

                        <div className="flex flex-col gap-4">
                            <p className='text-paragraphTextColor text-lg'>خدمات شحن وتوزيع شاملة في جميع أنحاء المملكة</p>
                            <div className="flex flex-row justify-between items-center text-paragraphTextColor text-lg">
                                <span className='flex flex-row items-center justify-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-paragraphTextColor"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx={12} cy={10} r={3} /></svg>
                                    الخبر
                                </span>
                                <span className='flex flex-row items-center justify-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx={12} cy={12} r={3} /></svg>
                                    9.7k
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

                            <div className="group">
                                <button className='border border-mainColor rounded-lg py-2 w-full group-hover:bg-mainColor transition-colors ease-in-out duration-500 cursor-pointer'>
                                    <Link to="/companyDetails" className='text-xl group-hover:text-white transition-colors ease-in-out duration-500'>عرض الشركة</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 border border-mainColor rounded-2xl p-4">
                        <header className="flex flex-row gap-2 items-center">
                            {/* img */}
                            <div className="w-40 h-40">
                                <img src="/campany-img.png" alt="campany-img" className='w-full' />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className='text-xl flex flex-row items-center justify-between'>لوجيستك الخليج <img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4' /></h3>
                                <span className='bg-secondaryColor text-white rounded-2xl px-3 py-2'>الخدمات اللوجيستية</span>
                            </div>
                        </header>

                        <div className="flex flex-col gap-4">
                            <p className='text-paragraphTextColor text-lg'>خدمات شحن وتوزيع شاملة في جميع أنحاء المملكة</p>
                            <div className="flex flex-row justify-between items-center text-paragraphTextColor text-lg">
                                <span className='flex flex-row items-center justify-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-paragraphTextColor"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx={12} cy={10} r={3} /></svg>
                                    الخبر
                                </span>
                                <span className='flex flex-row items-center justify-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx={12} cy={12} r={3} /></svg>
                                    9.7k
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

                            <div className="group">
                                <button className='border border-mainColor rounded-lg py-2 w-full group-hover:bg-mainColor transition-colors ease-in-out duration-500 cursor-pointer'>
                                    <Link to="/companyDetails" className='text-xl group-hover:text-white transition-colors ease-in-out duration-500'>عرض الشركة</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 border border-mainColor rounded-2xl p-4">
                        <header className="flex flex-row gap-2 items-center">
                            {/* img */}
                            <div className="w-40 h-40">
                                <img src="/campany-img.png" alt="campany-img" className='w-full' />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className='text-xl flex flex-row items-center justify-between'>لوجيستك الخليج <img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4' /></h3>
                                <span className='bg-secondaryColor text-white rounded-2xl px-3 py-2'>الخدمات اللوجيستية</span>
                            </div>
                        </header>

                        <div className="flex flex-col gap-4">
                            <p className='text-paragraphTextColor text-lg'>خدمات شحن وتوزيع شاملة في جميع أنحاء المملكة</p>
                            <div className="flex flex-row justify-between items-center text-paragraphTextColor text-lg">
                                <span className='flex flex-row items-center justify-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-paragraphTextColor"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx={12} cy={10} r={3} /></svg>
                                    الخبر
                                </span>
                                <span className='flex flex-row items-center justify-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx={12} cy={12} r={3} /></svg>
                                    9.7k
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

                            <div className="group">
                                <button className='border border-mainColor rounded-lg py-2 w-full group-hover:bg-mainColor transition-colors ease-in-out duration-500 cursor-pointer'>
                                    <Link to="/companyDetails" className='text-xl group-hover:text-white transition-colors ease-in-out duration-500'>عرض الشركة</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group">
                    <button className='border border-mainColor rounded-lg px-10 py-1 w-fit bg-white group-hover:bg-mainColor cursor-pointer transition-colors ease-in-out duration-500'>
                        <span className='text-mainColor text-lg font-medium group-hover:text-white transition-colors ease-in-out duration-500'>عرض جميع الشركات</span>
                    </button>
                </div>
            </section>

            {/* four section */}
            <section className='bg-gray-100 px-4 md:px-8 lg:px-16 py-14'>
                <header className='text-center'>
                    <h1 className='text-textColor font-bold text-3xl'>كيف يعمل الموقع؟</h1>
                    <p className='text-paragraphTextColor text-xl leading-16'>ثلاث خطوات بسيطة للعثور على الشركة المناسبة وطلب الخدمة</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10">

                    {/* 1 */}
                    <div className="flex flex-col items-center justify-center gap-5">
                        <div className="bg-mainColor w-10 h-10 text-white text-2xl font-medium rounded-full text-center content-center">1</div>
                        <div className="group w-full">
                            <div className="flex flex-col border border-mainColor rounded-lg py-5 px-4 group-hover:bg-mainColor transition-colors ease-in-out duration-500">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="rounded-full w-20 h-20 bg-mainColor group-hover:bg-white flex items-center justify-center transition-colors ease-in-out duration-500">
                                        {/* <img src="/home-icons/Buildings.svg" alt="" className='text-white group-hover:text-mainColor transition-colors duration-500' /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-mainColor transition-colors ease-in-out duration-500"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /></svg>
                                    </div>

                                    <div className="flex flex-col items-center justify-center gap-1 text-textColor group-hover:text-white transition-colors ease-in-out duration-500">
                                        <span className=' text-xl font-bold'>اطلب الخدمة</span>
                                        <span className='font-medium max-w-2xs text-center'>تواصل مع الشركة مباشرة واطلب الخدمة التي
                                            تحتاجها بسهولة وأمان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="flex flex-col items-center justify-center gap-5">
                        <div className="bg-mainColor w-10 h-10 text-white text-2xl font-medium rounded-full text-center content-center">2</div>
                        <div className="group w-full">
                            <div className="border border-mainColor rounded-lg  pt-5 px-4 group-hover:bg-mainColor transition-colors ease-in-out duration-500">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="rounded-full w-20 h-20 bg-mainColor group-hover:bg-white flex items-center justify-center transition-colors ease-in-out duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-mainColor transition-colors ease-in-out duration-500"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx={12} cy={12} r={3} /></svg>
                                    </div>

                                    <div className="flex flex-col items-center justify-center gap-1 text-textColor group-hover:text-white transition-colors ease-in-out duration-500">
                                        <span className=' text-xl font-bold'>زر الملف التجاري</span>
                                        <span className='font-medium max-w-2xs text-center'>اطلع على تفاصيل الشركة، الخدمات المقدمة، التقييمات، ومعرض الأعمال السابقة</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="flex flex-col items-center justify-center gap-5">
                        <div className="bg-mainColor w-10 h-10 text-white text-2xl font-medium rounded-full text-center content-center">3</div>
                        <div className="group w-full">
                            <div className="border border-mainColor rounded-lg pt-5 px-4 group-hover:bg-mainColor transition-colors ease-in-out duration-500">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="rounded-full w-20 h-20 bg-mainColor group-hover:bg-white flex items-center justify-center transition-colors ease-in-out duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-mainColor transition-colors ease-in-out duration-500"><path d="m21 21-4.34-4.34" /><circle cx={11} cy={11} r={8} /></svg>
                                    </div>

                                    <div className="flex flex-col items-center justify-center gap-1 text-textColor group-hover:text-white transition-colors ease-in-out duration-500">
                                        <span className='text-xl font-bold'>تصفح الشركات</span>
                                        <span className='font-medium max-w-2xs text-center'>ابحث عن الشركات المناسبة لاحتياجاتك من خلال الفئات المختلفة أو استخدم خاصية البحث المتقدم</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* five section */}
            <section>
                {/* green div */}
                <div className="bg-mainColor relative z-10 h-56 flex flex-row items-center justify-center overflow-hidden">
                    <div className="w-32 h-32 absolute start-0 bottom-6">
                        <img src="/min-logo.png" alt="min-logo" className="w-full object-contain" />
                    </div>
                    <div className="text-center">
                        <h1 className='text-4xl font-medium text-white'>جاهز للبدء؟</h1>
                        <button className='bg-white w-2xs py-4 mt-4 rounded-lg text-center cursor-pointer text-mainColor flex flex-row items-center justify-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-mainColor"><path d="m21 21-4.34-4.34" /><circle cx={11} cy={11} r={8} /></svg>
                            <span>ابدأ البحث الأن</span>
                        </button>
                    </div>
                    <div className="w-28 h-28 absolute end-0 top-0">
                        <img src="/min-logo-end.png" alt="min-logo-end" className="w-full object-contain" />
                    </div>
                </div>

                {/* content */}
                <div className="flex flex-col gap-5 items-center px-4 md:px-8 lg:px-16 pt-14">
                    <header className='text-center'>
                        <h1 className='text-textColor font-bold text-3xl'>أكثر المنتجات مبيعا</h1>
                        <p className='text-paragraphTextColor text-xl leading-16'>منتجات مضافة حديثا من شركات موثوقة</p>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
                        {/* 1 */}
                        <div className="">
                            <div className="group border border-mainColor rounded-lg overflow-hidden">
                                {/* img */}
                                <div className="w-full bg-gray-100 flex items-center justify-center h-64">
                                    <div className="w-52 h-52">
                                        <img src="/products/shop-categosfdry-image.png" alt="shop-categosfdry-image" className='w-full object-contain group-hover:scale-110 transition-all ease-in-out duration-500' />
                                    </div>
                                </div>

                                {/* information */}
                                <div className="flex flex-col gap-4 px-4 py-2 h-1/2">
                                    <header className=''>
                                        <h1 className='text-textColor font-bold text-xl'>زيت الطبخ الطبيعي</h1>
                                        <p className='text-paragraphTextColor text-xl'>زيت طبخ طبيعي عالي الجودة من أفضل المصادر</p>
                                    </header>

                                    <div className="bg-mainColor/25 flex items-center justify-center gap-1 w-fit rounded-2xl px-2 py-1">
                                        <img src="/products/Buildings.png" alt="Buildings" className='text-white' />
                                        <span className='text-mainColor'>شركة مصنع الغذاء الطبيعي</span>
                                    </div>

                                    <div className="flex flex-col text-paragraphTextColor">
                                        <div className="flex flex-row justify-between">
                                            <span>الغذاء والمشروبات</span>
                                            <span className='flex flex-row items-center justify-center gap-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-paragraphTextColor"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx={12} cy={10} r={3} /></svg>
                                                الخبر
                                            </span>
                                        </div>

                                        <span className='text-xl font-bold text-mainColor'>25.99 ر.س</span>
                                    </div>

                                    <div className="flex flex-row justify-between gap-5 w-full">
                                        <Link to="/productDetails" className='bg-white w-full py-2 text-center rounded-lg border border-mainColor text-mainColor hover:bg-mainColor hover:text-white transition-colors ease-in-out duration-500 cursor-pointer'>عرض التفاصيل</Link>
                                        <Link to="/chart" className='bg-mainColor w-full flex items-center justify-center gap-1 py-2 rounded-lg border border-mainColor text-mainColor cursor-pointer'>
                                            <img src="/products/ShoppingCart.png" alt="ShoppingCart" className='w-5 h-5' />
                                            <span className='text-white'>أضف إلى السلة</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="">
                            <div className="group border border-mainColor rounded-lg overflow-hidden">
                                {/* img */}
                                <div className="w-full bg-gray-100 flex items-center justify-center h-64">
                                    <div className="w-40 h-40">
                                        <img src="/products/madicen.png" alt="madicen" className='w-full object-contain group-hover:scale-110 transition-all ease-in-out duration-500' />
                                    </div>
                                </div>

                                {/* information */}
                                <div className="flex flex-col gap-4 px-4 py-2 h-1/2">
                                    <header className=''>
                                        <h1 className='text-textColor font-bold text-xl'>زيت الطبخ الطبيعي</h1>
                                        <p className='text-paragraphTextColor text-xl'>زيت طبخ طبيعي عالي الجودة من أفضل المصادر</p>
                                    </header>

                                    <div className="bg-mainColor/25 flex items-center justify-center gap-1 w-fit rounded-2xl px-2 py-1">
                                        <img src="/products/Buildings.png" alt="Buildings" className='text-white' />
                                        <span className='text-mainColor'>شركة مصنع الغذاء الطبيعي</span>
                                    </div>

                                    <div className="flex flex-col text-paragraphTextColor">
                                        <div className="flex flex-row justify-between">
                                            <span>الغذاء والمشروبات</span>
                                            <span className='flex flex-row items-center justify-center gap-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-paragraphTextColor"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx={12} cy={10} r={3} /></svg>
                                                الخبر
                                            </span>
                                        </div>

                                        <span className='text-xl font-bold text-mainColor'>25.99 ر.س</span>
                                    </div>

                                    <div className="flex flex-row justify-between gap-5 w-full">
                                        <Link to="/productDetails" className='bg-white w-full py-2 text-center rounded-lg border border-mainColor text-mainColor hover:bg-mainColor hover:text-white transition-colors ease-in-out duration-500 cursor-pointer'>عرض التفاصيل</Link>
                                        <Link to="/chart" className='bg-mainColor w-full flex items-center justify-center gap-1 py-2 rounded-lg border border-mainColor text-mainColor cursor-pointer'>
                                            <img src="/products/ShoppingCart.png" alt="ShoppingCart" className='w-5 h-5' />
                                            <span className='text-white'>أضف إلى السلة</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="">
                            <div className="group border border-mainColor rounded-lg overflow-hidden">
                                {/* img */}
                                <div className="w-full bg-gray-100 flex items-center justify-center h-64">
                                    <div className="w-52 h-52">
                                        <img src="/products/apple-phone.png" alt="apple-phone" className='w-full object-cover group-hover:scale-110 transition-all ease-in-out duration-500' />
                                    </div>
                                </div>

                                {/* information */}
                                <div className="flex flex-col gap-4 px-4 py-2 h-1/2">
                                    <header className=''>
                                        <h1 className='text-textColor font-bold text-xl'>زيت الطبخ الطبيعي</h1>
                                        <p className='text-paragraphTextColor text-xl'>زيت طبخ طبيعي عالي الجودة من أفضل المصادر</p>
                                    </header>

                                    <div className="bg-mainColor/25 flex items-center justify-center gap-1 w-fit rounded-2xl px-2 py-1">
                                        <img src="/products/Buildings.png" alt="Buildings" className='text-white' />
                                        <span className='text-mainColor'>شركة مصنع الغذاء الطبيعي</span>
                                    </div>

                                    <div className="flex flex-col text-paragraphTextColor">
                                        <div className="flex flex-row justify-between">
                                            <span>الغذاء والمشروبات</span>
                                            <span className='flex flex-row items-center justify-center gap-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-paragraphTextColor"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx={12} cy={10} r={3} /></svg>
                                                الخبر
                                            </span>
                                        </div>

                                        <span className='text-xl font-bold text-mainColor'>25.99 ر.س</span>
                                    </div>

                                    <div className="flex flex-row justify-between gap-5 w-full">
                                        <Link to="/productDetails" className='bg-white w-full py-2 text-center rounded-lg border border-mainColor text-mainColor hover:bg-mainColor hover:text-white transition-colors ease-in-out duration-500 cursor-pointer'>عرض التفاصيل</Link>
                                        <Link to="/chart" className='bg-mainColor w-full flex items-center justify-center gap-1 py-2 rounded-lg border border-mainColor text-mainColor cursor-pointer'>
                                            <img src="/products/ShoppingCart.png" alt="ShoppingCart" className='w-5 h-5' />
                                            <span className='text-white'>أضف إلى السلة</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="">
                            <div className="group border border-mainColor rounded-lg overflow-hidden">
                                {/* img */}
                                <div className="w-full bg-gray-100 flex items-center justify-center h-64">
                                    <div className="w-56 h-56">
                                        <img src="/products/couch.png" alt="couch" className='w-full object-center group-hover:scale-110 transition-all ease-in-out duration-500' />
                                    </div>
                                </div>

                                {/* information */}
                                <div className="flex flex-col gap-4 px-4 py-2 h-1/2">
                                    <header className=''>
                                        <h1 className='text-textColor font-bold text-xl'>زيت الطبخ الطبيعي</h1>
                                        <p className='text-paragraphTextColor text-xl'>زيت طبخ طبيعي عالي الجودة من أفضل المصادر</p>
                                    </header>

                                    <div className="bg-mainColor/25 flex items-center justify-center gap-1 w-fit rounded-2xl px-2 py-1">
                                        <img src="/products/Buildings.png" alt="Buildings" className='text-white' />
                                        <span className='text-mainColor'>شركة مصنع الغذاء الطبيعي</span>
                                    </div>

                                    <div className="flex flex-col text-paragraphTextColor">
                                        <div className="flex flex-row justify-between">
                                            <span>الغذاء والمشروبات</span>
                                            <span className='flex flex-row items-center justify-center gap-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-paragraphTextColor"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx={12} cy={10} r={3} /></svg>
                                                الخبر
                                            </span>
                                        </div>

                                        <span className='text-xl font-bold text-mainColor'>25.99 ر.س</span>
                                    </div>

                                    <div className="flex flex-row justify-between gap-5 w-full">
                                        <Link to="/productDetails" className='bg-white w-full py-2 text-center rounded-lg border border-mainColor text-mainColor hover:bg-mainColor hover:text-white transition-colors ease-in-out duration-500 cursor-pointer'>عرض التفاصيل</Link>
                                        <Link to="/chart" className='bg-mainColor w-full flex items-center justify-center gap-1 py-2 rounded-lg border border-mainColor text-mainColor cursor-pointer'>
                                            <img src="/products/ShoppingCart.png" alt="ShoppingCart" className='w-5 h-5' />
                                            <span className='text-white'>أضف إلى السلة</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="">
                            <div className="group border border-mainColor rounded-lg overflow-hidden">
                                {/* img */}
                                <div className="w-full bg-gray-100 flex items-center justify-center h-64">
                                    <div className="w-52 h-52">
                                        <img src="/products/electronic.png" alt="electronic" className='w-full object-contain group-hover:scale-110 transition-all ease-in-out duration-500' />
                                    </div>
                                </div>

                                {/* information */}
                                <div className="flex flex-col gap-4 px-4 py-2 h-1/2">
                                    <header className=''>
                                        <h1 className='text-textColor font-bold text-xl'>زيت الطبخ الطبيعي</h1>
                                        <p className='text-paragraphTextColor text-xl'>زيت طبخ طبيعي عالي الجودة من أفضل المصادر</p>
                                    </header>

                                    <div className="bg-mainColor/25 flex items-center justify-center gap-1 w-fit rounded-2xl px-2 py-1">
                                        <img src="/products/Buildings.png" alt="Buildings" className='text-white' />
                                        <span className='text-mainColor'>شركة مصنع الغذاء الطبيعي</span>
                                    </div>

                                    <div className="flex flex-col text-paragraphTextColor">
                                        <div className="flex flex-row justify-between">
                                            <span>الغذاء والمشروبات</span>
                                            <span className='flex flex-row items-center justify-center gap-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-paragraphTextColor"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx={12} cy={10} r={3} /></svg>
                                                الخبر
                                            </span>
                                        </div>

                                        <span className='text-xl font-bold text-mainColor'>25.99 ر.س</span>
                                    </div>

                                    <div className="flex flex-row justify-between gap-5 w-full">
                                        <Link to="/productDetails" className='bg-white w-full py-2 text-center rounded-lg border border-mainColor text-mainColor hover:bg-mainColor hover:text-white transition-colors ease-in-out duration-500 cursor-pointer'>عرض التفاصيل</Link>
                                        <Link to="/chart" className='bg-mainColor w-full flex items-center justify-center gap-1 py-2 rounded-lg border border-mainColor text-mainColor cursor-pointer'>
                                            <img src="/products/ShoppingCart.png" alt="ShoppingCart" className='w-5 h-5' />
                                            <span className='text-white'>أضف إلى السلة</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 6 */}
                        <div className="">
                            <div className="group border border-mainColor rounded-lg overflow-hidden">
                                {/* img */}
                                <div className="w-full bg-gray-100 flex items-center justify-center h-64">
                                    <div className="w-52 h-52">
                                        <img src="/products/books.png" alt="books" className='w-full object-contain group-hover:scale-110 transition-all ease-in-out duration-500' />
                                    </div>
                                </div>

                                {/* information */}
                                <div className="flex flex-col gap-4 px-4 py-2 h-1/2">
                                    <header className=''>
                                        <h1 className='text-textColor font-bold text-xl'>زيت الطبخ الطبيعي</h1>
                                        <p className='text-paragraphTextColor text-xl'>زيت طبخ طبيعي عالي الجودة من أفضل المصادر</p>
                                    </header>

                                    <div className="bg-mainColor/25 flex items-center justify-center gap-1 w-fit rounded-2xl px-2 py-1">
                                        <img src="/products/Buildings.png" alt="Buildings" className='text-white' />
                                        <span className='text-mainColor'>شركة مصنع الغذاء الطبيعي</span>
                                    </div>

                                    <div className="flex flex-col text-paragraphTextColor">
                                        <div className="flex flex-row justify-between">
                                            <span>الغذاء والمشروبات</span>
                                            <span className='flex flex-row items-center justify-center gap-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-paragraphTextColor"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx={12} cy={10} r={3} /></svg>
                                                الخبر
                                            </span>
                                        </div>

                                        <span className='text-xl font-bold text-mainColor'>25.99 ر.س</span>
                                    </div>

                                    <div className="flex flex-row justify-between gap-5 w-full">
                                        <Link to="/productDetails" className='bg-white w-full py-2 text-center rounded-lg border border-mainColor text-mainColor hover:bg-mainColor hover:text-white transition-colors ease-in-out duration-500 cursor-pointer'>عرض التفاصيل</Link>
                                        <Link to="/chart" className='bg-mainColor w-full flex items-center justify-center gap-1 py-2 rounded-lg border border-mainColor text-mainColor cursor-pointer'>
                                            <img src="/products/ShoppingCart.png" alt="ShoppingCart" className='w-5 h-5' />
                                            <span className='text-white'>أضف إلى السلة</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group">
                        <button className='border border-mainColor rounded-lg px-10 py-1 w-fit bg-white group-hover:bg-mainColor cursor-pointer transition-colors ease-in-out duration-500'>
                            <span className='text-mainColor text-lg font-medium group-hover:text-white transition-colors ease-in-out duration-500'>عرض جميع المنتجات</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* sex section */}
            <section>
                {/* green div */}
                <div className="bg-mainColor relative z-10 py-16 px-4 md:px-8 lg:px-16 flex flex-row items-center justify-center overflow-hidden">
                    <div className="w-32 h-32 absolute start-0 bottom-6">
                        <img src="/min-logo.png" alt="min-logo" className="w-full object-contain" />
                    </div>
                    <div className="text-center flex flex-col gap-5">
                        <header className='text-center'>
                            <h1 className='text-white font-bold text-4xl'>أضف شركتك إلى <span className='text-secondaryTextColor'>صناعة سعودية اليوم!</span></h1>
                            <p className='text-white text-xl leading-16'>انضم إلى آلاف الشركات الموثقة واحصل على عملاء جدد
                                من جميع أنحاء المملكة</p>
                        </header>

                        {/* buttons */}
                        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 justify-center gap-5">
                            <button className='bg-white/30 text-white md:w-60 lg:w-2xs py-4 rounded-lg text-center cursor-pointer flex flex-row items-center justify-center gap-2'>
                                <img src="/products/Users.png" alt="Users" className='w-4 h-4' />
                                <span className='text-lg'>عملاء جدد يومياً</span>
                            </button>
                            <button className='bg-white/30 text-white md:w-60 lg:w-2xs py-4 rounded-lg text-center cursor-pointer flex flex-row items-center justify-center gap-2'>
                                <img src="/products/star.png" alt="star" className='w-4 h-4' />
                                <span className='text-lg'>تقييمات العملاء</span>
                            </button>
                            <button className='bg-white/30 text-white md:w-60 lg:w-2xs py-4 rounded-lg text-center cursor-pointer flex flex-row items-center justify-center gap-2'>
                                <img src="/products/CheckCircle.png" alt="CheckCircle" className='w-4 h-4' />
                                <span className='text-lg'>ملف تجاري شامل</span>
                            </button>
                            <button className='bg-white text-mainColor md:w-60 lg:w-2xs py-4 flex flex-row gap-2 items-center justify-center rounded-lg text-center cursor-pointer md:col-span-3 md:mx-auto'>
                                <img src="/products/Plus.png" alt="Plus" className='w-5 h-5' />
                                <span className='text-lg'>سجل شركتك مجانا</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center text-white">
                            <div className="flex flex-col items-center justify-center gap-2">
                                <span className='text-4xl font-bold text-secondaryTextColor'>13</span>
                                <span className='text-lg'>منطقة في المملكة</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <span className='text-4xl font-bold text-secondaryTextColor'>+50,000</span>
                                <span className='text-lg'>طلب خدمة شهرياً</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <span className='text-4xl font-bold text-secondaryTextColor'>4.9</span>
                                <span className='text-lg'>تقييم العملاء</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <span className='text-4xl font-bold text-secondaryTextColor'>+5,000</span>
                                <span className='text-lg'>شركة مسجلة</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-32 w-full bg-secondaryColor"></div>
            </section>
        </main>
    )
}
