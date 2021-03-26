import React, { useEffect, useRef, useState } from 'react'

const useClickOutside = <T extends HTMLDivElement> (initialVisible: boolean) => {
  const [ componentVisible, setComponentVisible ] =useState<boolean>(initialVisible)

  const myRef = useRef<T>(null)
  console.log(myRef.current)
  const handleDropdown = (e:KeyboardEvent) => {
    if (e.key === 'Escape') {
      setComponentVisible(false)
    }
  }

  const handleClickOutside = (e:MouseEvent) => {
    if (myRef.current === null) {
      return
    }
    if (myRef.current && !myRef.current!.contains(e.target as HTMLDivElement)) {
      setComponentVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleDropdown, true)
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('keydown', handleDropdown, true)
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref: myRef, componentVisible, setComponentVisible }
}

export default useClickOutside