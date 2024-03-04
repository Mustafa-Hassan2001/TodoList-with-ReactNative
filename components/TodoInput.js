import {useState} from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';


const TodoInput = (props) => {
const [enteredtodoText, setenteredtodoText] = useState('');

 function enterTodotext(enterdtext){
    setenteredtodoText(enterdtext);
  }

  function onPress(){
    props.onTodoAdded(enteredtodoText);
    setenteredtodoText('');
  }

  return(
    <View style = {styles.flexForTodo}>
        <TextInput style={styles.textInput} onChangeText={enterTodotext} value={enteredtodoText} placeholder= 'Add your Todo'></TextInput>
        <Button title="Add Todo" color={'blue'} onPress ={onPress} />
      </View>
  );
}

export default TodoInput

const styles = StyleSheet.create({
    flexForTodo: {
    flexDirection: 'row',     //change flex direction by default coluum
    justifyContent: 'space-between',  //to apply space b/w content
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#cccccc',
    paddingBottom: 20,
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 3,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 6,
    padding: 6,
    borderRadius: 200,
    fontSize: 16,
    color: 'blue',
    paddingLeft: 20,
  },
});
