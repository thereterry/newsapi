import React, { useEffect } from 'react'
import "./loader.css"


const Loader = () => {

  useEffect(()=>{
    document.querySelector("dialog").showModal()
  }, [  ])

  return (
    <dialog class="loader">Loading...</dialog>
  )
}

export default Loader