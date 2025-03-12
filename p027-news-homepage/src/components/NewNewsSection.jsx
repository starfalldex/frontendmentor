import CardNewNews from "./CardNewNews"

function NewNewsSection() {

    const newNewsData = [
        {
            heading: "Hydrogen VS Electric Cars",
            body: "Will hydrogen-fueled cars ever catch up to EVs?"
        },
        {
            heading: "The Downsides of AI Artistry",
            body: "What are the possible adverse effects of on-demand AI image generation?"
        },
        {
            heading: "Is VC Funding Drying Up?",
            body: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
        }, {
            heading: "Hydrogen VS Electric Cars",
            body: "Will hydrogen-fueled cars ever catch up to EVs?"
        },
        {
            heading: "The Downsides of AI Artistry",
            body: "What are the possible adverse effects of on-demand AI image generation?"
        },
        {
            heading: "Is VC Funding Drying Up?",
            body: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
        }

    ]

    return (
        <div className="bg-[#00001A] rounded-xl">
            <p className="mb-4 p-4 text-[#EBB14F] text-4xl font-bold">New</p>
            <div className="h-[400px] text-white px-4 overflow-y-scroll">

                {newNewsData.map((elm, i) => {
                    return (<CardNewNews
                        key={i}
                        newNewsData={elm}
                    />)
                })}

            </div>
        </div>
    )
}

export default NewNewsSection