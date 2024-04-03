const MenuBox=(props)=>{
    return(
        <div>
            <p>{props.temp} {props.name}</p>
            <p>{props.price}$</p>
        </div>
    )
}
export default MenuBox;