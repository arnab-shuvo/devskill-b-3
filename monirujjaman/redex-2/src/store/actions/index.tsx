import { ProductType } from "../../utilities/ProductType";
import ActionType from "../action_types";

interface GetAllProductAction {
  type: ActionType.GETALLPRODUCT;
  payload: ProductType[];
}

interface GetProductAction {
  type: ActionType.GETPRODUCT;
  payload: Number
}

interface InsertAction {
  type: ActionType.INSERT;
  payload: ProductType;
}

interface UpdateAction {
  type: ActionType.UPDATE;
  payload: ProductType;
}

interface DeleteAction {
  type: ActionType.DELETE;
  payload: Number;
}

type Action =
  | GetAllProductAction
  | GetProductAction
  | InsertAction
  | UpdateAction
  | DeleteAction;

export default Action;
