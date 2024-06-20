import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import CustomTab from './src/component/customTab';

const App = () => {
  const [isEditPage, setIsEditPage] = useState(false);
  const [section, setSection] = useState(0);

  const dataTab = [
    {id: 1, name: 'Tab 1'},
    {id: 2, name: 'Tab 2'},
    {id: 3, name: 'Tab 3'},
  ];

  return (
    <View style={styles.container}>
      <>
        <Button
          title="Toggle Edit Page"
          onPress={() => setIsEditPage(!isEditPage)}
        />
        <>
          {isEditPage ? (
            <Text style={styles.editText}>Edit Page Content</Text>
          ) : (
            <CustomTab data={dataTab} section={section} onPress={setSection} />
          )}
        </>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  editText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default App;
