import LocalStorage from './local-storage';
import QueryStrings from './query-strings';

export default {
  ...new QueryStrings(),
  ...new LocalStorage(),
};