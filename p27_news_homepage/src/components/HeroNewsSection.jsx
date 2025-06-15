function HeroNewsSection() {
    return (
        <>
            <div className="mb-6">
                <img className="object-cover w-[100%] max-h-[480px] rounded-xl" src="images/image-web-3-desktop.jpg" alt="" />
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:w-1/2  font-bold text-6xl">The Bright Future of Web 3.0?</div>
                <div className="w-full sm:w-1/2 ">
                    <p className="text-gray-600 mb-6"> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?
                    </p>
                    <button className="bg-[#F25B59] px-[2rem] py-4 rounded-xl
                                        font-bold uppercase tracking-[0.25em]">Read More</button>
                </div>
            </div>
        </>
    )
}

export default HeroNewsSection