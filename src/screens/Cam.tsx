import { View } from "react-native";
import BarCodeScanner from "../components/functionnals/BarCodeScanner/BarCodeScanner";

const Cam = () => {
    return (
        <View style={{
            flex: 1,
        }}>
            <BarCodeScanner />
        </View>
    )
}

export default Cam;