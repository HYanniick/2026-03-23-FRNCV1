import { useNavigation } from "@react-navigation/native";
import { Button, Image, Text, View } from "react-native"
import { StyleSheet } from "react-native";

const Home = () => {
    const nav = useNavigation();
    return (
        <View style={styles.main}>
            <Text style={styles.titre}>Bienvenue</Text>
            <Image source={require("../../assets/trolley.png")} style={styles.image} />
            <Button title="Accéder au magasin" onPress={() => {
                nav.navigate("store");
            }} />
        </View>
    )
}

export default Home;


const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    titre: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
});
