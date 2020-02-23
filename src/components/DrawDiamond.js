import React, { useState } from "react";
import styles from "./DrawDiamond.module.scss";

function DrawDiamond() {
  const [diamondSize, setDiamondSize] = useState("");
  const [diamond, setDiamond] = useState("");
  const [coordinate, setCoordinate] = useState("");

  const changeSize = size => {
    const onlyNum = /[^0-9]/gi;
    if (onlyNum.test(Number(size))) {
      alert("숫자만 입력가능");
      setDiamondSize("");
    } else {
      setDiamondSize(Number(size));
    }
  };

  const printDiamond = (size, xy) => {
    let result = [];
    let starNum = 1;
    let x = 0;
    let y = 0;

    x = Number(xy.split(",")[0]);
    y = Number(xy.split(",")[1]);

    // 열
    for (let i = 0; i < size; i++) {
      const condition = (size - starNum) / 2;
      const row = [];
      // 행
      for (let j = 0; j < size; j++) {
        if (j < condition) {
          row.push(" ");
        } else if (j < condition + starNum) {
          if (j >= x && i >= y) {
            row.push("&");
          } else {
            row.push("*");
          }
        } else {
          row.push(" ");
        }
      }
      result.push(row);
      if (i < size / 2 - 1) {
        starNum += 2;
      } else {
        starNum -= 2;
      }
    }

    result.map(i => {
      i.map(j => {});
    });

    result = result.map(i => {
      return i.join("") + "\n";
    });
    setDiamond(result.join(""));
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.inputBox}>
        <label htmlFor="diamondSize">
          <p>마름모 사이즈 :</p>
          <input
            type="text"
            id="diamondSize"
            value={diamondSize}
            onChange={e => changeSize(e.target.value)}
          />
        </label>
        <label htmlFor="coordinate">
          <p>기호 변형 좌표 (ex: x, y) :</p>
          <input
            type="text"
            id="coordinate"
            value={coordinate}
            onChange={e => setCoordinate(e.target.value)}
          />
        </label>
        <button
          type="button"
          onClick={() => printDiamond(diamondSize, coordinate)}
        >
          출력
        </button>
      </div>
      <div className={styles.resultBox}>
        <p>결과 :</p>
        <pre>{diamond}</pre>
      </div>
    </div>
  );
}

export default DrawDiamond;
