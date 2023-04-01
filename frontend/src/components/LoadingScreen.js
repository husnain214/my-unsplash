import { forwardRef, useImperativeHandle, useRef } from 'react'
import './LoadingScreen.css'
import PropTypes from 'prop-types'

const LoadingScreen = forwardRef(({handleAnimationEnd}, ref) => {
  const loadingScreenRef = useRef()

  useImperativeHandle(ref, () => ({
    fadeOut: () => {
      loadingScreenRef.current.classList.add('fadeOut')
    }
  }))

  return (
    <div onAnimationEnd = {handleAnimationEnd} className='loader | flex justify-content-center align-items-center' ref={loadingScreenRef}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  )
})

LoadingScreen.displayName = 'LoaderScreen'
LoadingScreen.propTypes = {
  handleAnimationEnd: PropTypes.func.isRequired
}

export default LoadingScreen