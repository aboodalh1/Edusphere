import React from 'react';

const FeatureCard = ({ title, description }) => (
  <div className="bg-primary-light rounded-3xl p-10 h-[250px] text-right">
    <h3 className="text-2xl font-bold text-primary-dark mb-4 font-teshrin text-center">{title}</h3>
    <p className="text-white font-teshrin text-center px-5 ">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      title: "محتوى موثق",
      description: "محاضرات واضحة ومنظمة ومعلومات دقيقة مبنية على مصادر علمية موثوقة لإيصالها بأسلوب سهل وبسيط."
    },
    {
      title: "تعلم تشاركي",
      description: " مساحة شبابية تفاعلية لصناعة محتوى تعليمي، وتبادل الأفكار، ودعم بعضكم البعض في رحلة التعلّم."
    },
    {
      title: "اختبار المعلومات",
      description: "بعد كل محاضرة، تتوفر مجموعة من الأسئلة التفاعلية، لترسيخ المعلومة، واختبار فهمك، و تحضيرك الامتحان بكل سهولة وثقة."
    }
  ];

  return (
    <section className="bg-primary-dark h-auto py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12 font-teshrin">ما يميزنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-teshrin">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 