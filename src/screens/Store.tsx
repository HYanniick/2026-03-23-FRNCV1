import { ScrollView, View } from "react-native";
import Banner from "../components/ui/Banner/Banner";
import ProductsSearcher from "../components/functionnals/ProductsSearcher/ProductsSearcher.connected";
import ProductsListViewer from "../components/ui/ProductsListViewer/ProductsListViewer.connected";

type Props = {};

const Store = (props: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <ProductsSearcher />
      <ScrollView>
        <ProductsListViewer />
      </ScrollView>
    </View>
  );
};

export default Store;