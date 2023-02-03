import { useEffect, useState } from "react";

export default function useTheme(property = '', defaultValue = '') {
    const [color, setColor] = useState(defaultValue)
    useEffect(() => {
        document.documentElement.style.setProperty(property, color)
    }, [color, property, setColor])
    return [color, setColor] as const
}