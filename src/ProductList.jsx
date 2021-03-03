import React,{useState} from 'react'

import {useHistory} from 'react-router-dom'

export default function ProductList() {
    const history= useHistory
  

    const [product, setProduct] = useState([
        {
            name: 'Samsung',
            description: 'Note that returning a falsy expression will still cause the element after && to be skipped but will return the falsy expression. In the example below, <div>0</div> will be returned by the render method.',
            price: '500',
            category: 'Mobile phone',
        },
        {
            name: 'Nokia',
            description: 'Note that returning a falsy expression will still cause the element after && to be skipped but will return the falsy expression. In the example below, <div>0</div> will be returned by the render method.',
            price: '100',
            category: 'handset',
        },
        {
            name: 'Motorola',
            description: 'Note that returning a falsy expression will still cause the element after && to be skipped but will return the falsy expression. In the example below, <div>0</div> will be returned by the render method.',
            price: '300',
            category: 'folding',
        },
      
        ])


    const [dataEntry, setDataEntry] = useState()



    const getClicked=(index)=>{
        
        setDataEntry(index)
    }
   
    return (
        <>
            {
                product.map((data,index)=>{
                    return (
                    <>
                    
                    <h2 >Product Name {index+1}</h2> 
                    <h2>{data.name}</h2>
                    <button >click here</button>
                   

                    
                    

                    </>
                    
                    
                    )

                    
                })

                
            }


                    



        </>
    )
}