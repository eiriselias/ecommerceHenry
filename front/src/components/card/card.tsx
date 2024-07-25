import IProduct  from "@/types/IProduct";
import styles from "./card.module.css"


const Card: React.FC <IProduct> = ({ name, price, description, image, stock })=>{
    
    return(
        <div className={`shadow-ps relative ${styles.container}`}>
            <div className="w-full text-center">
                <h2 className="bg-green-400 p-2 uppercase">{name}</h2>
                <img src={image} alt={`imagen del producto ${name}`}/>
            </div>
            <div className="p-4">
                <p className="h-4 scroll-auto">{description}</p>
                <div className="flex items-center">
                    <div className="absolute left-4 bottom-4">
                        <p className="font-bold mt-2">precio: {price} </p>
                        <p className="font-bold">disponibles: {stock}</p>
                    </div>
                    <div className="self-end absolute right-4 bottom-4">
                        img carrito
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    )
}

export default Card;