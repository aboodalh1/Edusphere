import React from 'react';
import homePageSvg from '../assets/home-page.svg';

const HeroSection = () => {
  return (
    <section className="relative bg-white h-screen flex  pt-16">
     
      <div className="w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full text-right">
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-primary-dark leading-tight mb-4 sm:mb-6 font-teshrin">
          لكل شاب طموح، منصتنا بوابتك للعلم والمعرفة، ورحلتك العلمية تبدأ من هنا، حيث نمدّك بالمهارات التي تحتاجها، و نرافقك خطوة بخطوة نحو مستقبل  يليق بطموحك.
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-primary-dark max-w-3xl ml-auto font-teshrin">
            
Edusphere Academy أول منصة تعليمية رقمية متكاملة في سوريا موجّهة لطلاب الجامعات، تهدف لإعادة تعريف تجربة التعلّم الجامعي بطرق تفاعلية، ممتعة، ومستدامة.

          </p>
        </div>
        
      </div>
      <img
            src={homePageSvg}
            alt="Hero illustration" className="w-1/2 h-full object-center"/>
    </section>
  );
};

export default HeroSection; 