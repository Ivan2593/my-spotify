import React, {useEffect} from 'react';
import {Api} from "./Api";

function Header() {
    useEffect(()=>{
        Api.header_navigation()
    },[])
    return(
        <header className="header">
            <nav className="header__navigation">
                <button className="link header__pointer">
                    {'<'}
                </button>
                <button className="link header__pointer">{'>'}</button>
            </nav>
        </header>
    );

}
export default Header;