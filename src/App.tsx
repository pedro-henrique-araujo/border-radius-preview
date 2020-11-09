import React, { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const borderRadiusTarget = useRef<HTMLDivElement>(null)
  const textareaElement = useRef<HTMLTextAreaElement>(null)
  const [copied, setCopied] = useState<boolean>(false)
  const [borderTopLeftRadius, setBorderTopLeftRadius] = useState<string>('15')
  const [borderTopRightRadius, setBorderTopRightRadius] = useState<string>('15')
  const [borderBottomLeftRadius, setBorderBottomLeftRadius] = useState<string>('15')
  const [borderBottomRightRadius, setBorderBottomRightRadius] = useState<string>('15')
  const [css, setCss] = useState<string>('')

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

  useEffect(() => {
    const cssValue = `div { \n  border-radius: ${borderTopLeftRadius}px ${borderTopRightRadius}px ${borderBottomRightRadius}px ${borderBottomLeftRadius}px \n}`
    setCss(cssValue)
    setCopied(false)
  }, [
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius
  ])

  function handleCopyToClipboardButtonClick() {
    textareaElement.current?.select()
    document.execCommand('copy')
    setCopied(true)
  }

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
          <div ref={borderRadiusTarget} id="border-radius-target">
            <textarea ref={textareaElement} readOnly cols={40} rows={5} value={css}></textarea>
            <button onClick={handleCopyToClipboardButtonClick}>{copied ? 'Copied' : 'Copy'}</button>
          </div>
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
