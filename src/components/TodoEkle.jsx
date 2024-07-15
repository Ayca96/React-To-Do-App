import React, { useState } from "react";

const TodoEkle = ({ doing, setDoing }) => {
  const [buton, setButon] = useState(true);
  const [texT, setText] = useState("");
  const [day, setDay] = useState("");

  const handleSubmiTT = (e) =>{
    e.preventDefault();
    setDoing([...doing,{id:doing.length, text:texT, day:day, isDone:false}])

    setText("");
    setDay("");

  }

  return (
    <div>
      <header>
        <h1>TO DO APP</h1>
        <button
          onClick={() => setButon(!buton)}
          className="btn"
          style={{ backgroundColor: buton ? "#074700" : "#301E8A" }}
        >
          {buton ? "CLOSE" : "SHOW"} ADD TASK BAR
        </button>
      </header>
      {buton && (
        <form onSubmit={handleSubmiTT}>
          <div className="formControl">
            <label htmlFor="text">Task</label>
            <input
             type="text" 
             id="text" 
            onChange={(e)=>setText(e.target.value)}
            value={texT}
            placeholder="Enter your task..."
            />
          </div>

          <div className="formControl">
            <label htmlFor="day">Day & Time</label>
            <input 
            type="datetime-local" 
            id="day"
             onChange={(e)=>setDay(e.target.value)}
             value={day} />
          </div>

          <button className="btn btn-submit">SUBMIT</button>
        </form>
      )}
    </div>
  );
};

export default TodoEkle;
