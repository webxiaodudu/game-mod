import { useState } from 'react'

export default function useChangeStep(){

    const [current, setCurrent] = useState(0)

    return {
        current,
        setCurrent
    } 

    
}