import React, {useEffect} from 'react';
import Header from "./Header";
import Menu from "./Menu";
import {Api} from "./Api";

function Home() {
    useEffect(()=>{
        Api.getHomePage()
    },[])
  return (
    <div className="App">
        <Header/>
        <Menu/>
        <main className="content">
        </main>
    </div>
  );
}

export default Home;
