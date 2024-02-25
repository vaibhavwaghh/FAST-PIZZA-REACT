import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  /**FETCHER.FORM WILL NOT NAVIGATE AWAY FROM THE PAGE
   * 1] SUBMIT THE FORM
   * 2] REVALIDATE PAGE */
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  console.log("UPDATE");
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
export default UpdateOrder;
