import React from 'react'

const intro = () => {
    const titlestyle = {textAlign: 'center',
                        textTransform:'uppercase',color:"#00adb5",wordSpacing:"50px",
                        marginBottom:"1.35cm",letterSpacing:"15px",fontSize:"100px",
                        marginTop:"4cm",fontFamily:"Georgia"}
    const txtstyle = {textIndent: "50px",textAlign: 'center',letterSpacing:'3px',marginBottom:"1cm",fontSize:"22px",}
    const flex = {display:'flex',flexDirection:'column'}
    const block = {display:"block",height:"20cm",textAlign:"center"}
    return (
        <div style={block}>
            <div style={flex}>
            <div style={titlestyle}> <p> Big fancy title </p> </div>
            <div style={txtstyle}>
                <p>
                    This text is styled with some of the text formatting properties. <br />
                    The heading uses the text-align,<br />
                    text-transform, and color properties.The paragraph is indented,<br /> 
                    aligned, and the space between characters is specified. <br />
                    The underline is removed from this colored<br />
                </p>
            </div> 
        </div>
        </div>
    )
}

export default intro
