'use client'

import { useEffect, useState, useCallback } from 'react'

interface RotatingTextProps {
  words: string[]
  interval?: number
  className?: string
  animationDuration?: number
}

const RotatingText: React.FC<RotatingTextProps> = ({
  words,
  interval = 2000,
  className = '',
  animationDuration = 500,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<'in' | 'out'>('in')

  const rotateWord = useCallback(() => {
    setIsAnimating(true)
    setDirection('out')

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
      setDirection('in')

      setTimeout(() => {
        setIsAnimating(false)
      }, animationDuration)
    }, animationDuration)
  }, [words.length, animationDuration])

  useEffect(() => {
    const timer = setInterval(rotateWord, interval)
    return () => clearInterval(timer)
  }, [rotateWord, interval])

  const animationStyle = {
    display: 'inline-block',
    transition: `transform ${animationDuration}ms ease-in-out, opacity ${animationDuration}ms ease-in-out`,
    transform: direction === 'out' 
      ? 'translateY(-100%)' 
      : direction === 'in' && isAnimating 
        ? 'translateY(0)' 
        : 'translateY(0)',
    opacity: direction === 'out' ? 0 : 1,
  }

  const initialStyle = direction === 'in' && isAnimating ? {
    ...animationStyle,
    transform: 'translateY(0)',
  } : animationStyle

  return (
    <span 
      className="inline-block overflow-hidden align-bottom"
      style={{ verticalAlign: 'bottom' }}
    >
      <span 
        className={className}
        style={initialStyle}
      >
        {words[currentIndex]}
      </span>
    </span>
  )
}

export default RotatingText
