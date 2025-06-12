import ButtonCart from "./ButtonCart";
import { useState, useEffect } from "react"

function Card(param) {

  const [cardOutline, setCardOutline] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    let newcart = [];

    if (param.cartItem.length === 0) {
      
      if (itemCount != 0) {
        newcart = [{ name: param.name, count: itemCount }]
      }
    } else {
      const isfound = param.cartItem.some((elm) => (elm.name === param.name))

      if (isfound && itemCount == 0) { // remove from cart when item count = 0
        newcart = param.cartItem.filter((elm) => (elm.name != param.name))
      } else if (isfound && itemCount != 0) {
        newcart = param.cartItem.map((elm) => {
          if (elm.name == param.name) {
            return ({ ...elm, count: itemCount })
          }
          return (elm)
        });
      } else {
        newcart = [...param.cartItem, { name: param.name, count: itemCount }]
      }
    }
    param.setCartItem(newcart)
  }, [itemCount])

  return (
    <>
      <div className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[280px] xl:w-[300px]">
        <div className={`relative aspect-square rounded-xl
                          ${cardOutline ? "outline-[3px]" : "outline-0"} outline-orange-700`}>
          <img className="w-[100%] h-[100%] rounded-xl"
            src={param.image} alt="waffle" />
          <div className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%]">
            <ButtonCart cardOutline={setCardOutline}
              name={param.name}
              itemCount={itemCount}
              setItemCount={setItemCount}
              cartItemCount={param.cartItemCount}
              deleteItem={param.deleteItem}
              setDeleteItem={param.setDeleteItem}
              confirmOrder={param.confirmOrder}
            />
          </div>
        </div>
        <div className="card-detail pt-8 leading-snug ">
          <p className="text-yellow-900 text-lg opacity-60 ">{param.category}</p>
          <p className="text-red-950  text-xl font-bold">{param.name}</p>
          <p className="text-amber-600 text-lg font-semibold">$ {param.price}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
