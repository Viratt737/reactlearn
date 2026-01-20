import ProductItem from "./components/productitem";
const dummpProduct = ['product 1', 'product 2', 'product 3'];
function ProductList(){
    return(
        <div>
            <h3>ECommerce Project</h3>
            {/* <ProductItem/> */}

            <ul>
                {
                    dummpProduct.map((item , index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>

    )
}
export default ProductList;