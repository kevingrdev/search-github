import { useEffect, useRef, useState } from 'react'

export const useNearScreen = () => {
  let observer
  const [show, setShow] = useState(false)
  const elementRef = useRef(null)
  useEffect(() => {
    Promise.resolve()
    Promise.resolve(
      typeof IntersectionObserver !== undefined
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(callbackObserver, {
        rootMargin: '140px',
      })

      observer.observe(elementRef.current)
    })

    return () => observer.disconnect()
  }, [])

  function callbackObserver(entries, observer) {
    const { isIntersecting } = entries?.[0]
    if (isIntersecting) {
      setShow(true)
      observer.disconnect()
    }
  }

  return { isNearScreen: show, frontRefF: elementRef }
}
