import { useState } from 'react';

const Time = () => {
  const [selectTime, setSelectTime] = useState(0);

  return (
    <div className="default-item-box">
      <p className="text-[20px] font-[700] mb-[20px]">횟수와 시간</p>

      <div className="mb-[10px]">
        <p className="text-gray-600">✓ 태블릿 보유 2만 원 할인이 적용된 금액이에요.</p>
        <p className="text-gray-600">✓ 추가 과목 3만 원 할인이 적용된 금액이에요.</p>
      </div>

      <div className="flex gap-[10px]">
        <button
          className={`flex items-start justify-center flex-col default-item-button ${selectTime === 1 ? 'active' : ''}`}
          onClick={() => setSelectTime(1)}
        >
          <span className="font-[400] mb-[5px]">주 1회 60분</span>
          <span className="text-gray-400 text-[14px]">
            <del>월 299,000원</del>
          </span>
          <span className="font-[700]">월 199,000원</span>
        </button>
        <button
          className={`flex items-start justify-center flex-col default-item-button ${selectTime === 2 ? 'active' : ''}`}
          onClick={() => setSelectTime(2)}
        >
          <span className="font-[400] mb-[5px]">주 1회 60분</span>
          <span className="text-gray-400 text-[14px]">
            <del>월 299,000원</del>
          </span>
          <span className="font-[700]">월 199,000원</span>
        </button>
      </div>
    </div>
  );
};

export default Time;
