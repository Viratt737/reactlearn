function ButtonComponent(){
    return(
        <button>click</button>
    )
}
function ProductItem() {
    return <div>
      <p>product 1</p>
      <ButtonComponent/>
    </div>
}
export default ProductItem;