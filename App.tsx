import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface IGoals {
  [key: string]: {
    text: string;
  };
}

export default function App() {
  const [inputText, setInputText] = useState<string>("");
  const [goals, setGoals] = useState<IGoals>({});

  const onInputTextChange = (text: string) => setInputText(text);

  const addGoal = () => {
    if (inputText === "") return;

    setGoals((curr) => ({
      ...curr,
      [Date.now()]: {
        text: inputText,
      },
    }));
    setInputText("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={inputText}
          onChangeText={onInputTextChange}
          onSubmitEditing={addGoal}
          style={styles.input}
          placeholder="Write your goal."
        />
        <Button title="Add" onPress={addGoal} />
      </View>
      <FlatList
        data={Object.keys(goals)}
        renderItem={(itemData) => {
          const { item: goalKey } = itemData;
          return (
            <View style={styles.goal}>
              <Text style={styles.goalText}>{goals[goalKey].text}</Text>
            </View>
          );
        }}
        keyExtractor={(goalKey) => goalKey}
        style={styles.goalListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 40,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  goalListContainer: {
    marginTop: 50,
  },
  goal: {
    backgroundColor: "teal",
    padding: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  goalText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
