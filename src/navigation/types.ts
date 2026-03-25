export type RootStackParamList = {
  home: undefined;
  store: undefined;
  cart: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
