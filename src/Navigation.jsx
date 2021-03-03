import React from 'react'
import {
    BrowserRouter as Router,
   
    Link
  } from "react-router-dom";

export default function Navigation() {
    return (
        <div>
    <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>

        <li>
        <Link to='/second/1'>second home</Link>
        </li>

    </ul>
            
        </div>
    )
}
