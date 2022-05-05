import React from 'react';
import '../styles/components/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className='Header'>
            <h1 className='Header-title'>
                <Link to='/'>
                    PlatziConf-Merge
                </Link>
            </h1>
            <div className='Header-checkout'>
                <Link to='/checkout'>
                    <i className='fas fa-shopping-basket'/>
                </Link>
            </div>
        </div>
     );
}
 
export default Header;