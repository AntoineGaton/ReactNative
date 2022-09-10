import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, TouchableWithoutFeedback, Image, Alert, SafeAreaView } from 'react-native';

export default function App() {
  //console.log("App Executed"); //ONLY USE THIS WHEN NEEDED TO DEBUG
  const handleClicked = () => console.log("Text Clicked!");
  const handlePressed = () => console.log("Image Clicked!");
  const handleTapped = () => Alert.alert("Button Clicked", "You have clicked on the button, thanks!",[
    {text: "Yes", onPress: () => console.log("Yes was chosen!")},
    {text: "No", onPress: () => console.log("No was chosen!")}
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handleClicked}>
        I love you Bianca!
      </Text>
      <TouchableWithoutFeedback onPress={handlePressed}>
        <Image source={{
          width: 200,
          height: 300,
          uri:"https://picsum.photos/200/300"}}/>
      </TouchableWithoutFeedback>
      <Button 
        color = "orange"
        title="Click Me" 
        onPress={handleTapped}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
