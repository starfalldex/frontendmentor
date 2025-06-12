import { useEffect, useState } from "react"

function ButtonCart(param) {
    const [cartCounterDisplay, setCartCounterDisplay] = useState(false);

    function resetItem() {
        param.setItemCount(0);
        setCartCounterDisplay(false);
        param.cardOutline(false);
    }
    function addToCart() {
        param.cardOutline(true);
        setCartCounterDisplay(true);
        increaseItemCount();
    }
    function increaseItemCount() {
        if (param.itemCount < 10) {
            param.setItemCount(param.itemCount + 1);
        }
    }
    function decreaseItemCount() {
        param.setItemCount(param.itemCount - 1);
        if (param.itemCount <= 1) {
            resetItem();
        }
    }
    useEffect(() => {
        if (param.deleteItem == param.name) {
            resetItem();
            param.setDeleteItem("")
        }
    }, [param.deleteItem])

    useEffect(() => {
        if (param.confirmOrder == true) {
            resetItem();
        }
    }, [param.confirmOrder])
 
    return (
        <>
            {!cartCounterDisplay && <button onClick={addToCart}
                className="bg-white w-[10em] h-[3em] 
                            flex gap-2 justify-center items-center
                            border-[2px] border-orange-700 rounded-full 
                            scale-75 sm:scale-100
                            ">
                <img className="w-[1.6em] " src="assets/icons/icon-add-to-cart.svg" alt="" />
                <p className="font-semibold text-nowrap">Add to Cart</p>
            </button>}

            {cartCounterDisplay && <div
                className="bg-orange-700 w-[10em] h-[3em] 
                flex gap-2 justify-around items-center
                border border-orange-700 rounded-full 
                scale-75 sm:scale-100
                ">

                {/* - */}
                <button onClick={decreaseItemCount}
                    className="p-[0.3em] aspect-square border-2 border-gray-200 rounded-full">
                    <img src="assets/icons/icon-decrement-quantity.svg" alt="" />
                </button>
                <p className="text-white font-semibold"> {param.itemCount} </p>

                {/* + */}
                <button onClick={increaseItemCount}
                    className="p-[0.3em] aspect-square border-2 border-gray-200 rounded-full">
                    <img src="assets/icons/icon-increment-quantity.svg" alt="" />
                </button>
            </div>}
        </>
    )
}

export default ButtonCart