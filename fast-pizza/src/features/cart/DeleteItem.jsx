import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  function handleClick() {
    console.log("CLICK");
    dispatch(deleteItem(pizzaId));
  }
  return (
    <div>
      <Button onClick={handleClick} type="small">
        Delete
      </Button>
    </div>
  );
}

export default DeleteItem;
