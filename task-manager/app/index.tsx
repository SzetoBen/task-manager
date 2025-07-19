import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Checkbox } from "expo-checkbox";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles";

type ToDoType = {
  id: number;
  title: string;
  completed: boolean;
};

type ToDoItemProps = {
  todo: ToDoType;
  onToggleComplete: () => void;
  onDelete: () => void;
};

const ToDoItem = ({ todo, onToggleComplete, onDelete }: ToDoItemProps) => (
  <View style={styles.taskItem}>
    <View style={styles.taskLeft}>
      <Checkbox
        value={todo.completed}
        onValueChange={onToggleComplete}
      />
      <Text style={todo.completed ? styles.completedTaskText : styles.taskText}>
        {todo.title}
      </Text>
    </View>
    <TouchableOpacity onPress={onDelete}>
      <Ionicons name="trash" size={24} color="red" />
    </TouchableOpacity>
  </View>
);

export default function Index() {
  const [todoItems, setTodoItems] = useState<ToDoType[]>([
    { id: 1, title: "Math homework", completed: false },
    { id: 2, title: "Workout", completed: true },
    { id: 3, title: "Read a book", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  // Add Task
  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTodoItems([
      ...todoItems,
      {
        id: Date.now(),
        title: newTask,
        completed: false,
      },
    ]);
    setNewTask("");
  };

  // Toggle Complete
  const handleToggleComplete = (id: number) => {
    setTodoItems(todoItems.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  // Delete Task
  const handleDeleteTask = (id: number) => {
    setTodoItems(todoItems.filter(item => item.id !== id));
  };

  // Filtered tasks for display
  const displayedTasks = showCompleted
    ? todoItems // show all tasks
    : todoItems.filter(item => !item.completed); // default: show only non-completed tasks

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Task Manager</Text>
        <TouchableOpacity onPress={() => setShowCompleted(!showCompleted)}>
          <Text style={styles.showCompletedText}>
            {showCompleted ? "Hide Completed" : "Show Completed"}
          </Text>
        </TouchableOpacity>
      </View>
      {displayedTasks.length === 0 ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 20, color: "#aaa" }}>No tasks to display</Text>
        </View>
      ) : (
        <FlatList 
          data={displayedTasks}
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => (
            <ToDoItem
              todo={item}
              onToggleComplete={() => handleToggleComplete(item.id)}
              onDelete={() => handleDeleteTask(item.id)}
            />
          )} 
        />
      )}
      <KeyboardAvoidingView style={styles.footer} behavior="padding" keyboardVerticalOffset={10}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          placeholderTextColor="#aaa"
          value={newTask}
          onChangeText={setNewTask}
          onSubmitEditing={handleAddTask}
          returnKeyType="done"
        />
        <TouchableOpacity onPress={handleAddTask}>
          <Ionicons name="add-circle" size={40} color="#007BFF" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}