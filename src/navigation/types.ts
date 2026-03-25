export type RootStackParamList = {
  home: undefined;
  store: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

