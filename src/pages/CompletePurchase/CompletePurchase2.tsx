import React from 'react'
import { Link } from 'react-router-dom'

export default function CompletePurchase2() {
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
                    <span className='h-0.5 bg-mainColor absolute start-20 end-14 top-5' />
                    <div className="flex flex-col items-center justify-center gap-2 ">
                        <span className='rounded-full bg-[#D9D9D9] w-10 h-10 text-textColor flex items-center justify-center relative z-10'>2</span>
                        <span className=''>مراجعة والدفع</span>
                    </div>
                </div>
            </header>

            <div className="bg-white rounded-2xl border border-borderColor flex flex-col justify-between gap-5 p-4 md:p-6 shadow">
                <h1 className='text-2xl text-textColor font-bold border-b border-borderColor pb-2'>مراجعة والدفع</h1>

                <ul className='flex flex-col gap-2'>
                    <li className='flex flex-row gap-1'><span className='text-textColor font-medium'>الاسم الكامل: </span><span className='text-paragraphTextColor'>احمد عمر ماهر </span></li>
                    <li className='flex flex-row gap-1'><span className='text-textColor font-medium'> رقم الجوال: </span><span className='text-paragraphTextColor'> 966 5444 2874 213+</span></li>
                    <li className='flex flex-row gap-1'><span className='text-textColor font-medium'>البريد الإلكتروني: </span><span className='text-paragraphTextColor'>ahmed@gmail.com</span></li>
                    <li className='flex flex-row gap-1'><span className='text-textColor font-medium'>الإستلام من: </span><span className='text-paragraphTextColor'>الاستلام من الشركة</span></li>
                </ul>

                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pb-4">
                            {/* img */}
                            <div className="rounded-t-2xl overflow-hidden">
                                <img src="/campany-img.png" alt="campany-img" className='w-full h-full object-cover' />
                            </div>

                            {/* informaiton */}
                            <div className="flex flex-col md:flex-row gap-2 items-center justify-between w-full pb-3 pe-2">
                                {/* text */}
                                <div className="flex flex-col gap-2 sm:gap-4 w-fit">
                                    <h3 className='flex flex-row items-center gap-2 text-textColor text-2xl'>شركة مصنع الغذاء الطبيعي<img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4 mt-1' /></h3>

                                    <div className="flex flex-row flex-wrap justify-between items-center gap-2 md:gap-4 text-paragraphTextColor text-lg">
                                        <span className='flex flex-row items-center justify-center gap-1'>
                                            <img src="/company-details/MapPin.svg" alt="company-details-MapPin" className='w-4 h-4' />
                                            سعودية • الرياض
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className='text-2xl text-textColor font-bold flex flex-row justify-between border-t border-borderColor pt-2'><span>الإجمالي الفرعي (شركة مصنع الغائ الطبيعي):</span> <span className='text-mainColor'>150 ر.س</span></h1>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pb-4">
                            {/* img */}
                            <div className="rounded-t-2xl overflow-hidden">
                                <img src="/campany-img.png" alt="campany-img" className='w-full h-full object-cover' />
                            </div>

                            {/* informaiton */}
                            <div className="flex flex-col md:flex-row gap-2 items-center justify-between w-full pb-3 pe-2">
                                {/* text */}
                                <div className="flex flex-col gap-2 sm:gap-4 w-fit">
                                    <h3 className='flex flex-row items-center gap-2 text-textColor text-2xl'>شركة مصنع الغذاء الطبيعي<img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4 mt-1' /></h3>

                                    <div className="flex flex-row flex-wrap justify-between items-center gap-2 md:gap-4 text-paragraphTextColor text-lg">
                                        <span className='flex flex-row items-center justify-center gap-1'>
                                            <img src="/company-details/MapPin.svg" alt="company-details-MapPin" className='w-4 h-4' />
                                            سعودية • الرياض
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className='text-2xl text-textColor font-bold flex flex-row justify-between border-t border-borderColor pt-2'><span>الإجمالي الفرعي (شركة مصنع الغائ الطبيعي):</span> <span className='text-mainColor'>150 ر.س</span></h1>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-borderColor flex flex-col justify-between gap-5 p-4 md:p-6 shadow">
                <div className="flex items-center ps-4 border border-gray-200 rounded-lg cursor-pointer">
                    <input id="bordered-checkbox-1" type="radio" name="bordered-checkbox" className="w-4 h-4 text-mainColor bg-gray-100 border-gray-300 rounded" />
                    <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-lg font-medium text-textColor cursor-pointer">الدفع عند الإستلام</label>
                </div>
                <div className="flex items-center ps-4 border border-gray-200 rounded-lg cursor-pointer">
                    <input id="bordered-checkbox-2" type="radio" name="bordered-checkbox" className="w-4 h-4 text-mainColor bg-gray-100 border-gray-300 rounded" />
                    <label htmlFor="bordered-checkbox-2" className="w-full py-4 ms-2 text-lg font-medium text-textColor cursor-pointer">تحويل بنكي</label>
                </div>
                <div className="flex items-center ps-4 border border-gray-200 rounded-lg cursor-pointer">
                    <input id="bordered-checkbox-3" type="radio" name="bordered-checkbox" className="w-4 h-4 text-mainColor bg-gray-100 border-gray-300 rounded" />
                    <label htmlFor="bordered-checkbox-3" className="w-full py-4 ms-2 text-lg font-medium text-textColor cursor-pointer">الدفع بعد تأكيد الشركة</label>
                </div>
            </div>

            <div className="bg-white flex items-center rounded-2xl border border-borderColor p-4 md:p-6 shadow">
                <input id="bordered-checkbox-1" type="checkbox" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"><a href="#"><span>أوافق على</span> <span className='text-mainColor underline'>الشروط والأحكام وسياسة الخصوصية</span></a></label>
            </div>

            <div className="flex flex-row justify-between">
                <Link to="/completePurchase" className='border border-mainColor text-mainColor rounded-lg py-2 px-4 flex flex-row items-center gap-2 cursor-pointer'>
                    <img src="/ArrowRight.svg" alt="ArrowRight" className='w-4 h-4' />
                    <span>الخطوة السابقة</span>
                </Link>
                <button className='text-white bg-mainColor rounded-lg py-2 px-4 flex flex-row items-center gap-2 cursor-pointer'>
                    <span>تأكيد الطلب</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                </button>
            </div>
        </div>
    )
}
