import { Item, SavedItemAction, SAVED_ITEM} from './save.actions';

type ItemState = Item;

const initialState: ItemState = {
  name: '',
  id: 0,
  text: '',
  cost: 0,
  date: 0
};

export default (
  state: ItemState = initialState,
  action: SavedItemAction
): ItemState => {
  switch (action.type) {
  case SAVED_ITEM: {
    const {
      item: {
        name,
        id,
        text,
        cost,
        date
      }
    } =action;

    return {
      name,
      id,
      text,
      cost,
      date
    };
  }

  default:
    return state;
  }
};