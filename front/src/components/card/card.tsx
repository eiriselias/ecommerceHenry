import IProduct  from "@/types/IProduct";


const Card: React.FC <IProduct> = ({ name, price, description, image, stock })=>{
    
    return(
        <div>
            <h2>{name}</h2>
            <img src={image} alt={`imagen del producto ${name}`}/>
            <p>{description}</p>
            <p>precio: {price} </p>
            <p>disponibles: {stock}</p>
        </div>
    )
}

export default Card;