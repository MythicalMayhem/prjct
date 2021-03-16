import React from 'react'

const Paragraphs1 = () => {
    const block ={
        display:"block", height:'6.5cm', width:'8.5cm',
        borderRadius:'0.1cm',fontSize:"17.5px",fontWeight:"500",marginLeft:"1cm",
        backgroundColor:'#5ac8d8',marginBottom:"1.35cm",border:" 3px solid gray",
        boxShadow: "0px 4px 6px 3px gray"
    }
    const flex = {
        display:'flex',flexDirection:"row",
        justifyContent:'center'
    }
    return (
        <div style={flex}>
            <div style={block} >
                <p style={{margin:"0.8cm"}}>  
                    She tried to explain that love wasn't like pie. 
                    There wasn't a set number of slices to be given out.  
                    There wasn't less to be given to one person if you wanted to give more to another.
                </p>
            </div>       
        </div>
    )
}

export default Paragraphs1
