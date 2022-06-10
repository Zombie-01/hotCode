export const SAVED_ITEM = 'SAVED_ITEM';

export interface Item {
    item: []
}

export interface SavedItemAction {
    type: typeof SAVED_ITEM,
    item: Item
}

export type SavedActions = SavedItemAction;

export const savedItems = (item: Item): SavedItemAction => ({
  type: SAVED_ITEM,
  item: item
});