import React from 'react'
import './header.scss';
import {Link} from 'react-router-dom';

const header = () => {
    return (
        <div className='header'>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default header