import { useState } from 'react';

const Month = () => {
  const [selectMonth, setSelectMonth] = useState(0);

  return (
    <div className="default-item-box">
      <p className="text-[20px] font-[700] mb-[20px]">수강 기간</p>

      <div className="flex flex-col gap-[10px]">
        <button
          className={`flex items-start justify-center flex-col default-item-button ${selectMonth === 3 ? 'active' : ''}`}
          onClick={() => setSelectMonth(3)}
        >
          <span className="text-[15px] font-[700] mb-[16px]">3개월</span>
          <span className="text-[15px] font-[400] mb-[4px]">• 태블릿 보유 시 수업료 6만원 할인</span>
          <span className="text-[15px] font-[400] mb-[4px]">• 태블릿 대여 시 중고 상품 제공</span>
          <span className="text-[15px] font-[400]">• 입시 설계 리포트 제공 (25만원 상당)</span>
        </button>
        <button
          className={`flex items-start justify-center flex-col default-item-button ${selectMonth === 6 ? 'active' : ''}`}
          onClick={() => setSelectMonth(6)}
        >
          <span className="text-[15px] font-[700] mb-[16px]">6개월</span>
          <span className="text-[15px] font-[400] mb-[4px]">• 태블릿 보유 시 수업료 12만원 할인</span>
          <span className="text-[15px] font-[400] mb-[4px]">• 태블릿 대여 시 새 상품 제공</span>
          <span className="text-[15px] font-[400] mb-[4px]">• 입시 설계 리포트 + 전문가 코칭 (35만원 상당)</span>
          <span className="text-[15px] font-[400]">• 입시 로드맵 콘텐츠 (48만원 상당)</span>
        </button>
        <button
          className={`flex items-start justify-center flex-col default-item-button ${selectMonth === 12 ? 'active' : ''}`}
          onClick={() => setSelectMonth(12)}
        >
          <span className="text-[15px] font-[700] mb-[16px]">12개월</span>
          <span className="text-[15px] font-[400] mb-[4px]">• 태블릿 보유 시 수업료 24만원 할인</span>
          <span className="text-[15px] font-[400] mb-[4px]">• 태블릿 대여 시 새 상품 제공</span>
          <span className="text-[15px] font-[400] mb-[4px]">• 입시 설계 리포트 + 전문가 코칭 (35만원 상당)</span>
          <span className="text-[15px] font-[400]">• 입시 로드맵 콘텐츠 (48만원 상당)</span>
        </button>
      </div>
    </div>
  );
};

export default Month;
