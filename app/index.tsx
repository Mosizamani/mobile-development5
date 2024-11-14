import { ActivityIndicator, Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAPI } from "../hooks/useAPI";

export function Calender() {

    const {fetchPictures, loading, error, data } = useAPI()

    return (
        <SafeAreaView>
            <Text>Calender goes here</Text>
            {loading ? <ActivityIndicator /> : <View><Text>This is a cat picture</Text></View>}
            {error && <Text style={{color: 'red'}}>{error}</Text>}
            <Button title="Get a cat picture" onPress={fetchPictures}/>
        </SafeAreaView>
    )
}