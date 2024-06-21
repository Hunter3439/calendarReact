export default function Button({children , onClick}) 
{   
    const redButton = { 
        backgroundColor: '#FE5691', 
        color:'white' , 
    }
     return( 
        <>
            <button style={redButton} onClick={onClick}>{children}</button>
        </>
     )
}   