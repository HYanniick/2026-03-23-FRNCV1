import React, { useState } from "react";
import { Alert, View } from "react-native";
import { useDispatch } from "react-redux";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import ProductEditor from "../components/ui/ProductEditor/ProductEditor";
import { emptyProduct, type IProduct } from "../interfaces/IProducts";
import type { RootStackParamList } from "../navigation/types";
import { saveProductAPI } from "../store/productsSlice";
import type { AppDispatch } from "../store/store";

type Props = NativeStackScreenProps<RootStackParamList, "productEditor">;

const ProductEditorScreen = ({ navigation, route }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isSaving, setIsSaving] = useState(false);
  const product = route.params?.product ?? emptyProduct;

  const handleSave = async (nextProduct: IProduct) => {
    try {
      setIsSaving(true);
      await dispatch(saveProductAPI(nextProduct)).unwrap();
      navigation.goBack();
    } catch (error) {
      Alert.alert("Enregistrement impossible", "Le produit n'a pas pu être sauvegardé.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ProductEditor
        product={product}
        onProductSaved={handleSave}
        onCancel={() => navigation.goBack()}
        isSaving={isSaving}
      />
    </View>
  );
};

export default ProductEditorScreen;
