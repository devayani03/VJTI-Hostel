import './Button.css';
import React from 'react';
import {Link} from 'react-router-dom';

export function Button(){
    return(
        <Link to='sign-up'>
            <button className='btn'>Sign-up</button>
        </Link>
    );
    


}