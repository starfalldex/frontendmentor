import { useEffect, useState } from "react";
import ButtonConfirm from "./ButtonConfirm";
import CardCart from "./CardCart";
import EmptyCart from "./EmptyCart";

function Cart(param) {
	const [itemCounts, setItemCounts] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	const lengthCart = param.cartItemCount.length;
	//recalculate totalprice on cart item change
	useEffect(() => {
		let tempPrice = 0;
		lengthCart != 0 && param.cartItemCount.forEach((elm) => {
			param.data.forEach((e) => {
				if (elm.name == e.name) {
					tempPrice += e.price * elm.count;
				}
			})
		})
		setTotalPrice(tempPrice);
		setItemCounts(lengthCart);
	}, [param.cartItemCount, lengthCart, param.data])

	return (
		<div className="bg-white p-8 overflow-y-scroll 
						md:w-[400px] md:max-w-[30%] md:max-h-[80vh] md:p-4 md:fixed lg:p-8 
		 				rounded-xl hide-scroll">
			<p className="pb-4 text-[#BE3B11] text-3xl font-bold ">Cart ({itemCounts})</p>

			{lengthCart === 0 && <EmptyCart />}
			<div className="bg-[#FCF8F4] max-h-[30vh] px-2 overflow-y-scroll 
							md:max-h-[35vh] rounded-lg hide-scroll">
				{param.cartItemCount.length != 0 && param.cartItemCount.map((elm, i) => {
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
			</div>

			{lengthCart !== 0 && <>
				<div className="py-[2em] md:py-4 xl:py-8">
					<div className="mb-[2em] flex justify-between
									md:mb-2 lg:mb-[2em]">
						<p className="text-yellow-900">Order Total</p>
						<p className="text-red-950 font-bold text-4xl"> ${totalPrice}</p>
					</div>
					<div className="bg-[#FCF8F5] py-[1em] rounded-lg 
                        flex justify-center items-center gap-2
						md:py-2 xl:py-[1em]">
						<img src="assets/icons/icon-carbon-neutral.svg" alt="" />
						<p className="text-yellow-900" >This is a <span className="font-semibold">carbon-neutral</span> delivery</p>
					</div>
				</div>
				<ButtonConfirm
					setConfirmOrder={param.setConfirmOrder}
					setCartItemCount={param.setCartItemCount}
					setOrderPrice={param.setOrderPrice}

					cartItemCount={param.cartItemCount}
					data={param.data}
					totalPrice={totalPrice}

					setOderFinal={param.setOderFinal} />
			</>
			}
		</div>
	);
}

export default Cart;
