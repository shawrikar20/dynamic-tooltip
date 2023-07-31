export default function Button({id,text,position}){
    return(
        <div id={id} style={position} className="parent-button">
            {text}
        </div>
    )
}