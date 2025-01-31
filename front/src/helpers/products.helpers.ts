import IProduct from "@/types/IProduct";

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function getProducts (): Promise<IProduct[]> {
    try{
    
        const res = await fetch(`${APIURL}/products`,{
            next: {revalidate: 1200}
        })
        const products: IProduct[] = await res.json()

        return products
    } catch (error: any){
        throw new Error(error)
        
    }
    
}

export async function getProductById (id: string): Promise<IProduct> {
    try{
        const products: IProduct[] = await getProducts();
        const productFiltered = products.find((product)=> product.id.toString() === id)

        if(!productFiltered) throw new Error("producto no encontrado")

        return productFiltered;

    } catch (error:any){
        throw new Error(error)
        
    }
}