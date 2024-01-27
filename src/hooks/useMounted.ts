import { useState } from 'react'
import { useMount } from 'react-use'

export function useMounted() {
  const [mounted, setMounted] = useState(false)
  useMount(() => setMounted(true))
  return mounted
}
