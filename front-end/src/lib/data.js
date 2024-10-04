const url="http://localhost:1234/product/get"
export async function fetchProducts(){
try {
    const res= await fetch(url)
    const data=await res.json()
    console.log('data is',data)
    return data?.products;
} catch (error) {
    console.log(error)
}
}