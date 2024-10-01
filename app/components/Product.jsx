export default async function Product() {

    const url = 'https://fakestoreapi.com/products/3';

    let res = await fetch(url);
    const data = await res.json();

    console.log(data)
    return (<div>
        <h1 className="text-3xl">{data.title}</h1>
    </div>)
}