import { StyleSheet, Text, View } from "react-native";
import { styled } from "styled-components/native";

const SafeArea = styled.View`
  flex: 1;
`;
export const DetailScreen = () => {
  return (
    <>
      <SafeArea>
        <View style={styles.searchContainer}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={styles.listContainer}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </SafeArea>
    </>
  );
};
const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "#5e2750",
    justifyContent: "center",
    padding: 16,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "#dd4814",
    alignItems: "center",
  },
});
