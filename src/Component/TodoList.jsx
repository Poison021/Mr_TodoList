import { useState } from "react";
import { useTodos } from "../Context/TodoContext";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiTrash2, FiClipboard } from "react-icons/fi"; // آیکون‌ها

export default function TodoList() {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    addTodo(input.trim());
    setInput("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-900 rounded-xl shadow-lg space-y-6 text-gray-300">
      <h2 className="text-3xl font-extrabold text-center flex items-center justify-center gap-2 mb-4">
        <FiClipboard size={28} />
        لیست کارها
      </h2>

      <div className="flex gap-2 flex-col items-center md:flex-row">
        <input
          type="text"
          className="flex-grow text-center w-full  bg-gray-800 border border-gray-700 rounded px-3 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="کارهای مورد نظرت چیه؟"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        
        <button
          onClick={handleAdd}
          className="w-60 flex items-center   justify-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition "
        >
          <FiPlus size={20} />
          افزودن
        </button>
      </div>

      <ul className="space-y-3">
        <AnimatePresence>
          {todos.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              layout
              className="flex justify-between items-center border border-gray-700 px-4 py-3 rounded shadow-sm hover:shadow-md transition cursor-pointer bg-gray-800"
            >
              <span
                className={`flex-grow select-none ${
                  todo.completed ? "line-through text-gray-500" : "text-gray-200"
                }`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 ml-4 flex items-center"
                aria-label="حذف"
              >
                <FiTrash2 size={18} />
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
