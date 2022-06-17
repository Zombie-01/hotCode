import { Item, SavedItemAction, SAVED_ITEM} from './save.actions';

type ItemState = Item;

const initialState: ItemState = {
  item: []
};

export default (
  state: ItemState = initialState,
  action: SavedItemAction
): ItemState => {
  switch (action.type) {
  case SAVED_ITEM: {
    const item= action.item;
      
    return item;
  }

  default:
    return state;
  }
};