import React, { useEffect, useRef, useState } from "react";
import ButtonComponent from "../F_datamanage/props/sample/ButtonComponent";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  LineController,
  LineElement,
  PointElement,
  BarController,
} from "chart.js";
export default function A_UseRefTest() {
  const container = useRef();
  const testUseRef = () => {
    //container변수에 저장된 값은 객체임
    //current속성을 이용해서 태그에 접근할 수 있다.
    console.log(container.current);
    console.log(container.current.tagName);
    console.log(container.current.innerHTML);
  };
  //포커스처리하기
  const focusTag = useRef();
  const handleFocus = () => {
    if (focusTag.current) focusTag.current.focus();
  };

  //스크롤 움직이기
  const [message, setMessage] = useState([]);
  const bottomRef = useRef(null);
  const addMessage = (e) => {
    setMessage((prev) => [...prev, `신규메시지 ${prev.length + 1}`]);
  };
  useEffect(() => {
    //대상 태그의 스크롤을 옮기기
    if (bottomRef.current) {
      //스크롤을 옮겨주는 함수를 제공함
      //scrollIntoView()함수를 이용 -> 지정한 요소가 화면에 보이게 스크롤을 옮겨주는 함수
      //매개변수
      //behavior : "smooth"(부드럽게), "auto"(바로)
      //block : 출력할 요소의 위치, start, end, center, nearest(가까운 위치)
      bottomRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [message]);

  //useRef를 사용 안하고  let timerId = null; 이런식으로 그냥쓰면 누를떄마다 속도빨라지고 안멈춤
  const [count, setCount] = useState(0);
  const timerIdRef = useRef(null);
  //   let timerId = null;
  const start = () => {
    if (timerIdRef.current) return;
    // if (timerId) return;
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    timerIdRef.current = id;
    // timerId = id;
  };
  const stopCount = () => {
    if (timerIdRef.current) {
      // if (timerId) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
      //   clearInterval(timerId);
      //   timerId = null;
    }
  };

  //이전 입력값 관리하기
  const [inputData, setInputData] = useState("");
  const [prevHistory, setPrevHistory] = useState([]);

  const prevValues = useRef([]);

  const inputDataChange = (e) => {
    setInputData(e.target.value);
  };
  useEffect(() => {
    if (inputData != "") prevValues.current.push(inputData);
    if (prevValues.current.length > 10) prevValues.current.shift();
  }, [inputData]);
  const prevInputDataCheck = () => {
    setPrevHistory(prevValues.current);
  };

  //차트 출력하기 chart.js를 이용해서 그래프를 출력할 수 있다.
  const canvasRef = useRef(null);
  //chart.js에서 제공하는 객체를 생성하기
  Chart.register(
    BarController,
    LineController,
    BarElement,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
  );
  //그래프에 출력할 데이터 생성
  const [labels, setLabels] = useState(["1월", "2월", "3월", "4월", "5월"]);
  const [chartData, setChartData] = useState([120, 150, 180, 50, 40]);
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    //canvas태그에 그래프 그려주기
    const ctx = canvasRef.current.getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "bar", //bar, line, pie,doughnut 등
      data: {
        labels,
        datasets: [
          {
            label: "월별 매출",
            data: chartData,
            backgroundColor: "rgba(76,192,180,0.6)",
            borderColor: "rgba(255,100,90,0.6)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [labels, chartData]);

  const [month, setSetMonth] = useState(0);
  const [tempValue, setTempValue] = useState("");

  const monthChoice = (e) => {
    setSetMonth(e.target.value);
  };

  const dataChange = (e) => {
    setTempValue(e.target.value);
  };

  const changeChartData = (e) => {
    setChartData((prev) => {
      //방법 1
      // const temp=[...prev];
      // temp[month]=tempValue;
      // return temp;

      //방법 2
      return prev.map((prevValue, i) => (i == month ? tempValue : prevValue));
    });
  };
  return (
    <div>
      <h4>useRef이용하기</h4>
      <p>
        DOM요소 접근할 수 있는 hoooks로 DOM의 위치정보 이전값등을 가져올때 사용,
        랜더링과 무관한 값을 저장하고 값이 변경되어도 컴포넌트를 랜더링 시키지
        않음, useRef()의 매개변수로 초기값을 전달함.
      </p>
      {/*ref={container} 이렇게 연결해야지만 사용가능 */}
      <div ref={container}>container 조작</div>
      <ButtonComponent variant="primary" size="small" onClick={testUseRef}>
        useRef값 확인하기
      </ButtonComponent>

      <h4>특정 태그에 포커스 설정하기</h4>
      <div>
        <input
          ref={focusTag}
          type="text"
          placeholder="버튼을 누르면 여기 포커싱하기"
        />
        <button
          className="border-2 border-red-500 border-solid rounded-lg px-4 py-2 hover:bg-blue-50"
          onClick={handleFocus}
        >
          포커스설정
        </button>
      </div>

      <h3>scroll 데이터 처리하기</h3>
      <p>
        새로운 데이터가 추가되면 스크롤 맨 아래로 설정할때 사용,
        알림센터,무한스크롤, 채팅
      </p>
      <div
        style={{
          border: "1px solid gray",
          height: "150px",
          overflow: "auto",
          padding: 8,
        }}
      >
        {message.map((e, i) => (
          <div key={`${i}_${e}`}>{e}</div>
        ))}
        <div ref={bottomRef}></div>
      </div>
      <ButtonComponent variant="warn" onClick={addMessage}>
        데이터 추가
      </ButtonComponent>

      <h4>타이머 데이터 처리하기</h4>
      <p>랜더링과 관계없이 시간정보를 저장하고 싶을때 사용할 수 있음.</p>
      <div>
        <p>타이머 : {count}초</p>
        <ButtonComponent onClick={start}>시작</ButtonComponent>
        <ButtonComponent onClick={stopCount}>정지</ButtonComponent>
      </div>

      <h3>이전값 저장하기</h3>
      <div>
        <input type="text" onInput={inputDataChange} />
        <ButtonComponent onClick={prevInputDataCheck}>
          이전압력값확인
        </ButtonComponent>
        <ol>
          {prevHistory.map((v, i) => {
            return <li key={i}>{v}</li>;
          })}
        </ol>
      </div>
      <h3>chart.js 이용하기</h3>
      <div style={{ width: "600px", height: "400px" }}>
        <canvas ref={canvasRef} />
      </div>
      <select onChange={monthChoice}>
        {labels.map((v, i) => (
          <option key={`${v}_${i}`} value={i}>
            {v}
          </option>
        ))}
      </select>
      <input type="text" value={tempValue} onChange={dataChange} />
      <button onClick={changeChartData}>데이터 적용</button>
    </div>
  );
}
