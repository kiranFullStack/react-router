import React from 'react'
import { useParams } from 'react-router-dom'

export default function Page2() {
  const { id } = useParams()
  return (
    <div>
      <h1>Page2</h1>
      <h1>{id}</h1>
    </div>
  )
}
