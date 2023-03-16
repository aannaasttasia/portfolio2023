import React, { Component } from 'react';
import './css/NavBar.scss'

export default class NavBar extends Component<{}>{
    render(){
        return(
            <div className='navbar'>
                <div className='logo'>aannaasttasia</div>
                <div className="nav">
                    <nav className="navlist">
                            <a className='home navitem'>HOME</a>
                            <a className='about navitem'>ABOUT</a>
                            <a className='contact navitem'> CONTACT</a>
                    </nav>
                </div>
            </div>
        )
    }
}