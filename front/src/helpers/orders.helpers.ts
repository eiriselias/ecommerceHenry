const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function createOrders (products:number[], token:string){
    try{
        const res = await fetch(`http://localhost:3030/orders`, {
            method:"POST",
            headers:{
                "Content-type": "application/json",
                Authorization: token
            },
            body: JSON.stringify({products})
        })

        const orders = await res.json();
        return orders;
        
    } catch (error: any){
        throw Error(error)
        
    }
    
}

export async function getOrders (token:string){
    try{
        const res = await fetch(`http://localhost:3030/users/orders`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: token
            }
        })

        const orders = await res.json();
        return orders;
        
    } catch (error: any){
        throw new Error(error)
        
    }
    
}