import './App.css'
import useDarkMode from "use-dark-mode";
import Sandbox from './views/sandbox/Sandbox';

/**
 * @returns Root component
 */
export default function App() {
  const darkMode = useDarkMode(false);


  return (
    <>
      <main className={`${darkMode.value ? 'dark' : ''} text-foreground bg-background`}>
        <Sandbox />
      </main>
    </>
  )
}