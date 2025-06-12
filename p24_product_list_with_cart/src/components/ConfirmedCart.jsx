
function ConfirmedCart(p) {
    return (
        <div className="h-[6rem] py-[1rem]
                                    flex items-center gap-3 
                                    border-b-2 border-[#8565653f]">
            <img className="rounded-lg h-[100%]"
                src={p.image} alt="" />
            <div className=" grow-1 flex flex-col">
                <p className="text-red-950 font-bold">{p.name}</p>
                <div className=" flex gap-3">
                    <p className="text-amber-600 font-semibold">{p.count}</p>
                    <p className="text-yellow-900 font-light">@${p.price}</p>
                </div>
            </div>
            <div className="text-red-950 font-semibold">${p.totalPrice}</div>
        </div>
    )
}

export default ConfirmedCart