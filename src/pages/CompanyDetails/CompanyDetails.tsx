import React from 'react'
import StarRating from './StarRating'
import { Link } from 'react-router-dom'
import companyDetailsImg from '../../assets/images/CompanyDetails.webp';
import applePhone from "../../assets/products/apple-phone.webp";
import books from "../../assets/products/books.webp";
import couch from "../../assets/products/couch.webp";
import electronic from "../../assets/products/electronic.webp";
import madicen from "../../assets/products/madicen.webp";
import shopCategory from "../../assets/products/shop-categosfdry-image.webp";

export default function CompanyDetails() {
  return (
    <div className='bg-backGroundColor flex flex-col gap-5 py-10 px-4 md:px-8 lg:px-16'>
      <header>
        <p className='text-paragraphTextColor flex flex-row gap-2'>
          <span>الرئيسية</span>
          <img src="/company-details/CaretLeft.svg" alt="CaretLeft" />
          <span>الشركات</span>
          <img src="/company-details/CaretLeft.svg" alt="CaretLeft" />
          <span>شركة التقنيات المتقدمة للحلول الصناعية</span>
        </p>
      </header>

      <section className='bg-white rounded-2xl border border-borderColor'>
        <div className="flex flex-col md:flex-row gap-5 p-2 md:p-4">
          {/* img */}
          <div className="w-full md:w-96 h-80 rounded-t-2xl md:rounded-e-none md:rounded-s-2xl overflow-hidden">
            <img src={companyDetailsImg} loading='lazy' alt="company-details" className='w-full h-full object-cover' />
          </div>

          {/* content */}
          <div className="flex flex-col gap-5">
            <header className='flex flex-col text-center gap-5'>
              <div className="flex flex-row gap-5">
                <h1 className='text-textColor font-bold text-2xl md:text-3xl lg:text-4xl'>شركة مصنع الغذاء الطبيعي</h1>
                <div className="bg-secondBackGroundColor rounded-4xl hidden xmd:flex flex-row gap-1 items-center justify-center h-fit px-4 py-2">
                  <img src="/company-details/Shield.svg" alt="company-details-Shield" className='w-5 h-5' />
                  <span className='text-mainColor'>شركة موثقة</span>
                </div>
              </div>

              <div className="flex flex-row items-center gap-3">
                <div className="bg-secondBackGroundColor rounded-4xl xmd:hidden flex flex-row gap-1 items-center justify-center h-fit px-4 py-2">
                  <img src="/company-details/Shield.svg" alt="company-details-Shield" className='w-5 h-5' />
                  <span className='text-mainColor'>شركة موثقة</span>
                </div>
                <span className='bg-backGroundColor rounded-3xl px-3 py-1'>التصنيع</span>
                <span className='bg-backGroundColor rounded-3xl px-3 py-1'>التقنية</span>
                <span className='bg-backGroundColor rounded-3xl px-3 py-1'>الهندسة</span>
              </div>
            </header>

            <div className="flex flex-col h-full justify-between gap-5">
              <ul className='flex flex-row flex-wrap gap-5'>
                <li className='flex flex-row gap-1 items-center justify-center text-paragraphTextColor'>
                  <img src="/gray-icons/Users.svg" alt="company-details-Users" className='w-4 h-4' />
                  <span>51-200 موظف</span>
                </li>
                <li className='flex flex-row gap-1 items-center justify-center text-paragraphTextColor'>
                  <img src="/gray-icons/CalendarBlank.svg" alt="company-details-CalendarBlank" className='w-4 h-4' />
                  <span>متوسط الرد 2 ساعة</span>
                </li>
                <li className='flex flex-row gap-1 items-center justify-center text-paragraphTextColor'>
                  <img src="/gray-icons/Timer.svg" alt="company-details-Timer" className='w-4 h-4' />
                  <span>متوسط الرد 2 ساعة</span>
                </li>
              </ul>

              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-row items-center">
                  <img src="/gold-img/Gold_Star.svg" alt="star" className='w-5 h-5' />
                  <img src="/gold-img/Gold_Star.svg" alt="star" className='w-5 h-5' />
                  <img src="/gold-img/Gold_Star.svg" alt="star" className='w-5 h-5' />
                  <img src="/gold-img/Gold_Star.svg" alt="star" className='w-5 h-5' />
                  <img src="/gray-star.png" alt="star" className='w-5 h-5' />
                </div>
                <span>4.7</span>
                <span className='text-sm text-paragraphTextColor'>(156)</span>
              </div>

              <div className="w-fit flex flex-row items-center justify-center gap-1 text-mainColor">
                <img src="/gray-icons/MapPin.svg" alt="company-details-MapPin" className='w-4 h-4' />
                <span className=''>
                  سعودية • الرياض
                </span>
              </div>

              {/* buttons */}
              <div className="flex flex-row flex-wrap justify-center gap-2">
                <button className='bg-mainColor w-28 rounded flex flex-row items-center justify-center gap-1 px-3 py-2 cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx={8} cy={21} r={1} /><circle cx={19} cy={21} r={1} /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                  <span className='text-white'>طلب خدمة</span>
                </button>
                <button className='bg-[#F1F1F1CC] w-28 border border-paragraphTextColor rounded flex flex-row items-center justify-center gap-1 px-3 py-2 cursor-pointer'>
                  <img src="/gray-icons/Phone.svg" alt="company-details-Phone" className='w-5 h-5' />
                  <span className='text-paragraphTextColor'>اتصال</span>
                </button>
                <button className='bg-[#2CC161] w-28 rounded flex flex-row items-center justify-center gap-1 px-3 py-2 cursor-pointer'>
                  <img src="/company-details/ChatCircle.svg" alt="company-details-ChatCircle" className='w-5 h-5' />
                  <span className='text-white'>واتساب</span>
                </button>
                <button className='bg-[#F1F1F1CC] w-28 border border-paragraphTextColor rounded flex flex-row items-center justify-center gap-1 px-3 py-2 cursor-pointer'>
                  <img src="/gray-icons/Envelope.svg" alt="company-details-Envelope" className='w-5 h-5' />
                  <span className='text-paragraphTextColor'>إرسال بريد</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className="col-span-4 md:col-span-3">
          {/* information */}
          <div className="bg-white border border-borderColor rounded-2xl p-4">
            <h1 className='text-textColor text-2xl'>عن الشركة:</h1>
            <p className='text-paragraphTextColor'>شركة رائدة في مجال الحلول الصناعية والتقنية، نقدم خدمات متكاملة في التصنيع والهندسة والصيانة. نعمل مع أحدث التقنيات لتقديم حلول مبتكرة تلبي احتياجات عملائنا في مختلف القطاعات الصناعية.</p>

            <div className="mt-5">
              <ul className='grid grid-cols-2 grid-rows-2 gap-4'>
                <li>
                  <h1 className='flex flex-row items-center gap-1'>
                    <img src="/company-details/green-icons/MapPin.svg" alt="company-details-MapPin" className='w-4 h-4' />
                    <span className='text-mainColor'>المقر الرئيسي</span>
                  </h1>
                  <p className='text-paragraphTextColor ps-5'>شارع الملك فهد، حي العليا، الرياض 12211الرياض، المملكة العربية السعودية</p>
                </li>
                <li>
                  <h1 className='flex flex-row items-center gap-1'>
                    <img src="/company-details/green-icons/Users.svg" alt="company-details-Users" className='w-4 h-4' />
                    <span className='text-mainColor'>عدد الموظفين</span>
                  </h1>
                  <p className='text-paragraphTextColor ps-5'>51-200 موظف</p>
                </li>
                <li>
                  <h1 className='flex flex-row items-center gap-1'>
                    <img src="/company-details/green-icons/Timer.svg" alt="company-details-Timer" className='w-4 h-4' />
                    <span className='text-mainColor'>ساعات العمل</span>
                  </h1>
                  <p className='text-paragraphTextColor ps-5'>الأحد - الخميس: 8:00 ص - 5:00 م</p>
                </li>
                <li>
                  <h1 className='flex flex-row items-center gap-1'>
                    <img src="/company-details/green-icons/CalendarBlank.svg" alt="company-details-CalendarBlank" className='w-4 h-4' />
                    <span className='text-mainColor'>تاريخ التأسيس</span>
                  </h1>
                  <p className='text-paragraphTextColor ps-5'>2015</p>
                </li>
              </ul>
            </div>
          </div>

          {/* products */}
          <div className="bg-white border border-borderColor rounded-2xl p-4 mt-4">
            <h1 className='text-textColor font-bold text-2xl'>المنتجات:</h1>
            <div className="flex flex-row flex-wrap justify-center sm:justify-between items-center gap-5 mt-5">
              <ul className='flex flex-row flex-wrap gap-2'>
                <li className='bg-mainColor rounded-xl px-2 md:px-4 py-2 cursor-pointer'><span className='text-white'>الكل</span></li>
                <li className='bg-[#F1F1F1CC] border border-borderColor rounded-xl px-2 md:px-4 py-2 cursor-pointer'><span className='text-paragraphTextColor'>البناء والتشييد</span></li>
                <li className='bg-[#F1F1F1CC] border border-borderColor rounded-xl px-2 md:px-4 py-2 cursor-pointer'><span className='text-paragraphTextColor'>الأثاث والتصميم</span></li>
                <li className='bg-[#F1F1F1CC] border border-borderColor rounded-xl px-2 md:px-4 py-2 cursor-pointer'><span className='text-paragraphTextColor'>التكنولوجيا</span></li>
              </ul>

              <div className="relative">
                <input
                  type="text"
                  name='area'
                  placeholder='فرز حسب التاريخ'
                  className="w-full border border-gray-400 rounded-lg p-2 cursor-pointer focus:outline-none hover:border-mainColor hover:bg-secondBackGroundColor transition-colors ease-in-out duration-500 placeholder:text-lg placeholder:text-textColor"
                />
                <span className={`absolute end-1 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-300`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-textColor"><path d="m18 15-6-6-6 6" /></svg>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5 w-full">
              {/* 1 */}
              <div className="">
                <div className="group border border-mainColor rounded-lg overflow-hidden">
                  {/* img */}
                  <div className="w-full bg-gray-100 flex items-center justify-center h-40">
                    <div className="w-40 h-40">
                      <img src={shopCategory} loading='lazy' alt="shop-categosfdry-image" className='w-full object-contain group-hover:scale-110 transition-all ease-in-out duration-500' />
                    </div>
                  </div>

                  {/* information */}
                  <div className="flex flex-col gap-4 px-4 py-2 h-1/2">
                    <header>
                      <h1 className='text-textColor font-bold text-xl w-full flex flex-row items-center justify-between'>زيت الطبخ الطبيعي <span className='text-mainColor font-bold'>25.99 ر.س</span></h1>
                      <p className='text-paragraphTextColor text-xl mt-4'>زيت طبخ طبيعي عالي الجودة من أفضل المصادر</p>
                    </header>
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
                  <div className="w-full bg-gray-100 flex items-center justify-center h-40">
                    <div className="w-36 h-36">
                      <img src={madicen} loading='lazy' alt="madicen" className='w-full object-contain group-hover:scale-110 transition-all ease-in-out duration-500' />
                    </div>
                  </div>

                  {/* information */}
                  <div className="flex flex-col gap-4 px-4 py-2 h-1/2">
                    <header>
                      <h1 className='text-textColor font-bold text-xl w-full flex flex-row items-center justify-between'>زيت الطبخ الطبيعي <span className='text-mainColor font-bold'>25.99 ر.س</span></h1>
                      <p className='text-paragraphTextColor text-xl mt-4'>زيت طبخ طبيعي عالي الجودة من أفضل المصادر</p>
                    </header>
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
                  <div className="w-full bg-gray-100 flex items-center justify-center h-40">
                    <div className="w-40 h-40">
                      <img src={applePhone} loading='lazy' alt="apple-phone" className='w-full object-cover group-hover:scale-110 transition-all ease-in-out duration-500' />
                    </div>
                  </div>

                  {/* information */}
                  <div className="flex flex-col gap-4 px-4 py-2 h-1/2">
                    <header>
                      <h1 className='text-textColor font-bold text-xl w-full flex flex-row items-center justify-between'>زيت الطبخ الطبيعي <span className='text-mainColor font-bold'>25.99 ر.س</span></h1>
                      <p className='text-paragraphTextColor text-xl mt-4'>زيت طبخ طبيعي عالي الجودة من أفضل المصادر</p>
                    </header>
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
                  <div className="w-full bg-gray-100 flex items-center justify-center h-40">
                    <div className="w-52 h-52 flex items-center justify-center">
                      <img src={couch} loading='lazy' alt="couch" className='w-full object-center group-hover:scale-110 transition-all ease-in-out duration-500' />
                    </div>
                  </div>

                  {/* information */}
                  <div className="flex flex-col gap-4 px-4 py-2 h-1/2">
                    <header>
                      <h1 className='text-textColor font-bold text-xl w-full flex flex-row items-center justify-between'>زيت الطبخ الطبيعي <span className='text-mainColor font-bold'>25.99 ر.س</span></h1>
                      <p className='text-paragraphTextColor text-xl mt-4'>زيت طبخ طبيعي عالي الجودة من أفضل المصادر</p>
                    </header>
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
                  <div className="w-full bg-gray-100 h-40 flex items-center justify-center">
                    <div className="w-40 h-40 flex items-center justify-center">
                      <img src={electronic} loading='lazy' alt="electronic" className='w-full object-contain group-hover:scale-110 transition-all ease-in-out duration-500' />
                    </div>
                  </div>

                  {/* information */}
                  <div className="flex flex-col gap-4 px-4 py-2 h-1/2">
                    <header>
                      <h1 className='text-textColor font-bold text-xl w-full flex flex-row items-center justify-between'>زيت الطبخ الطبيعي <span className='text-mainColor font-bold'>25.99 ر.س</span></h1>
                      <p className='text-paragraphTextColor text-xl mt-4'>زيت طبخ طبيعي عالي الجودة من أفضل المصادر</p>
                    </header>
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
                  <div className="w-full bg-gray-100 flex items-center justify-center h-40">
                    <div className="w-40 h-40 flex items-center justify-center">
                      <img src={books} loading='lazy' alt="books" className='w-full object-contain group-hover:scale-110 transition-all ease-in-out duration-500' />
                    </div>
                  </div>

                  {/* information */}
                  <div className="flex flex-col gap-4 px-4 py-2 h-1/2">
                    <header>
                      <h1 className='text-textColor font-bold text-xl w-full flex flex-row items-center justify-between'>زيت الطبخ الطبيعي <span className='text-mainColor font-bold'>25.99 ر.س</span></h1>
                      <p className='text-paragraphTextColor text-xl mt-4'>زيت طبخ طبيعي عالي الجودة من أفضل المصادر</p>
                    </header>
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
          </div>

          {/* التقيمات */}
          <div className="bg-white border border-borderColor rounded-2xl p-4 mt-4">
            <header className='flex flex-row justify-between items-center w-full'>
              <h1 className='text-textColor font-bold text-2xl'>التقيمات:</h1>
              <button className='bg-mainColor flex items-center justify-center gap-1 px-4 py-2 rounded-lg border border-mainColor cursor-pointer'><span className='text-white'>اكتب تقييم</span></button>
            </header>

            {/* stars */}
            <div className="flex flex-row items-center justify-around mt-5">
              <StarRating rating={3.5} show={true} />
              <div className="flex flex-col items-center text-paragraphTextColor">
                <div className="flex flex-row items-center">
                  <span>5</span>
                  <div className="bg-backGroundColor w-36 md:w-3xs h-4 mx-2 rounded-sm overflow-hidden relative">
                    <div className="bg-[#FABF35] h-4 rounded-sm " style={{ width: "65%" }} />
                  </div>
                  <span className='w-10'>65%</span>
                </div>

                <div className="flex flex-row items-center">
                  <span>4</span>
                  <div className="bg-backGroundColor w-36 md:w-3xs h-4 mx-2 rounded-sm overflow-hidden relative">
                    <div className="bg-[#FABF35] h-4 rounded-sm " style={{ width: "45%" }} />
                  </div>
                  <span className='w-10'>45%</span>
                </div>

                <div className="flex flex-row items-center">
                  <span>3</span>
                  <div className="bg-backGroundColor w-36 md:w-3xs h-4 mx-2 rounded-sm overflow-hidden relative">
                    <div className="bg-[#FABF35] h-4 rounded-sm " style={{ width: "25%" }} />
                  </div>
                  <span className='w-10'>25%</span>
                </div>

                <div className="flex flex-row items-center">
                  <span>2</span>
                  <div className="bg-backGroundColor w-36 md:w-3xs h-4 mx-2 rounded-sm overflow-hidden relative">
                    <div className="bg-[#FABF35] h-4 rounded-sm" style={{ width: "5%" }} />
                  </div>
                  <span className='w-10'>5%</span>
                </div>
              </div>

            </div>

            <div className="mt-5">
              <ul className='flex flex-col gap-4'>
                <li className="py-3 sm:py-4 border-b border-borderColor">
                  <div className="flex items-center ">
                    <div className="shrink-0">
                      <img className="w-8 h-8 md:w-16 md:h-16 rounded-full" src="/company-details/Photo by James Barr.png" alt="Thomas image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="font-medium text-gray-900 truncate flex flex-row items-center gap-4">
                        <span className='text-xl'>احمد عمر ماهر</span>
                        <span className='text-paragraphTextColor'>1445/09/8</span>
                        <span></span>
                      </p>
                      <p className="text-lg text-gray-500 truncate dark:text-gray-400">
                        شركة ممتازة وخدمة عالية الجودة. تم تنفيذ المشروع في الوقت المحدد بمهنية عالية.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="py-3 sm:py-4 border-b border-borderColor">
                  <div className="flex items-center ">
                    <div className="shrink-0">
                      <img className="w-8 h-8 md:w-16 md:h-16 rounded-full" src="/company-details/Photo by James Barr.png" alt="Thomas image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="font-medium text-gray-900 truncate flex flex-row items-center gap-4">
                        <span className='text-xl'>احمد عمر ماهر</span>
                        <span className='text-paragraphTextColor'>1445/09/8</span>
                        <span></span>
                      </p>
                      <p className="text-lg text-gray-500 truncate dark:text-gray-400">
                        شركة ممتازة وخدمة عالية الجودة. تم تنفيذ المشروع في الوقت المحدد بمهنية عالية.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="py-3 sm:py-4 border-b border-borderColor">
                  <div className="flex items-center ">
                    <div className="shrink-0">
                      <img className="w-8 h-8 md:w-16 md:h-16 rounded-full" src="/company-details/Photo by James Barr.png" alt="Thomas image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="font-medium text-gray-900 truncate flex flex-row items-center gap-4">
                        <span className='text-xl'>احمد عمر ماهر</span>
                        <span className='text-paragraphTextColor'>1445/09/8</span>
                        <span></span>
                      </p>
                      <p className="text-lg text-gray-500 truncate dark:text-gray-400">
                        شركة ممتازة وخدمة عالية الجودة. تم تنفيذ المشروع في الوقت المحدد بمهنية عالية.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* left div */}
        <div className="col-span-4 md:col-span-1">
          <div className="bg-white border border-borderColor rounded-2xl p-4">
            {/* list  */}
            <div className="flex flex-col gap-5 border-b border-borderColor pb-5">
              <ul className='flex flex-col gap-2'>
                <li><h1 className='text-lg text-textColor font-bold'>بيانات التواصل:</h1></li>

                <li>
                  <h1 className='flex flex-row items-center gap-1'>
                    <img src="/company-details/green-icons/Phone.svg" alt="company-details-Phone" className='w-4 h-4' />
                    <span className='text-mainColor'>الهاتف</span>
                  </h1>
                  <p className='text-paragraphTextColor ps-5'>+966 11 234 5678</p>
                </li>

                <li>
                  <h1 className='flex flex-row items-center gap-1'>
                    <img src="/company-details/green-icons/ChatCircle.svg" alt="company-details-ChatCircle" className='w-4 h-4' />
                    <span className='text-mainColor'>واتساب</span>
                  </h1>
                  <p className='text-paragraphTextColor ps-5'>+966 11 234 5678</p>
                </li>

                <li>
                  <h1 className='flex flex-row items-center gap-1'>
                    <img src="/company-details/green-icons/Envelope.svg" alt="company-details-Envelope" className='w-5 h-5' />
                    <span className='text-mainColor'>البريد الإلكتروني</span>
                  </h1>
                  <p className='text-paragraphTextColor ps-5'>info@advanced-solutions.sa</p>
                </li>

                <li>
                  <h1 className='flex flex-row items-center gap-1'>
                    <img src="/company-details/green-icons/GlobeSimple.svg" alt="company-details-GlobeSimple" className='w-5 h-5' />
                    <span className='text-mainColor'>الموقع الإلكتروني</span>
                  </h1>
                  <p className='text-paragraphTextColor ps-5'>advanced-solutions.sa</p>
                </li>

                <li>
                  <h1 className='flex flex-row items-center gap-1'>
                    <img src="/company-details/green-icons/MapPin.svg" alt="company-details-MapPin" className='w-5 h-5' />
                    <span className='text-mainColor'>العنوان</span>
                  </h1>
                  <p className='text-paragraphTextColor ps-5'>شارع الملك فهد، حي العليا، الرياض 12211الرياض، المملكة العربية السعودية</p>
                </li>

              </ul>

              <div className='flex flex-col gap-2'>
                <h1 className='text-lg text-textColor font-bold'>وسائل التواصل الاجتماعي:</h1>
                <ul className='flex flex-row gap-4'>
                  <li><span className='rounded-2xl px-4 py-1 bg-[#DDE9FF] w-fit'>Linkedin</span></li>
                  <li><span className='rounded-2xl px-4 py-1 bg-[#DDE9FF] w-fit'>Twitter</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* map */}
          <div className="mt-5 bg-white border border-borderColor rounded-2xl p-4">
            <h1 className='text-lg text-textColor font-bold mb-2'>الموقع على الخريطة:</h1>
            <div className='rounded-2xl overflow-hidden h-60'>
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://www.google.com/maps?q=23.8859,45.0792&z=5&output=embed"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <ul className='flex flex-col gap-5 mt-5'>
              <li><h1 className='text-lg text-textColor font-bold'>الأكثر طلبا:</h1></li>
              <li className='bg-backGroundColor border-b border-borderColor text-paragraphTextColor p-2'><span>تصنيع معدات</span></li>
              <li className='bg-backGroundColor border-b border-borderColor text-paragraphTextColor p-2'><span>الصيانة الصناعية</span></li>
              <li className='bg-backGroundColor border-b border-borderColor text-paragraphTextColor p-2'><span>الإٍستشارات الهندسية</span></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
