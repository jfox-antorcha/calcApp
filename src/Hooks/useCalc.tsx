import { useRef, useState } from 'react'

enum Operators {
  sum, rest, multiply, divide, percentage
}

const useCalc = () => {
  const [input, setInput] = useState('0')
  const [lastResult, setLastResult] = useState('')
  const [operator, setOperator] = useState('')

  const lastOperation = useRef<Operators>()

  const onPressResetInput = () => {
    if(input === '0') setLastResult('0')
    setInput('0')
    setOperator('')
  }

  const buildInput = ( char: string ) => {

    if(input.length > 18) return
    if(input.includes('.') && char === '.') return
    if(input.startsWith('0') || input.startsWith('-0')) {
      if(char === '.') setInput(input + char)
      if(char === '0' && input.includes('.')) setInput(input + char)
      if(char !== '0' && !input.includes('.')) setInput(char)
      if(char === '0' && !input.includes('.')) return
    } else {
      setInput(input + char)
    }
    
  }

  const onPressChangePosNeg = () => {
    (input.includes('-'))
      ? setInput( input.replace('-', ''))
      : setInput( '-' + input)
  }

  const onChangeLastResult = () => {
    if(input.endsWith('.')) setLastResult(input.slice(0,-1))
    setLastResult(input)
    setInput('0')
  }

  const onPressPercentage = () => {
    onChangeLastResult()
    setOperator('%')
    lastOperation.current = Operators.percentage
  }

  const onPressDivide = () => {
    onChangeLastResult()
    setOperator('÷')
    lastOperation.current = Operators.divide
  }

  const onPressMultiply = () => {
    onChangeLastResult()
    setOperator('X')
    lastOperation.current = Operators.multiply
  }

  const onPressRest = () => {
    onChangeLastResult()
    setOperator('-')
    lastOperation.current = Operators.rest
  }

  const onPressSum = () => {
    onChangeLastResult()
    setOperator('+')
    lastOperation.current = Operators.sum
  }

  const onPressEqual = () => {
    const result = calc();
    (result === 'NaN' || lastResult === '0') 
      ? setInput('0')
      : setInput(result)
    setLastResult('0');
    setOperator('')
  }

  const calc = () => {
    const x = Number(input)
    const y = Number(lastResult)

    switch ( lastOperation.current ) {
      case Operators.sum:
        return `${x + y}`

      case Operators.rest:
        return `${y - x}`

      case Operators.multiply:
        return `${x * y}`
      
      case Operators.divide:
        return `${y / x}`

      case Operators.percentage:
        return `${y * (x / 100)}`

      default:
        return '0'
    }
  }

  return { 
    input,
    lastResult,
    onPressResetInput,
    buildInput,
    onPressChangePosNeg,
    onPressDivide,
    onPressMultiply,
    onPressRest,
    onPressSum,
    onPressEqual,
    onPressPercentage,
    operator
  }
}

export default useCalc