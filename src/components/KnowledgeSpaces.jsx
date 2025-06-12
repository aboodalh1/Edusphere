import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from './Title';
import SpaceCategories from './SpaceCategories';

const SpaceCard = ({ title, faculty, university, year, onClick }) => (
  <div 
    onClick={onClick}
    className="flex-shrink-0 w-72 bg-primary-light rounded-3xl p-6 mx-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 flex flex-col"
  >
    <h3 className="text-2xl font-bold text-white mb-8 text-center font-teshrin min-h-[60px] flex items-center justify-center">{title}</h3>
    <div className="space-y-[1px] text-white/90 text-center font-teshrin mt-auto">
      <p className="text-sm font-semibold text-center text-primary-dark font-teshrin min-h-[20px]">{faculty}</p>
      <p className="text-sm text-center text-primary-dark font-teshrin min-h-[20px]">{university}</p>
      <p className="text-sm text-center text-primary-dark font-teshrin min-h-[20px]">{year}</p>
    </div>
  </div>
);

const ChevronButton = ({ direction, onClick }) => (
  <button 
    onClick={onClick}
    className="text-primary-dark p-3 rounded-full hover:shadow-lg transition-all duration-300 hover:bg-background-subtle"
  >
    {direction === 'left' ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    )}
  </button>
);

const KnowledgeSpaces = () => {
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  const spaces = [
    {
      title: "الخوارزميات وبنى المعطيات 2",
      faculty: "كلية الهندسة المعلوماتية",
      university: "جامعة دمشق",
      year: "السنة الثانية"
    }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleCardClick = (space) => {
    navigate('/course-details');
  };

  // Determine if we should center the cards (4 or fewer)
  const shouldCenter = spaces.length <= 4;

  return (
    <section className="bg-white py-16">
      <div className="bg-white">
        <Title title="فضاءات العلم" />
        <SpaceCategories />
        <div className='w-full bg-background-subtle'>
          <div className='pt-10 pr-10 pb-0 text-primary-dark font-teshrin text-2xl'>هندسة المعلوماتية (احدث الكورسات)</div>
          <div className="relative max-w-[95%] mx-auto py-10">
            {spaces.length > 1 && (
              <>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                  <ChevronButton direction="left" onClick={() => scroll('left')} />
                </div>
                
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                  <ChevronButton direction="right" onClick={() => scroll('right')} />
                </div>
              </>
            )}

            <div 
              ref={scrollContainerRef}
              className={`flex ${shouldCenter ? 'justify-center' : 'justify-start'} items-center overflow-x-auto hide-scrollbar py-10 px-10`}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {spaces.map((space, index) => (
                <SpaceCard 
                  key={index} 
                  {...space} 
                  onClick={() => handleCardClick(space)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSpaces; 