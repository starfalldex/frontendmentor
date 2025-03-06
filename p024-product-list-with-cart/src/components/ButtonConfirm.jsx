
function ButtonConfirm(param) {
    function placeOrder() {
        if (confirm("Are you sure")) {
            param.setConfirmOrder(true);
            param.setCartItemCount([]);
        }
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
