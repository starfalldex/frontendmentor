
function EmptyCart() {
    return (
        <div className="flex flex-col items-center">
            <img className="w-[50%]" src="assets/icons/illustration-empty-cart.svg" alt="" />
            <p className="text-[#9c827c] text-lg font-semibold">Your added items will appear here</p>
        </div>
    )
}

export default EmptyCart