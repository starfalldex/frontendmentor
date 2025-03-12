function CardTopNews(p) {
    return (

        <div className="w-[100%] flex bg-amber-100 rounded-xl
                        sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-8px)] ">

            <div className="w-1/3 h-[100%]">
                <img className="h-[100%] object-cover rounded-xl" src={`images/${p.topNewsData.image}`} alt="" />
            </div>

            <div className="px-4 w-2/3">
                <p className="text-[#F25B59] text-3xl font-bold">{p.topNewsData.number}</p>
                <p className="my-2 text-xl font-bold">{p.topNewsData.heading}</p>
                <p>{p.topNewsData.body}</p>
            </div>
        </div>

    )
}

export default CardTopNews