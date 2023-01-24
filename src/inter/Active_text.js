import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Active.css";

export const Active_text = () => {
  const handleType = (count) => {
    // access word count number
    //console.log(count)
  };

  const handleDone = () => {
    //console.log(`Done after 5 loops!`)
  };

  return (
    <div className="rrr">
      <h1>
        Найти{" "}
        <span style={{ color: "#06a1fc", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[
              "фильм твоей мечты!",
              "новый мир!",
              "незабываемых героев!",
              "фильм",
            ]}
            loop={1}
            cursor
            cursorStyle=""
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
    </div>
  );
};
