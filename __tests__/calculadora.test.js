import { sumar, restar, multiplicar, dividir } from "../src/app/calculadora.js"

test("suma 2 + 3 = 5", () => {
  expect(sumar(2, 3)).toBe(5)
})

test("resta 5 - 2 = 3", () => {
  expect(restar(5, 2)).toBe(3)
})

test("multiplica 4 * 3 = 12", () => {
  expect(multiplicar(4, 3)).toBe(12)
})

test("divide 10 / 2 = 5", () => {
  expect(dividir(10, 2)).toBe(5)
})

test("divide entre 0 devuelve Error", () => {
  expect(dividir(10, 0)).toBe("Error")
})
