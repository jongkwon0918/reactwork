import React, { useState } from "react";
import { debouncer, eventHandler, throttle, useStateHandlerJs } from "../../utils/handler";

const outerHandler = (e) => {
  console.log(e);
  console.log("외부에 선언한 핸들러");
};
// state데이터에 접근이 불가능
// const useStateHandlerOuter = (e) => {
//   console.log(testData);
// };
export default function C_FunctionEvent() {
  //state데이터 생성!
  const [testData, setTestData] = useState("나는 state데이터");

  const useStateHandler = (e) => {
    //내부에 선언된 핸들러에서  state값을 이용할 수 있다.
    console.log(testData);
  };

  const innerHandler = (d) => (e) => {
    console.log(d);
    console.log(e);
    console.log("내부에 선언된 핸들러");
  };
  return (
    <div>
      <h2>선언된 함수를 핸들러로 이용하기</h2>
      <p>이벤트 속성에 함수를 함수명만 설정, 호출하면 안됨</p>
      <p>선언위치</p>
      <ul>
        <li>
          컴포넌트함수 내부 : 페이지가 랜더링될때마다 함수가 재선언 됨.
          state,props데이터에 직접접근이 가능
        </li>
        <li>
          컴포넌트함수 외부 : 페이지가 랜더링되도 재선언하지 않음,
          state,props값에 직접접근이 불가능, 사용하려면 매개변수로 전달받아야함.
        </li>
      </ul>
      <h3>내부함수 핸들러 등록하기</h3>
      <button onClick={innerHandler("test")}>내부함수호출</button>
      <h3>외부에서 선언한 핸들러</h3>
      <button onClick={outerHandler}>외부함수호출</button>
      <input type="text" onChange={eventHandler} />

      <h3>state값을 핸들러에서 이용하기</h3>
      <button onClick={useStateHandler}>state값 가져오기</button>
      <p>
        외부에 선언된 함수에서 state값 이용하기
        핸들러에 매개변수로 전달 -> 고차함수를 이용(커링)
      </p>
      <button onClick={useStateHandlerJs(testData)}>외부함수에서 state이용</button>

        <h3>Debouncer이용하기</h3>
        <p>
            지속적으로 발생하는 이벤트를 모두 실행하지 않고 특정시간이 지난 후 마지막 발생한 이벤트만 실행하게 하는 기술 -> keyup,click이벤트에 적용
        </p>
        <input type="text" onChange={debouncer((e)=>{
            e.target.nextElementSibling.innerText=e.target.value;
        }, 300)}/>
        <span></span>
        <button onClick={debouncer(()=>{console.log('안녕')},600)}>클릭</button>

        <h3>Throttling이용하기</h3>
        <p>
            특정시간을 기준으로 주기적으로 실행하는 것
            -> 무한 스크롤 처리할때 많이 사용
        </p>

        <div id="throttlingTest" style={{height:"100px", overflow:"auto", }} onScroll={throttle(()=>{
            console.log("스크롤 이벤트 실행")
        })}>
            별 헤는 밤, 꿈의 조각들
고요한 밤하늘 아래, 은하수 흐르는 강가에 잊혀진 시간의 조각들이 바람에 실려온다. 오래된 나무들은 속삭이고, 달빛은 춤을 추네 내 안의 작은 우주, 그 시작을 더듬어 본다.

저 멀리 반짝이는 이름 모를 별 하나 희미한 불빛 속에서 길을 찾는 방랑자처럼 외로운 어둠 속을 헤치며 홀로 서 있지만 끝없이 이어지는 여정, 그 의미를 찾아간다.

구름은 흘러가고, 계절은 소리 없이 바뀌어 세월의 강물은 멈추지 않고 제 갈 길을 간다. 어제의 미련과 내일의 희망이 교차하는 곳 나는 다만 이 순간, 찰나의 평화를 느낄 뿐.

아득한 기억 속에서 피어나는 작은 꽃 잊혀진 골목길 끝, 낡은 그림자의 속삭임 사라진 목소리들이 바람결에 다시 들려와 가슴 한 켠 아련한 그리움으로 물들이네.

어둠이 깊어질수록 별들은 더욱 빛나고 밤하늘은 캔버스 위에 펼쳐진 꿈의 정원 잠든 세상 위에 고요히 내려앉는 침묵 속에서 나는 또 다른 나를 만나, 조용히 눈 감는다.

새벽녘, 동이 트는 푸른빛의 노래가 시작되면 밤새도록 꾼 꿈들은 아침 안개처럼 흩어지고 새로운 하루의 문이 열리며 희망을 속삭인다. 어제의 흔적들을 뒤로하고, 다시 발걸음을 옮긴다.

하늘을 나는 새처럼 자유로운 영혼이여 무게 없는 날개짓으로 세상 위를 날아오르네 구름 사이를 가르며 저 멀리 희망을 보지만 결국 돌아갈 곳은 언제나 내 안의 작은 뜰.

강물은 쉬지 않고 바다를 향해 흐르듯이 인생의 여정 또한 끝없이 흘러가는 것 때로는 거친 파도에 흔들리고 좌초될지라도 결국엔 제자리를 찾아, 고요한 물결을 이루네.

낡은 책장 속에서 발견한 오래된 편지 한 장 빛바랜 글씨 속에는 지나간 사랑의 약속 시간을 초월하여 전해지는 진심의 무게 가슴 속 깊이 파고들어 작은 울림을 남긴다.

모래시계 속 모래알처럼 사라져가는 순간들 붙잡으려 애써도 손가락 사이로 흘러내려 결국 빈 손으로 남겨진 허무함을 마주할 때 나는 또 다른 시작을 위한 비움을 배운다.

바람이 불어와 나뭇가지 흔들면 잎새는 노래하고 대지는 비를 맞아 촉촉이 젖어 생명을 잉태하네 자연의 순리 속에서 배우는 겸허한 지혜 모든 것은 시작과 끝, 순환의 고리에 묶여 있다.

어둠 속에서 피어나는 희미한 별빛처럼 절망 속에서도 희망의 씨앗은
        </div>
    </div>
  );
}
