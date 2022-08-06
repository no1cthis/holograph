import React from 'react';
//import {Link} from 'react-router-dom'

import './button.scss'

function Button({children, link}) {
    return ( 
        <a className="my-button" href={link}>{children}</a>
     );
}

export default Button;  