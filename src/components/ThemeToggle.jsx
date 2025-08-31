import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils.js';
export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() =>{
        const savedTheme = localStorage.getItem("theme");
        if(savedTheme === "dark"){
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }else{
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    },[])

    function toggleTheme() {
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
            localStorage.setItem("theme", "light");
        }else{
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
            localStorage.setItem("theme", "dark");
        }
    }

    return(
        <>
          <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
               "focous:outline-hidden"
              )}>
              {isDarkMode ?  <Sun  className="h-6 w-6 text-yellow-500"/> : <Moon className="h-6 w-6 text-blue-500"/>}
          </button>
        </>
    )
}