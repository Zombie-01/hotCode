import { useEffect } from 'react';
import { Item } from 'stores/save'; //saveItem from save.dispatcher
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'stores';

const saveItem = (): Item => {
  const dispatch = useDispatch();
  const item = useSelector((state: RootState) => state.item);
  // dispatch хийгдэнэ
  return item;
};

export default saveItem;