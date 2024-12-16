import { StyleSheet, View, Text } from "react-native";
import styled from "styled-components/native";

const GB = styled.View`
  width: 200px;
  height: 200px;
  background-color: conic-gradient(
    from 0deg,
    #546778,
    #542175,
    #286435,
    #532183,
    #354218,
    #813793,
    #999999,
    #553388
  );
`;
export const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <GB />
      <View style={styles.borderGradiant} />
      <Text style={styles.textStyle}>
        उस कल्प का चयन की ए, जो ती सरे पद से उसी का र संबं त है, स का र सरा पद
        पहले पद से और छठा पद पाँ चवें पद से संबं त है। 6 : 136 :: 8 : ? :: 12 :
        568 Ans 1. 288 2. 284 3. 248 4. 244
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    backgroundColor: "black",
    color: "white",
    margin: 20,
    padding: 20,
    border: "red",
    borderColor: "red",
    borderWidth: 5,
    borderRadius: 10,
    width: 200,
    height: 200,
  },
  borderGradiant: {
    backgroundColor: "pink",
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 20,
    borderStartColor: "red",
    borderEndColor: "green",
    borderBottomColor: "blue",
    borderBlockColor: "yellow",
  },
});
