# [NativeForms.com](https://nativeforms.com)

## Build **forms, surveys and polls** for React Native apps.

### Why this product was created?

We created NativeForms to save you countless hours of boring development of forms. Our product offers advanced solutions to all your problems and let you focus on things that are really important in your app.

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Full Example](#full-example)
- [Demo](#demo)
- [Props](#props)
- [Live Preview](#live-preview)
- [Support](#support)

## Installation

```js
npm install native-forms --save
// or
yarn add native-forms
```

## Basic Usage

1. Import component.

```js
import NativeForms from "native-forms";
```

2. Use this component in your **render()** method.

```js
<NativeForms
  form="https://my.nativeforms.com/I2Z5xWPmZic4JlRvpmNy0Db"
  // or you can provide JSON format of form. Check props table for more info.
  // formJSON={ label: "Schedule a call", ... }
/>
```

Form is displayed **natively** and **is not a webview**. You can create your own forms [here](https://app.nativeforms.com).

## Full Example

Basic flow of **NativeForms** in your application.

```js
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import NativeForms from "native-forms";

const App = () => {
  const [hasForm, showForm] = useState(false);
  const show = () => showForm(true);
  const hide = () => showForm(false);

  return (
    <View style={styles.container}>
      <Text>NativeForms.com</Text>

      <Button title="Show Form" onPress={show} color="#20f" />

      {hasForm && (
        <NativeForms
          form="https://my.nativeforms.com/I2Z5xWPmZic4JlRvpmNy0Db"
          onClose={hide}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
```

Replace **form prop** with your form's address. You can create your own forms [here](https://app.nativeforms.com).

## Demo

![Demo](https://raw.githubusercontent.com/venits/native-forms/master/assets/demo.gif)

## Props

| Name          | Type     | Required | Note                                                                                                                                                                            |
| ------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **form**      | String   | **Yes**  | URL of **form** to display.                                                                                                                                                     |
| **formJSON**  | Object   | No       | You can use JSON format of form instead of _form URL_. You can get this format by clicking "Export Form to JSON" in dashboard. Can be used for [offline forms](#offline-forms). |
| **onClose**   | Function | No       | Called when user decides to close the form.                                                                                                                                     |
| **onSend**    | Function | No       | Called when user **completes** form.                                                                                                                                            |  |
| **email**     | String   | No       | Email of person that will complete form (it will be displayed in the admin panel).                                                                                              |
| **name**      | String   | No       | Name of person that will complete form.                                                                                                                                         |
| **extraData** | Object   | No       | Extra data fields that will be sent along with the completed form. This data will not be visible by users.                                                                      |

## Live Preview

Full code examples are available here:

1. [Codesandbox](https://codesandbox.io/embed/native-forms-web-p5k7u)
2. [Expo](https://expo.io/@venits/native-forms)
3. [Codepen](https://codepen.io/venits/pen/QWLOmMV)

## Support

In case of any questions or problems, please contact me at:
[hello@nativeforms.com](mailto:hello@nativeforms.com)

### Happy Coding 💖

### [NativeForms.com](https://nativeforms.com)
