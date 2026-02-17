function ButtonComponent(){
    return(
        <button>click</button>
    )
}
function ProductItem() {
    // console.log(props);
    return <div>
      <p>product 1</p>
      <ButtonComponent/>
    </div>
}
export default ProductItem;