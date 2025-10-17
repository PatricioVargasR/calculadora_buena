"use client"
import { useState } from "react"

export default function Home() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [resultado, setResultado] = useState(null)

  const sumar = () => setResultado(Number(a) + Number(b))
  const restar = () => setResultado(Number(a) - Number(b))
  const multiplicar = () => setResultado(Number(a) * Number(b))
  const dividir = () => setResultado(Number(b) !== 0 ? Number(a) / Number(b) : "Error")

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Calculadora</h1>
      <input value={a} onChange={(e) => setA(e.target.value)} placeholder="Número A" />
      <input value={b} onChange={(e) => setB(e.target.value)} placeholder="Número B" />
      <div style={{ marginTop: "10px" }}>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={multiplicar}>*</button>
        <button onClick={dividir}>/</button>
      </div>
      {resultado !== null && <h2>Resultado: {resultado}</h2>}
    </div>
  )
}
