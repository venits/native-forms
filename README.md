# NativeForms.com

Build **forms, surveys and polls** for React Native apps.
Product comes up with [dashboard](link_to_screenshot), form editor, templates and email notifications :)


## 1. Installation
```js
yarn add native-forms
```
## 2. Basic Usage

```js
<NativeForms  
  form="https://my.nativeforms.com/sWO3UzYt0mcvZWPmZyZkRkZxUXTy0Db"  
/>
```
<blockquote>
  This code will display fullscreen form in your application.
</blockquote>

## 3. Full Example

Basic flow of **NativeForms** in application.

```js
import React, {useState} from 'react';  
import {Button, StyleSheet, Text, View} from 'react-native';  
import NativeForms from 'native-forms';  
  
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
	      form="https://my.nativeforms.com/sWO3UzYt0mcvZWPmZyZkRkZxUXTy0Db"  
	      onClose={hide}  
	     />
	   )}
	 </View>  
  );
};  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: '#fff',  
    alignItems: 'center',  
    justifyContent: 'center',  
  },
 });  
  
export default App;
```

## 4. Demo
![Demo](https://raw.githubusercontent.com/venits/react-native-map-clustering/master/demo.gif)

## 5. Props

| Name               | Type   | Required | Note                                                           |
|--------------------|--------|---------|----------------------------------------------------------------|
| form         | String   | Yes    | URL of **form** to display.       |
| onClose       | Function | No | Called when user decides to close the form.                                         |
| onSend   | Function | #FF5252 | Called when **completed** form was sent.                                   |

```js
<NativeForms  
  form="https://my.nativeforms.com/sWO3UzYt0mcvZWPmZyZkRkZxUXTy0Db"  
  onSend={() => console.log("Form completed")}  
  onClose={() => console.log("User cancels forms")}  
/>
```
	

## Support

In case of any questions  or problems, please contact me at:
[hello@nativeforms.com](mailto:tomasz.przybyl.it@gmail.com)
