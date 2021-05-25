import React from 'react'
import { useFonts } from 'expo-font'

export default function Fonts({ children }: { children: React.ReactNode }) {
  const [loaded] = useFonts({
    // 🚨🚨🚨 the name (`sans`) of the default weight here should equal the key from theme.customFonts!
    // otherwise, you will need to explicitly set the fontWeight everywhere
    // since we have theme.customFonts.sans, we name this `sans`
    ['andaleMono']: require('./andaleMono.ttf'),
    
  })

  if (!loaded) return null

  return <>{children}</>
}