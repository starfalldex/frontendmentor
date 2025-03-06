
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
                    <p className="my-[0.5rem] text-3xl font-bold">Order Confirmed</p>
                    <p className="text-md text-[#FCF8F5">We hope out enjo you fiofd</p>
                </div>
                <div className="bg-[#FCF8F4] p-[1.5rem] my-[2rem] rounded-xl">
                    <div className="h-[6rem] py-[1rem]
                                    flex items-center gap-3 
                                    border-b-2 border-[#8565653f]">
                        <img className="rounded-lg h-[100%]"
                            src="assets/images/image-baklava-thumbnail.jpg" alt="" />
                        <div className=" grow-1 flex flex-col">
                            <p className="text-red-950 font-bold">Classic timr</p>
                            <div className=" flex gap-3">
                                <p className="text-amber-600 font-semibold">1</p>
                                <p className="text-yellow-900 font-light">@$45.55</p>
                            </div>
                        </div>
                        <div className="text-red-950 font-semibold">$5.50</div>
                    </div>

                    <div className="h-[6rem] flex justify-between items-center">
                        <p className="text-yellow-900">Order Total</p>
                        <p className="text-red-950 font-bold text-4xl"> 40$</p>
                    </div>
                </div>
                <button onClick={newOrder}
                    className="bg-orange-500 w-[100%] py-[1em] 
                               text-white text-lg 
                                  rounded-full">Start New Order</button>
            </div>
        </div>
    </>
}

export default OrderConfirmed



