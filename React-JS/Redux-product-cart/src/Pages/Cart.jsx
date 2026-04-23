import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
function Cart() {
    const dispatch = useDispatch();
    const {items} = useSelector((state)=>state.cart);
    // total
    const totalAmount = items.reduce((total, item) =>{
      return total + Math.floor(item.price * 92);
    },0)
    function handleRemoveFromcart(){
       dispatch(removeFromCart(item.id))

    }
  return (
    <div>
      <div className=" w-[800px] mx-auto mt-10">
        <h1 className="text-xl font-bold">Shopping Cart</h1>
        {items.map((item)=>(
            <div className="mt-10 border p-4 rounded-md bg-white shadow-sm hover:shadow-lg ">
                <div className="flex gap-8 items-center">
                    <img src={item.image} className="h-28 w-28 object-contain" alt="" />
                   <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-sm my-2  text-neutral-600 line-clamp-1">{item.description}</p>
                    <p className="font-semibold text-lg my-2">₹{Math.floor( item.price * 92)}</p>
                    <div className="flex gap-5">
                      <button onClick={()=>dispatch(removeFromCart(item.id))} className=" border font-semibold hover:shadow-lg hover:bg-neutral-200 px-4 py-2 rounded-lg ">Remove🗑️</button>
                      <button className=" border font-semibold hover:shadow-lg hover:bg-neutral-200 px-4 py-2 rounded-lg ">Save for later⬇️</button>
                    </div>
                   </div>
                </div>
            </div>
        ))}
      </div>
       <div className="w-[800px] mx-auto mt-5 border p-4 rounded-md bg-white shadow-sm hover:shadow-lg ">
                  <div className="flex justify-between">
                    <h2 className="text-2xl font-semibold">Total: ₹{totalAmount}/-</h2>
                    <button className="bg-yellow-300 px-6 rounded-md font-bold hover:bg-yellow-400">Place order</button>
                  </div>
                </div>
    </div>
  )
}

export default Cart
