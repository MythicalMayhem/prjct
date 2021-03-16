import React from 'react'
import Paragraphs1 from './Paragraphs1'
const IntroPafs = () => {



    const flex = {
                    display:'flex',flexDirection:"row",
                    justifyContent:'center',flexWrap:"wrap"
                }

    return (
        <div className="container" style={flex}  >
            <Paragraphs1 />
            <Paragraphs1 />
            <Paragraphs1 />
            <Paragraphs1 />
            <Paragraphs1 />
            <Paragraphs1 />
        </div>
    )
}

export default IntroPafs
