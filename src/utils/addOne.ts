interface Calc {
  value: number
}

/**
 * @param {number} params
 * @return {number} */
export default function addOne(params: number): number {
  const calc: Calc = {
    value: 123,
  }
  return params + 1 + calc.value
}
