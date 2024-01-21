import React from "react"
import { useRef, useEffect } from "react"

const Cursor = () => {
    let cursor = useRef(null)
    useEffect(() => {
        document.addEventListener("mousemove", (event) => {
            const { clientX, clientY } = event
            const mouseX = clientX - cursor.current.clientWidth / 2
            const mouseY = clientY - cursor.current.clientHeight / 2
            cursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        })
    }, [])
  return (
    <div className="fixed w-20 h-20 rounded-[50%] z-20 overflow-hidden pointer-events-non mix-blend-difference bg-white cursor-none" ref={cursor} ></div>
  )
}

export default Cursor
