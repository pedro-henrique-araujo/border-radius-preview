import React, { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const borderRadiusTarget = useRef<HTMLDivElement>(null)
  const [borderTopLeftRadius, setBorderTopLeftRadius] = useState<string>('15')
  const [borderTopRightRadius, setBorderTopRightRadius] = useState<string>('15')
  const [borderBottomLeftRadius, setBorderBottomLeftRadius] = useState<string>('15')
  const [borderBottomRightRadius, setBorderBottomRightRadius] = useState<string>('15')

  useEffect(() => {
    borderRadiusTarget.current?.style.setProperty('border-top-left-radius', `${borderTopLeftRadius}px`)
  }, [borderTopLeftRadius])

  useEffect(() => {
    borderRadiusTarget.current?.style.setProperty('border-top-right-radius', `${borderTopRightRadius}px`)
  }, [borderTopRightRadius])

  useEffect(() => {
    borderRadiusTarget.current?.style.setProperty('border-bottom-left-radius', `${borderBottomLeftRadius}px`)
  }, [borderBottomLeftRadius])

  useEffect(() => {
    borderRadiusTarget.current?.style.setProperty('border-bottom-right-radius', `${borderBottomRightRadius}px`)
  }, [borderBottomRightRadius])
 

  return (
    <div>
      <h1>Border Radius Preview</h1>
      <main id="content">
        <div className="top left">
          <input 
            className="text-align-right"
            value={borderTopLeftRadius}
            type="number"
            onChange={event => setBorderTopLeftRadius(event.target.value)} />
        </div>
        <div className="top right">
          <input            
            value={borderTopRightRadius} 
            type="number"
            onChange={event => setBorderTopRightRadius(event.target.value)}/>
        </div>
        <div className="center">
          <div ref={borderRadiusTarget} id="border-radius-target"></div>
        </div>
        <div className="bottom left">
          <input 
            className="text-align-right" 
            value={borderBottomLeftRadius}
            type="number"
            onChange={event => setBorderBottomLeftRadius(event.target.value)} />
        </div>
        <div className="bottom right">
          <input
            value={borderBottomRightRadius} 
            type="number"
            onChange={event => setBorderBottomRightRadius(event.target.value)}/>
        </div>
      </main>     
    </div>
  )
}

export default App
