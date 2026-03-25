import type { IProduct } from "../interfaces/IProducts";

export type RootStackParamList = {
  home: undefined;
  store: undefined;
  cart: undefined;
  cam: undefined;
  scan: undefined;
  productEditor: { product?: IProduct } | undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
