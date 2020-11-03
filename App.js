import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { BottomNavigation, Button } from "react-native-paper/lib/module";
import NativeForms, { NativeFormsModal } from "native-forms";

const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "normal",
      title: "Fullscreen",
      icon: "fullscreen",
    },
    {
      key: "modal",
      title: "Modal",
      icon: "eye",
    },
  ]);

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={BottomNavigation.SceneMap({
        normal: () => (
          <NativeForms form="https://my.nativeforms.com/I2Z5xWPmZic4JlRvpmNy0Db" />
        ),
        modal: () => {
          const [hasForm, showForm] = useState(false);
          return (
            <View style={styles.container}>
              <Button onPress={() => showForm(true)} color="#20f">
                Show Form
              </Button>
              <NativeFormsModal
                visible={hasForm}
                form="https://my.nativeforms.com/I2Z5xWPmZic4JlRvpmNy0Db"
                onClose={() => showForm(false)}
              />
            </View>
          );
        },
      })}
      barStyle={{ backgroundColor: "#2200ff" }}
      style={{ paddingTop: 32 }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
