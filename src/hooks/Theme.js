import { useEffect, useState } from "react";
import "react-toggle/style.css"
import Toggle from "react-toggle";

const DarkToggle = () => {

    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        if(isDark) {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }, [isDark]);

    return (
    <Toggle
        className="DarkToggle"
        checked={isDark}
        onChange= {e => setIsDark(e.target.checked)}
        icons={{ checked: "🌙", unchecked: "🔆" }}
        aria-label="Dark mode"
    />
    );
};



export default DarkToggle;