import React, { useEffect, useState } from 'react'

export default function Counter({ time, value }) {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        if (value !== currentValue) {
            setTimeout(() => {
                setCurrentValue(currentValue + 5)
            }, time)
        }
        return
    }, [currentValue])

    return (
        <>{currentValue}</>
    )
}
