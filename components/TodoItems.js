import {StyleSheet, Text, Pressable} from "react-native";

const todoItem = (props) => {
  
  function deleteHandler(){
    props.onDelete(props.id)
  }

  return(
    <Pressable onPress={deleteHandler}>
      <Text style={styles.todo}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
   todo: {
    borderWidth: 1,
    borderColor: '#cccccc',
    marginVertical: 5,
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 200,
    fontSize: 20,
  }
})


export default todoItem;