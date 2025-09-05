import React from 'react'
import {FaFacebookF, FaTelegramPlane, FaInstagram  } from 'react-icons/fa'
import logo from '../assets/hero/hero.jpg'
import { ImOpt } from 'react-icons/im'
import { useTranslation } from 'react-i18next' 
const Hero  = () => {
  const { t } = useTranslation();
  return (
    <section id='home'  className="pt-[88px] md:pt-[96px] w-full flex flex-col md:flex-row items-center justify-around min-h-screen bg-white dark:bg-gray-900 text-gray-500 dark:text-white transition-colors duration-300o overflow-x-hidden">
      <div  className='max-w-full'>
        <p data-aos="fade-right" className='text-3xl font-semibold'>{t("hero.des_name")}</p>
        <h2 data-aos="fade-right" className='typing py-3 mt-4 text-4xl md:text-5xl font-bold text-orange-500'>&nbsp;&nbsp;{t("hero.name")}</h2>
        <p data-aos="fade-left" className='text-lg mt-4 text-gray-400  font-semibold'>{t("hero.carrer")}</p>
        <a data-aos="fade-left" href='/about' className='inline-block mt-6 px-6 py-3 rounded-full text-white font-semibold bg-orange-500'>{t("hero.btn_know")}</a>
        
        <div data-aos="zoom-in-up" className="mt-6 flex space-x-6 text-2xl">
          <a  href="https://www.facebook.com/share/16nUbygATd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
            <FaFacebookF />
          </a>
          <a href="https://t.me/console_log01" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
            <FaTelegramPlane />
          </a>
          <a href="https://www.instagram.com/yuth_004?igsh=cHQ0Y3N2NjZhbHZi&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
            <FaInstagram />
          </a>
        </div>
      </div>
       
    <div data-aos="zoom-out"
       className="pulse-wrapper mt-10 md:mt-0 md:ml-10">
      <div className="border-ring"></div>
      <img  className='rounded-full w-64 h-64 object-cover'src={logo} alt='Yuth'/>
    </div>
    </section>
  )
}

export default Hero;
