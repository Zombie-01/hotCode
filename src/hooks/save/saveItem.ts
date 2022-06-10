import { useEffect } from 'react';
import { Item, saveItem } from 'stores/save'; //saveItem from save.dispatcher
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'stores';

const useItem = (): Item => {
  const dispatch = useDispatch();
  const item = useSelector((state: RootState) => state.item);
  // dispatch хийгдэнэ
  useEffect(() => {
    if (!item.userId) {
      dispatch(saveItem(1));
    }
  }, []);
  return item;
};

export default useItem;