import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  // const totalPizzaQuantity = useSelector((state) =>
  //   state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
  // );
  // const totalPriceOfEntireCart = useSelector((state) =>
  //   state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)
  // );
  const totalPizzaQuantity = useSelector(getTotalCartQuantity);
  const totalPriceOfEntireCart = useSelector(getTotalCartPrice);
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalPizzaQuantity} pizzas</span>
        <span>{formatCurrency(totalPriceOfEntireCart)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
