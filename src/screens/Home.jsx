import React from 'react';
import {useState} from 'react-native';
import { SafeAreaView, Button } from 'react-native';
import ToDoList from '../../Components/ToDoList';
import ToDoForm from '../../Components/ToDoForm';

function Home({navigation}) {

    const[tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog',
        'Study'
      ]);
    
    const addTask = (task) => {
      setTasks([...tasks, task]);
    };
    

    return(
        <>
            <SafeAreaView>
                <ToDoList tasks={tasks} />
                < ToDoForm onAdd={addTask}/>
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />

            </SafeAreaView>
        </>
    );
}

export default Home;