import React, { useState } from 'react'

type ToggleKeys = "email" | "sms" | "whatsapp";

export default function ProfileSettings() {
    const [toggles, setToggles] = useState<Record<ToggleKeys, boolean>>({
        email: false,
        sms: false,
        whatsapp: false,
    });

    const handleToggle = (key: ToggleKeys) => {
        setToggles((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };
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

            <main className='p-4 md:p-8 flex flex-col gap-4 md:gap-8'>
                <div className="bg-white border border-borderColor p-4 rounded-lg">
                    <h1 className='border-b border-borderColor pb-2 text-xl text-textColor font-bold'>معلومات الملف الشخصي</h1>
                    <ul className='flex flex-col gap-2 mt-2'>
                        <li className='text-paragraphTextColor text-lg'>
                            <span className='text-textColor font-bold'>الاسم الكامل: </span>
                            <span>احمد عمر ماهر</span>
                        </li>

                        <li className='text-paragraphTextColor text-lg'>
                            <span className='text-textColor font-bold'>رقم الجوال: </span>
                            <span>+96587413369</span>
                        </li>

                        <li className='text-paragraphTextColor text-lg'>
                            <span className='text-textColor font-bold'>بريدك الإلكتروني: </span>
                            <span>advanced-solutions.sa</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white border border-borderColor p-4 rounded-lg">
                    <h1 className='border-b border-borderColor pb-2 text-2xl text-textColor font-bold'>إعدادات الإشعارات</h1>

                    <ul className="flex flex-col gap-2">
                        {/* إشعارات البريد الإلكتروني */}
                        <li className="flex flex-row justify-between items-center py-4 border-b border-borderColor">
                            <div>
                                <h3 className="text-lg font-bold text-textColor">
                                    إشعارات البريد الإلكتروني
                                </h3>
                                <p className="text-paragraphTextColor">استقبال تحديثات الطلبات</p>
                            </div>

                            <div>
                                <label className="relative flex items-center justify-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={toggles.email}
                                        onChange={() => handleToggle("email")}
                                    />
                                    <div className="w-12 h-6 bg-gray-300 peer-checked:bg-mainColor rounded-full peer transition-colors duration-300"></div>
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
                                </label>
                            </div>
                        </li>

                        {/* إشعارات الرسائل النصية */}
                        <li className="flex flex-row justify-between items-center py-4 border-b border-borderColor">
                            <div>
                                <h3 className="text-lg font-bold text-textColor">
                                    إشعارات الرسائل النصية
                                </h3>
                                <p className="text-paragraphTextColor">استقبال تحديثات الطلبات</p>
                            </div>

                            <div>
                                <label className="relative flex items-center justify-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={toggles.sms}
                                        onChange={() => handleToggle("sms")}
                                    />
                                    <div className="w-12 h-6 bg-gray-300 peer-checked:bg-mainColor rounded-full peer transition-colors duration-300"></div>
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
                                </label>
                            </div>
                        </li>

                        {/* إشعارات واتساب */}
                        <li className="flex flex-row justify-between items-center py-4">
                            <div>
                                <h3 className="text-lg font-bold text-textColor">إشعارات واتساب</h3>
                                <p className="text-paragraphTextColor">استقبال الرسائل عبر واتساب</p>
                            </div>

                            <div>
                                <label className="relative flex items-center justify-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={toggles.whatsapp}
                                        onChange={() => handleToggle("whatsapp")}
                                    />
                                    <div className="w-12 h-6 bg-gray-300 peer-checked:bg-mainColor rounded-full peer transition-colors duration-300"></div>
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}
