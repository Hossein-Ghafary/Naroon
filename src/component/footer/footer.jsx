import React from 'react'
import './footer.css'
import {GrDropbox} from 'react-icons/gr'
import {TiTick} from 'react-icons/ti'
import {TfiBackLeft} from 'react-icons/tfi'

const Footer = () => {
  return (
    <div dir='rtl'>
    <div className='all-footer'>
    <div className='footer-title'>
    <div className='icons'>
           <div className='icon1'>
           <GrDropbox/>
            <p>تحویل به پست در روز های شنبه و سه شنبه</p>
           </div>
            <div className='icon2'>
            <TiTick/>
            <p>ضمانت اصل بودن</p>
            </div>
            <div className='icon3'>
            <TfiBackLeft/>
            <p>ضمانت بازگشت کالا تا 7 روز</p>
            </div>
        </div>
      </div>
     <div className='footer'>
      <div className='all-tags'>
      <div className='tags'>
        <h3>تگ های پرکاربرد</h3>
        <a href='#'><p>خانه</p></a>
        <a href='#'><p>محصولات</p></a>
        <a href='#'><p>لباس</p></a>
        <a href='#'></a>
        <a href='#'><p>لوازم آرایشی بهداشتی</p></a>
      </div>
     <div className='tags'>
        <h3>سوالات متداول</h3>
        <a href='#'><p>خانه</p></a>
        <a href='#'><p>محصولات</p></a>
        <a href='#'><p>لباس</p></a>
        <a href='#'></a>
        <a href='#'><p>لوازم آرایشی بهداشتی</p></a>
      </div>
     <div className='tags'>
        <h3>دسته بندی های محبوب</h3>
        <a href='#'><p>خانه</p></a>
        <a href='#'><p>محصولات</p></a>
        <a href='#'><p>لباس</p></a>
        <a href='#'></a>
        <a href='#'><p>لوازم آرایشی بهداشتی</p></a>
      </div>
      </div>
      <div className='about-us'>
        <h2>نارون چیه؟</h2>
        <p>ما اینجا توی نارون سعی داره یک فضای امن رو برای خرید مطمِن برای کاربرها فراهم کنه .</p>
        <p>حوظه کاری نارون سایت در سه دسته بندی لوازمآرایشی بهداشتی , پوشاک و زیورآلات است  .
        </p>
        <p>شما توی نارون اول از کیفیت محصول مطن میشید یعد هزینه رو درب منزل پرداخت میکنید</p>
      </div>
     </div>
    </div>
    </div>
  )
}

export default Footer
