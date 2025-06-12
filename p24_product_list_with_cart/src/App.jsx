import "./App.css"
import Card from "./components/Card";
import Cart from "./components/Cart";
import OrderConfirmed from "./components/OrderConfirmed";
import data from "./assets/data.json";
import { useState } from "react";

function App() {

    const [cartItemCount, setCartItemCount] = useState([]);
    const [deleteItem, setDeleteItem] = useState("");
    const [confirmOrder, setConfirmOrder] = useState(false);
    const [orderFinal, setOderFinal] = useState([]);
    const [orderPrice, setOrderPrice] = useState(0);

    return (
        <>
            <div className={` bg-red-50  h-[100vh] ${confirmOrder ? "overflow-hidden" : "overflow-y-scroll"}`}>

                <div className="py-8 flex flex-col gap-8 items-center
                              md:py-12 md:px-6 md:flex-row md:gap-12 md:items-start">
                    <div className="w-[95%] md:w-[65%]">
                        <p className="text-red-950 text-6xl mb-8 text-center font-bold">Desserts</p>
                        <div className="flex gap-4 flex-wrap justify-center
                                    md:gap-8">
                            {/* all desert card */}
                            {data.map((item, i) => {
                                return (
                                    <Card
                                        key={i}
                                        image={item.image.desktop}
                                        name={item.name}
                                        category={item.category}
                                        price={item.price.toFixed(2)}
                                        cartItem={cartItemCount}
                                        setCartItem={setCartItemCount}
                                        deleteItem={deleteItem}
                                        setDeleteItem={setDeleteItem}
                                        confirmOrder={confirmOrder}
                                    />)
                            })}
                        </div>
                    </div>

                    {/* Cart */}
                    <div className="w-[85%] md:w-[35%]">
                        {<Cart data={data}
                            cartItemCount={cartItemCount}
                            setDeleteItem={setDeleteItem}
                            setConfirmOrder={setConfirmOrder}
                            setCartItemCount={setCartItemCount}
                            setOderFinal={setOderFinal}
                            setOrderPrice={setOrderPrice}
                        />
                        }
                    </div>
                </div>

                {/* when confirmed order */}
                {confirmOrder &&
                    <OrderConfirmed
                        orderFinal={orderFinal}
                        setOderFinal={setOderFinal}
                        orderPrice={orderPrice}
                        setOrderPrice={setOrderPrice}
                        setConfirmOrder={setConfirmOrder}
                    />
                }
            </div>
        </>
    );
}

export default App;
