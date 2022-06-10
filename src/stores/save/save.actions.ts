export const SAVED_ITEM = 'SAVED_ITEM';

export interface Item {
    id: number,
    userId: number,
    title: string,
    body: string,
    cost: number,
    date: number,
    url: string
}

export interface SavedItemAction {
    type: typeof SAVED_ITEM,
    item: Item
}

export type SavedActions = SavedItemAction;

export const savedItems = (item: Item): SavedItemAction => ({
  type: SAVED_ITEM,
  item
});