import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const LectureCard = ({ lectureNumber, title,  cost }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      onClick={
        lectureNumber=="المحاضرة الأولى"?
        () => navigate('/lecture'):() => navigate('/lecture_2') }
      className="bg-primary-light h-[150px] rounded-2xl p-6 relative cursor-pointer hover:shadow-lg transition-all hover:scale-105 hover:bg-accent-teal duration-300"
    >
      <div className="flex flex-col items-start w-full">
        <p className="text-primary-dark font-semibold font-teshrin">{lectureNumber}</p>
        <h3 className="text-xl text-white font-teshrin text-right mb-1">{title}</h3>
        
      </div>
      {cost && (
        <div className="absolute bottom-4 left-4 flex items-center">
          <span className="text-white/80 text-sm ml-1">{cost}</span>
          <svg className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
          </svg>
        </div>
      )}
    </div>
  );
};

const CourseDetails = () => {
  const lectures = [
    { lectureNumber: 'المحاضرة الأولى', title: 'Binary Trees', cost: '20' },
    { lectureNumber: 'المحاضرة الثانية', title: 'Binary Search Tree', cost: '20' },
  
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Course Header */}
      <div className="container mx-auto px-4 pt-24">
        <div className="flex items-start gap-12 mb-12">
          {/* Course Circle */}
          <div className="w-64 h-64 shrink-0 bg-[#6666CC] rounded-full relative">
            <div className="absolute top-[-220px] right-[-150px] w-[450px] h-[400px] border-[3px] border-dashed border-white/50 rounded-full" 
                 style={{ transform: "rotate(60deg)" }}>
            </div>
          </div>

          {/* Course Info */}
          <div className="flex-1" dir="rtl">
            <h1 className="text-4xl font-bold text-primary-dark mb-6 font-teshrin">الخوارزميات وبنى المعطيات 2</h1>
            <p className="text-primary-dark leading-relaxed  font-teshrin text-lg">
في عالم علوم الحاسوب، تُعَدّ الخوارزميات أدوات أساسية لحل المشكلات وتنظيم البيانات بكفاءة. وتأتي مادة الخوارزميات 2 كامتداد لمفاهيم الخوارزميات الأساسية، حيث تتناول هياكل بيانات أكثر تعقيدًا، مثل الأشجار (Trees) والرسوم البيانية (Graphs)، التي تُستخدم لحل مشكلات تتطلب تمثيلاً هرميًا أو شبكيًا للبيانات.
سنتناول في هذه المادة مفهوم الأشجار التي تلعب دورًا محوريًا في تمثيل البنى الهرمية، وهي تُستخدم في العديد من التطبيقات، مثل تحليل التعابير الرياضية، تنظيم أنظمة الملفات، قواعد البيانات، ومحركات البحث.
بالإضافة لمفهوم الرسوم البيانية(Graphs),وهي بنى بيانات تمثل العلاقات أو الاتصالات بين الكيانات. تُستخدم في مجموعة واسعة من المجالات مثل الشبكات الاجتماعية، خرائط الطرق، تحليل الشبكات، خوارزميات الإنترنت، وغيرها
من خلال دراسة هذه البُنى والخوارزميات المرتبطة بها، يكتسب الطالب القدرة على تصميم حلول فعالة للمشكلات المعقدة، واختيار الهيكل الأنسب للبيانات بحسب متطلبات التطبيق.            </p>
          </div>
        </div>
      </div>

      {/* Lectures Section */}
      <div className="w-full bg-background-subtle py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-2 mb-8" dir="rtl">
            <h2 className="text-3xl font-bold text-primary-dark font-teshrin">المحاضرات</h2>
            <span className="text-primary-dark text-3xl">✦</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" dir="rtl">
            {lectures.map((lecture, index) => (
              <LectureCard key={index} {...lecture} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails; 