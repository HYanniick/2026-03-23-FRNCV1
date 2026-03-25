export type RootStackParamList = {
  home: undefined;
  store: undefined;
  cart: undefined;
  cam: undefined;
  scan: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
