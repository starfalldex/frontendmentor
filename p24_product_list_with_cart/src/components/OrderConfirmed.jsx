import ConfirmedCart from "./ConfirmedCart";

function OrderConfirmed(param) {

    function newOrder() {
        param.setConfirmOrder(false);
    }
    return <>
        <div className="w-[100vw] h-[100vh] 
                        absolute top-0 left-0 ">

            {/* backdrop */}
            <div onClick={newOrder}
                className="bg-black w-[100vw] h-[100vh] 
                        fixed top-0 left-0 
                        opacity-[30%] ">
            </div>

            <div className="bg-white w-[90%] md:w-[500px] p-[2rem]
                          fixed top-[50%] left-[50%]
                          translate-x-[-50%] translate-y-[-50%] 
                          rounded-2xl shadow-2xl shadow-gray-700">

                <div> <img src="assets/icons/icon-order-confirmed.svg" alt="confirmed" /> </div>
                <div className="my-[1rem]">
                    <p className="my-[0.5rem] text-3xl font-bold">Order Placed! </p>
                    <p className="text-md text-[#FCF8F5">We hope you enjoy your dessert!</p>
                </div>
                <div className="bg-[#FCF8F4] my-[2rem] rounded-xl ">
                    <div className="">

                        <div className="max-h-[40vh] px-[1.5rem] overflow-y-scroll hide-scroll">
                            {param.orderFinal.map((item, i) => {
                                return (<ConfirmedCart
                                    key={i}
                                    name={item.name}
                                    count={item.count}
                                    price={item.price}
                                    totalPrice={item.itemTotalPrice}
                                    image={item.image.thumbnail} />
                                )
                            })}
                        </div>

                        <div className="h-[6rem] px-[1.5rem] flex justify-between items-center">
                            <p className="text-yellow-900">Total Price</p>
                            <p className="text-red-950 font-bold text-4xl"> ${param.orderPrice}</p>
                        </div>
                    </div>
                </div>

                <button onClick={newOrder}
                    className="bg-orange-500 w-[100%] py-[1em] 
                               text-white text-lg 
                                  rounded-full">New Order</button>
            </div>
        </div>
    </>
}

export default OrderConfirmed



