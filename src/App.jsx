import React, { useEffect, useState } from "react";
import { ColorfullMessage } from "./ColorfullMessage";

export const App = () => {
  // useStateが変更されてるとその配下のコンポーネントは再レンダリングさせる
  const [num, setNum] = useState(0);
  const [showFaceFlag, setShowFaceFlag] = useState(false);
  const onCountUp = () => {
    setNum(num + 1);
  };

  // useEffectの第二引数にからの配列を渡すと最初の1回目だけ実行される;
  // 第二引数を指定するとその引数の変更があった時だけ実行される
  useEffect(() => {
    if (num % 3 === 0) {
      showFaceFlag || setShowFaceFlag(true);
    } else {
      showFaceFlag && setShowFaceFlag(false);
    }
  }, [num]);

  const onChangeShow = () => {
    setShowFaceFlag(!showFaceFlag);
  };

  return (
    <>
      <div>
        <ColorfullMessage color="blue" message="お元気ですか？" />
        <ColorfullMessage color="pink" message="元気です" />
        <button onClick={onCountUp}>ボタン</button>
        <p>{num}</p>
      </div>
      <div>
        <button onClick={onChangeShow}>顔文字切り替え</button>
        {showFaceFlag && <p>(^^♪</p>}
      </div>
    </>
  );
};
