import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { Button, Linking, Modal, Pressable, Text, View } from "react-native";
import styles from "./BarCodeScanner.styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IProductsSliceState,
  searchByBarCode,
} from "../../../store/productsSlice";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../../store/store";

const BarCodeScanner = () => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [modalVisible, setModalVisible] = useState(false);
  const [found, setFound] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((s: RootState) => s.stock.filtredProducts);
  const nav = useNavigation();

  if (permission && !permission.granted) {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        {permission.canAskAgain ? (
          <Button title="Autoriser la caméra" onPress={requestPermission} />
        ) : (
          <Button
            title="Ouvrir les réglages"
            onPress={() => Linking.openSettings()}
          />
        )}
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text>BarCodeScanner</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {products.length === 1
                ? `Article trouvé !`
                : `Article non trouvé !`}
            </Text>
            {products.length === 1 && (
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {
                  nav.navigate("store");
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Voir l'article</Text>
              </Pressable>
            )}

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Annuler</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <CameraView
        style={styles.cam}
        facing={facing}
        barcodeScannerSettings={{
          barcodeTypes: ["ean8", "ean13", "upc_a", "upc_e"],
        }}
        onBarcodeScanned={({ type, data }) => {
          setModalVisible(true);
          setFound(data);
          dispatch(searchByBarCode(found));
        }}
      />
    </View>
  );
};

export default BarCodeScanner;
