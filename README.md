# task-manager

## Overview
Simple React Native app for managing daily tasks. You can add, complete, and delete tasks.

## Features
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Toggle between showing only incomplete tasks and all tasks
- Responsive and user-friendly interface

## Setup & Running

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the development server**
   ```bash
   npm start
   ```
   or, if using Expo:
   ```bash
   npx expo start
   ```

3. **Run on your device or emulator**
   - For iOS: Press `i` in the terminal or use the Expo Go app.
   - For Android: Press `a` in the terminal or use the Expo Go app.

## Special Instructions
- Tap "Show Completed" to view all tasks (including completed ones). Tap "Hide Completed" to view only incomplete tasks.
- To add a task, type in the input field and press the "+" button or the return key.
- Tap the checkbox to mark a task as completed.
- Tap the trash icon to delete a task.

## Future Improvements
- Persist tasks using AsyncStorage so your list is saved between app sessions.
- Add task editing functionality.
- Add due dates and reminders.