import { useEffect, useState } from "react";
import ButtonConfirm from "./ButtonConfirm";
import CardCart from "./CardCart";
import EmptyCart from "./EmptyCart";

function Cart(param) {
	const [itemCounts, setItemCounts] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	const lengthCart = param.noOfItems.length;
	//recalculate totalprice on cart item change
	useEffect(() => {
		let tempPrice = 0;
		lengthCart != 0 && param.noOfItems.forEach((elm) => {
			param.data.forEach((e) => {
				if (elm.name == e.name) {
					tempPrice += e.price * elm.count;
				}
			})
		})
		setTotalPrice(tempPrice);
		setItemCounts(lengthCart);
	}, [param.noOfItems, lengthCart, param.data])

	// bg-white w-[90%] p-8 fixed top-[50%] left-[50%]
	// translate-x-[-50%] translate-y-[-50%] 
	// rounded-xl shadow-2xl shadow-gray-700
	// md:w-[100%] md:static md:translate-0 md:top-0 md:left-0 md:shadow-none
	// xl:w-[90%]
	return (
		<div className="bg-white p-8 rounded-xl md:fixed ">
			<p className="text-[#BE3B11] text-3xl font-bold">Your Cart ({itemCounts})</p>

			{lengthCart === 0 && <EmptyCart />}
			{param.noOfItems.length != 0 && param.noOfItems.map((elm, i) => {
				const currentData = param.data.find((e) => {
					return (
						elm.name == e.name
					)
				})
				if (currentData) {
					return (<CardCart key={i}
						data={currentData}
						noOfItem={elm.count}
						setDeleteItem={param.setDeleteItem} />);
				}
			})}

			{lengthCart !== 0 && <>
				<div className="py-[2em] ">
					<div className="mb-[2em] flex justify-between">
						<p className="text-yellow-900">Order Total</p>
						<p className="text-red-950 font-bold text-4xl"> ${totalPrice}</p>
					</div>
					<div className="bg-[#FCF8F5] py-[1em] rounded-lg 
                        flex justify-center items-center gap-2">
						<img src="assets/icons/icon-carbon-neutral.svg" alt="" />
						<p className="text-yellow-900" >This is a <span className="font-semibold">carbon-neutral</span> delivery</p>
					</div>
				</div>
				<ButtonConfirm
					setConfirmOrder={param.setConfirmOrder}
					setCartItemCount={param.setCartItemCount} />
			</>
			}
		</div>
	);
}

export default Cart;
