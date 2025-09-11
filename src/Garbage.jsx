function Car(props) {
    return(
        <li className="list">
            <div>[{props.id}]         {props.brand}        {props.price}       {props.feature}</div>
        </li>
    )
}

function Garage(){
    const cars = [
        {id:1, brand:'Ford',price:4500,feature:'Graceful design'},
        {id:2, brand:'BMW',price:7800,feature:'functional of high level'},
        {id:3, brand:'Audi',price:6700,feature:'Popular Car'}
    ];

    return (
        <>
            <h1>car list</h1>
            <ul>
                {cars.map((car)=>
                    <Car id={car.id} brand={car.brand} price={car.price} feature={car.feature} />
                )}
            </ul>
        </>
    )
}

export default Garage;