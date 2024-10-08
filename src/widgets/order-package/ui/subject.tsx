import { useState } from 'react';

const Subject = () => {
  const [selectGrade, setSelectGrade] = useState<'high' | 'middle' | null>(null);
  const [selectSubject, setSelectSubject] = useState<string>('');

  return (
    <div className="default-item-box">
      <div className="text-[20px] font-[700] mb-[20px]">
        <p>수강 과목</p>
      </div>

      <div className="flex gap-[10px] mb-[20px]">
        <button
          className={`default-item-button ${selectGrade === 'high' ? 'active' : ''}`}
          onClick={() => setSelectGrade('high')}
        >
          고등
        </button>
        <button
          className={`default-item-button ${selectGrade === 'middle' ? 'active' : ''}`}
          onClick={() => setSelectGrade('middle')}
        >
          중등
        </button>
      </div>

      <div className="flex gap-[10px]">
        <button
          className={`default-item-button ${selectSubject === 'math' ? 'active' : ''}`}
          onClick={() => setSelectSubject('math')}
        >
          수학
        </button>
        <button
          className={`default-item-button ${selectSubject === 'english' ? 'active' : ''}`}
          onClick={() => setSelectSubject('english')}
        >
          영어
        </button>
        <button
          className={`default-item-button ${selectSubject === 'korean' ? 'active' : ''}`}
          onClick={() => setSelectSubject('korean')}
        >
          국어
        </button>
        <button
          className={`default-item-button ${selectSubject === 'science' ? 'active' : ''}`}
          onClick={() => setSelectSubject('science')}
        >
          과학
        </button>
        <button
          className={`default-item-button ${selectSubject === 'social' ? 'active' : ''}`}
          onClick={() => setSelectSubject('social')}
        >
          사회
        </button>
        <button
          className={`default-item-button ${selectSubject === 'second-language' ? 'active' : ''}`}
          onClick={() => setSelectSubject('second-language')}
        >
          제2외국어
        </button>
      </div>
    </div>
  );
};

export default Subject;
