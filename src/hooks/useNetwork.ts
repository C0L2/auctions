import { useEffect } from 'react'
import { signal } from '@preact/signals-react'

export const useNetwork = () => {
  const isOnline = signal(navigator.onLine)

  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      isOnline.value = navigator.onLine
    }
    // Listen to the online status
    window.addEventListener('online', handleStatusChange)

    // Listen to the offline status
    window.addEventListener('offline', handleStatusChange)

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener('online', handleStatusChange)
      window.removeEventListener('offline', handleStatusChange)
    }
  }, [isOnline])

  return { isOnline }
}
