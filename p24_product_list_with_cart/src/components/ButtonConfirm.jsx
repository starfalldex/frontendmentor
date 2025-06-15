function ButtonConfirm(param) {
    function placeOrder() {
        // if (confirm("Are you sure")) {

        var finalOrder = [];
        param.cartItemCount.length != 0 && param.cartItemCount.map((elm, i) => {
            const currentData = param.data.find((e) => {
                return (
                    elm.name == e.name
                )
            })
            currentData.count = elm.count;
            currentData.itemTotalPrice = elm.count * currentData.price;
            finalOrder.push(currentData);
        })

        param.setOderFinal(finalOrder)
        param.setOrderPrice(param.totalPrice);
        param.setConfirmOrder(true);
        param.setCartItemCount([]);
        // }
    }

    return (
        <>
            <button onClick={placeOrder}
                className="bg-orange-700 w-full py-[0.8em] rounded-full 
                            text-xl text-white font-semibold">
                Confirm Order
            </button>
        </>
    )
}

export default ButtonConfirm
