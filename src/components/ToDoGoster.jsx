import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const ToDoGoster = ({ doing, setDoing }) => {

const deleteTodo = (id) =>{

  setDoing(doing.filter((a) => a.id !== id));

}

  return (
    <div>
      {doing.map((x) => (
        <div key={x.id} className={x.isDone ? "griTrue" : "sariFalse"}>
          <h3>
            {x.text}

            <div>
              <FaCheckCircle 
              onClick={()=>setDoing(doing.map((a)=>a.id === x.id ? {...a,isDone:!a.isDone} : a)

              )
              
              }
              style={{color :"#074700", fontSize:"20px"}}/>
              <MdDeleteForever 
              onClick={()=> deleteTodo(x.id)}
              style={{color : "#B5242C", fontSize :"25px"}}/>
            </div>
          </h3>
          <h6>{x.day}</h6>
        </div>
      ))}
    </div>
  );
};

export default ToDoGoster;
