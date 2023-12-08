import React, { useEffect } from 'react'





const Loader = () => {

  useEffect(()=>{
    document.querySelector("dialog").showModal()
  })

  return (
    <dialog className="loader">Loader...</dialog>
  )
}

export default Loader