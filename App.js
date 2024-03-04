import {useState} from 'react';
import { FlatList, StyleSheet,View, Button,TextInput } from 'react-native';
import TodoItem from './components/TodoItems';
import TodoInput from './components/TodoInput';


export default function App() {

  const [todolist, settodolist] = useState([])

 
  function addtodotext(enteredtodoText){
    if(enteredtodoText != ""){
      settodolist([...todolist, {text: enteredtodoText, id: Math.random().toString()}]);
    }
  }

  function deleteHandler(id){
    setTodoList(todolist.filter(todo => todo.id != id))
  }


  return (
    //topic-1
    // <View style={styles.container}>
    //     <Text style={styles.myText}> hello world</Text>
    //     <Text style={styles.myText}> hello world</Text>
    //     <Button title="Submit" />
    // </View>
    // topic-2
    <View style = {styles.container}>
      <TodoInput onTodoAdded={addtodotext} />
      <FlatList style={styles.todolist} data={todolist} renderItem={(todoItem) => {  //flatview is more optimize than scroll view 
        return(
          // <Text style={styles.todo}>{todoItem.item.text}</Text>
          <TodoItem text={todoItem.item.text} id={todoItem.item.id} onDelete={deleteHandler}/>
        );
      }} keyExtractor = {(item , index) => {
        return(
          item.id
        );
      }} />
    </View>
    // <View style = {styles.container}>
    //   <View>
    //   <Text style={{width: 100, flex: 1, height: 100, backgroundColor: 'orange'}}>1</Text>
    //   </View>
    //   <View>
    //   <Text style ={{width: 100, flex: 1, height: 100, backgroundColor: 'blue'}}>2</Text>
    //   </View>
    //   <View>
    //   <Text style ={{width: 100, flex: 1, height: 100, backgroundColor: 'green'}}>3</Text>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   backgroundColor: '#ecf0f1',
  //   alignItems: "center",
  // }, 
  // myText: {
  //     margin: 10, 
  //     borderWidth: 2, 
  //     borderColor: 'red', 
  //     padding:10
  //   }
  //topic-2
  container:{
    padding: 20
  },
  // flexForTodo: {
  //   flexDirection: 'row',     //change flex direction by default coluum
  //   justifyContent: 'space-between',  //to apply space b/w content
  //   alignItems: 'center',
  //   borderBottomWidth: 2,
  //   borderBottomColor: '#cccccc',
  //   paddingBottom: 20,
  //   marginBottom: 10,
  // },
  // textInput: {
  //   borderWidth: 3,
  //   borderColor: '#cccccc',
  //   width: '80%',
  //   marginRight: 6,
  //   padding: 6,
  //   borderRadius: 200,
  //   fontSize: 16,
  //   color: 'blue',
  //   paddingLeft: 20,
  // },

  // container: {
  //   // flex properties
  //   flexDirection: 'row',
  //   // flexDirection: 'column-reverse'
  //   // justifyContent: 'space-between',
  //   // justifyContent: 'space-around'
  //   // justifyContent: 'space-evenly'
  //   justifyContent: 'center', //flex start is default property
  //   height: 400,
  //   alignItems: 'cebter',
  //   borderWidth: 2, 
  //   borderColor: 'red',
//  }
  todolist:{
    height: '85%'  
  },
  // todo: {
  //   borderWidth: 1,
  //   borderColor: '#cccccc',
  //   marginVertical: 5,
  //   padding: 10,
  //   textAlign: 'center',
  //   backgroundColor: 'blue',
  //   color: 'white',
  //   borderRadius: 200,
  //   fontSize: 20,
  // }
});
