'use client'

import { useState } from "react"


export const Sample = () => {
  const [flag, setFlag] = useState(false)

  const handleClick = () => {
    setFlag(!flag)
  }

  if (!flag) {
    return (
      <>
      <p>aaaaa</p>
      <button onClick={handleClick}>click</button>
      </>

    )
  }
  return (
    <p>bbbbb</p>
  )
}
