import React from 'react'
import Navigation from './Navigation'
import {
  useParams
} from "react-router-dom";

export default function ProductDetail(props) {
    const params=useParams()
    console.log(params);
    return (
        <div class="design">
            <p>Name of product is Samsung</p>
          
            
        </div>
    )
}
