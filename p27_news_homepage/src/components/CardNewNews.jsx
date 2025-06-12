function CardNewNews(param) {
  return (
    <div className="mt-4 pb-6 border-b border-gray-600">
      <p className="mb-2 font-semibold hover:text-[#EBB14F] clickable">{param.newNewsData.heading}</p>
      <p className=" text-gray-400 text-sm">{param.newNewsData.body}</p>
    </div>
  )
}

export default CardNewNews