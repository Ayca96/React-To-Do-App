import React, { useState } from 'react';
import Data from "../helper/Data";
import ToDoGoster from '../components/ToDoGoster';
import TodoEkle from '../components/TodoEkle';

const Home = () => {

  const [doing, setDoing] = useState(Data);


  return (
    <div>

      <TodoEkle doing={doing} setDoing={setDoing}/>

      <ToDoGoster doing={doing} setDoing={setDoing}/>

    </div>
  )
}

export default Home