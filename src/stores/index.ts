import {
  createStore,
  compose,
  combineReducers,
  applyMiddleware,
  Action
} from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { getWindowProperty } from 'utils/browser';
import { user } from 'stores/user';
import { notifications } from 'stores/notifications';
import { pages } from 'stores/pages';
import { register } from 'stores/register';
import { item } from 'stores/save';

const reducers = combineReducers({
  user,
  notifications,
  pages,
  item,
  register
});

export type RootState = ReturnType<typeof reducers>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

const middleware = [applyMiddleware(thunk)];
const isDevMode = process.env.NODE_ENV === 'development';
const devtools = isDevMode && (getWindowProperty() as any).__REDUX_DEVTOOLS_EXTENSION__;

if (devtools) {
  middleware.push(devtools());
}

export default createStore(
  reducers,
  compose(...middleware)
);
