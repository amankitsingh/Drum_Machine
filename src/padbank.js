import React from "react";

import DrumPad from "./drumpad";

export default function PadBank(props) {
  let padBank = props.currentPadBank.map((Obj, i, padBankArr) => {
    return (
      <DrumPad
        key={padBankArr[i].id}
        clipId={padBankArr[i].id}
        url={padBankArr[i].url}
        keyTrigger={padBankArr[i].keyTrigger}
        keyCode={padBankArr[i].keyCode}
        updateDisplay={props.updateDisplay}
      />
    );
  });
  return <div className="pad-bank">{padBank}</div>;
}
