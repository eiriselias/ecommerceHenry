import IProduct  from "@/types/IProduct";
import styles from "./card.module.css"
import Image from "next/image";

const Card: React.FC <IProduct> = ({ name, price, description, image, stock })=>{

    return(
        <div className={`shadow-ps relative ${styles.container}`}>
            <div className="w-full h-2/5 relative text-center cursor-pointer">
                <h2 className="bg-green-400 p-2 uppercase">{name}</h2>
                <Image 
                    className="mt-10"
                    src={image} 
                    alt={name} 
                    fill={true}
                />
            </div>
            <div className="p-4 mt-7">
                <p className="h-4 scroll-auto">{description}</p>
                <div className="flex items-center">
                    <div className="absolute left-4 bottom-1">
                        <p className="font-bold mt-2">precio: {price} </p>
                        <p className="font-bold">disponibles: {stock}</p>
                    </div>
                    <div className="self-end absolute right-4 bottom-3 cursor-pointer">
                        <Image 
                            src="./cartAdd.svg"
                            alt="agregar al carrito"
                            width={30}
                            height={30}
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Card;