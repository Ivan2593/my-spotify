import React, {useEffect} from 'react';
import Header from "./Header";
import Menu from "./Menu";
import {Api} from "./Api";

function Search() {
    useEffect(()=>{
        Api.searchLine()
        Api.search()
    },[])
    return (
        <div className="App">
            <Header/>
            <Menu/>
            <main className="content">
                <div className="search">
                </div>
            </main>
        </div>
    );
}

export default Search;