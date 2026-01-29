'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

interface DecryptedTextProps {
  text: string
  speed?: number
  maxIterations?: number
  characters?: string
  className?: string
  parentClassName?: string
  encryptedClassName?: string
  animateOn?: 'view' | 'hover'
  revealDirection?: 'start' | 'end' | 'center'
  onAnimationComplete?: () => void
}

const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 50,
  maxIterations = 10,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = 'text-white/50',
  animateOn = 'view',
  revealDirection = 'start',
  onAnimationComplete
}) => {
  const [displayText, setDisplayText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLSpanElement>(null)
  const animationRef = useRef<number | null>(null)

  const getRandomChar = useCallback(() => {
    return characters[Math.floor(Math.random() * characters.length)]
  }, [characters])

  const animate = useCallback(() => {
    let iteration = 0
    const totalLength = text.length

    const step = () => {
      if (iteration >= maxIterations + totalLength) {
        setDisplayText(text)
        setIsAnimating(false)
        onAnimationComplete?.()
        return
      }

      setDisplayText(prev => {
        return text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '

            let revealIndex: number
            if (revealDirection === 'start') {
              revealIndex = index
            } else if (revealDirection === 'end') {
              revealIndex = totalLength - 1 - index
            } else {
              const middle = Math.floor(totalLength / 2)
              revealIndex = Math.abs(middle - index)
            }

            if (iteration > revealIndex + maxIterations) {
              return char
            }
            return getRandomChar()
          })
          .join('')
      })

      iteration++
      animationRef.current = requestAnimationFrame(() => {
        setTimeout(step, speed)
      })
    }

    step()
  }, [
    text,
    speed,
    maxIterations,
    getRandomChar,
    revealDirection,
    onAnimationComplete
  ])

  useEffect(() => {
    if (animateOn !== 'view') return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          setIsAnimating(true)
          animate()
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [animate, animateOn, hasAnimated])

  useEffect(() => {
    if (animateOn === 'hover' && isHovering && !isAnimating) {
      setIsAnimating(true)
      animate()
    }
  }, [animate, animateOn, isHovering, isAnimating])

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    if (animateOn === 'hover') {
      setIsHovering(true)
    }
  }

  const handleMouseLeave = () => {
    if (animateOn === 'hover') {
      setIsHovering(false)
    }
  }

  return (
    <span
      ref={containerRef}
      className={parentClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText.split('').map((char, index) => {
        const isRevealed = char === text[index]
        return (
          <span
            key={index}
            className={
              isRevealed ? className : `${className} ${encryptedClassName}`
            }
          >
            {char}
          </span>
        )
      })}
    </span>
  )
}

export default DecryptedText
