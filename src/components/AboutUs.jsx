import React from 'react';

const AboutUs = () => {
  return (
    <section className="h-[500px] bg-white  relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-right">
          <h2 className="text-3xl font-bold text-primary-dark mb-2 font-teshrin">رؤيتنا:</h2>
          
          <div className="relative">
            {/* Gradient Circle */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
<img src="src/assets/Logo_2.svg" className="w-96 h-auto" alt="Logo" />
              {/* <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-light via-accent-teal to-background-subtle opacity-20"></div> */}
            </div>

            <div className="space-y-2 max-w-3xl">
              <p className="text-primary-dark text-lg leading-relaxed font-teshrin">
              تقديم تجربة تعليمية تثري مسيرة الطالب الجامعية، وتردم الفجوة بينه وبين المعلومة، من خلال محتوى معرفي ميسر وشراكات استراتيجية مستقبلية مع الجامعات.
              </p>
              <h2 className="text-3xl font-bold text-primary-dark mb-8 font-teshrin">رسالتنا:</h2>
              <p className="text-primary-dark text-lg leading-relaxed font-teshrin">
              نقدّم محتوى تعليمي دقيق بجودة عالية ومبسّط لطلاب الجامعات السورية، عبر محاضرات تفاعلية وأدوات ذكية.
              </p>
              <h2 className="text-3xl font-bold text-primary-dark mb-8 font-teshrin">الأهداف التي نعمل عليها:</h2>
              <p className="text-primary-dark text-lg leading-relaxed font-teshrin">
              -سد الفجوة بين التعليم الجامعي التقليدي والتعليم الحديث.
              <br/>
              -ندعم مهارات التعلّم الذاتي من خلال محتوى مفاهيمي واضح وموثوق ومدعوم بأمثلة تفاعلية، وأسئلة تقييم مأخوذة من مصادر أكاديمية مدروسة ومعتمدة.
              <br/>
              -التركيز على بناء تجربة تعليمية حديثة تستند إلى مفاهيم التعلم الذاتي والتعلم المستمر.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 