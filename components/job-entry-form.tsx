"use client"
import { useCallback, useState } from "react";
const JobEntryForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [submittedNames, setSubmittedNames] = useState<string[]>([]);

  const onSubmitName = useCallback((userInput: string) => {
    if (userInput === "") return;
    setSubmittedNames([...submittedNames, userInput]);
    setNameValue("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setNameValue, setSubmittedNames]);

  const onRemoveName = useCallback((i: number) => {
    const result = submittedNames.filter((_, indexToRemove) => indexToRemove !== i);
    setSubmittedNames([...result]);;
  }, []);

  return (
    <div>
      <div>
        <input value={nameValue} onChange={(e) => setNameValue(e.target.value)}></input>
      </div>

      <div>
        <input value={nameValue} onChange={(e) => setNameValue(e.target.value)}></input>
      </div>
      {/* <div style={{ position: "absolute", bottom: "0", display: "flex", justifyContent: "center"}}>
        hello
      </div> */}
      <button onClick={() => onSubmitName(nameValue)}>Submit</button>
      
      <div className="absolute bottom-0 flex w-full justify-center">
        <div className="flex flex-col flex gap-5">
          {
            submittedNames.map((name, i) => (
              <div key={i} suppressHydrationWarning>
                <label>{name}</label>
                <button onClick={() => onRemoveName(i)}>x</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default JobEntryForm;