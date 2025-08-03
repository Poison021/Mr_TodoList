import { TodoProvider } from "./Context/TodoContext";
import TodoList from "./Component/TodoList";
import { motion } from "framer-motion";

export default function App() {
  return (
    <TodoProvider>
      <div
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/img/dota4.jpg")' }}
      >
        <motion.img
          src="./img/axe.png"
          alt="جنگجو"
          initial={{ x: -300, opacity: 0, rotate: 0 }}
          animate={{ x: -150, opacity: 1, rotate: [0, 2, -3, 0] }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="hidden md:block w-3xl  h-auto  top-10 left-10 select-none pointer-events-none fixed z-20"
          draggable={false}
        />

        <div className="z-10 fixed top-40">
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}
