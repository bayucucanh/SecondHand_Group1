import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import ProfileReducer from './ProfileReducer';
import HomeReducer from './HomeReducer';
import GlobalReducers from './GlobalReducer';
import DetailReducer from './DetailReducer';
import AllBidReducer from './AllBidReducer';
import SellReducer from './SellReducer';
import SellerProductListReducer from './SellerProductListReducer';
import SellerOrderReducer from './SellerOrder';
import NotificationReducer from './NotificationReducer';
import HistoryReducer from './HistoryReducer';
import WishlistReducer from './WishlistReducer';

const AllReducers = combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
  profile: ProfileReducer,
  home: HomeReducer,
  global: GlobalReducers,
  detail: DetailReducer,
  allBid: AllBidReducer,
  sellerProduct: SellerProductListReducer,
  sell: SellReducer,
  sellerOrder: SellerOrderReducer,
  notifications: NotificationReducer,
  history: HistoryReducer,
  wishlist: WishlistReducer,
});

export default AllReducers;
