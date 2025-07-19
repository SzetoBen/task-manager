import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  newTask: {
    fontSize: 20,
    color: "#007BFF",
  },
  footer: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    borderColor: "#ddd",
    borderWidth: 1,
    marginRight: 10,
  },
  taskItem: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    width: "100%",
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  taskLeft: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    flexShrink: 1,
  },
  taskText: {
    fontSize: 18,
    color: "#555",
  },
  completedTaskText: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
  showCompletedText: {
    fontSize: 18,
    color: "#007BFF",
    fontWeight: "500",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
});
