function CardCart(param) {

    function removeCartCart() {
        param.setDeleteItem(param.data.name);
    }
    return (
        <div className="py-[1em] border-b border-[#d1b6af]
                          flex justify-between ">
            <div >
                <p className="text-red-950 font-semibold">{param.data.name}</p>
                <div className="flex gap-4">
                    <p className="text-amber-600 font-semibold">{param.noOfItem}x</p>
                    <p className="text-yellow-900 font-light">@{param.data.price}</p>
                    <p className="text-yellow-900 font-semibold">${param.data.price * param.noOfItem}</p>
                </div>
            </div>
            <div className="flex items-center">
                <div onClick={removeCartCart}
                     className="btn p-[0.2em] border-2 border-[#c4a49d] rounded-full aspect-square" >
                    <img src="assets/icons/icon-remove-item.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default CardCart