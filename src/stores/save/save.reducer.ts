import { Item, SavedItemAction, SAVED_ITEM} from './save.actions';

type ItemState = Item;

const initialState: ItemState = {
    id: 0,
  userId: 0,
  title: '',
  body: '',
  cost: 0,
  date: 0,
  url: ''
};

export default (
  state: ItemState = initialState,
  action: SavedItemAction
): ItemState => {
  switch (action.type) {
  case SAVED_ITEM: {
    const {
      item: {
        id,
        userId,
        title,
        body,
        cost,
        date,
        url
        
      }
    } =action;

    return {
      id,
      userId,
      title,
      body,
      cost,
      date,
      url
    };
  }

  default:
    return state;
  }
};