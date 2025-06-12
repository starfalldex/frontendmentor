import CardTopNews from "./CardTopNews"

function TopNewsSection() {
    const topNewsData = [
        {   
            number: "01",
            heading: "Reviving Retro PCs",
            body: "What happens when old PCs are given modern upgrades?",
            image: "image-retro-pcs.jpg"
        }, {
            number: "02",
            heading: "Top 10 Laptops of 2022",
            body: "Our best picks for various needs and budgets.",
            image: "image-top-laptops.jpg"
        }, {
            number: "03",
            heading: "The Growth of Gaming",
            body: "How the pandemic has sparked fresh opportunities.",
            image: "image-gaming-growth.jpg"
        } ,
        , {
            number: "04",
            heading: "The Growth of Gaming",
            body: "How the pandemic has sparked fresh opportunities.",
            image: "image-gaming-growth.jpg"
        } , {   
            number: "05",
            heading: "Reviving Retro PCs",
            body: "What happens when old PCs are given modern upgrades?",
            image: "image-retro-pcs.jpg"
        }, {
            number: "06",
            heading: "Top 10 Laptops of 2022",
            body: "Our best picks for various needs and budgets.",
            image: "image-top-laptops.jpg"
        }
    ]

    return (
        <div className="h-[60vh] flex flex-col gap-2 overflow-y-scroll
                         sm:flex-row sm:flex-wrap sm:justify-between sm:h-fit">
            {topNewsData.map((elm, i) => {
                return (
                    <CardTopNews
                        key={i}
                        topNewsData={elm}
                    />)
            })}
        </div>
    )
}

export default TopNewsSection