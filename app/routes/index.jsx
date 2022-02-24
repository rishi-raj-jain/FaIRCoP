import { useRef, useState } from 'react'

const Home = () => {
  const vidRef = useRef(null)
  const [play, setPlay] = useState(false)
  const handleButtonVideo = () => {
    if (play) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
    setPlay(!play)
  }
  return (
    <div className="mt-10 flex flex-col items-start">
      <h1 className="text-6xl md:text-8xl font-extrabold leading-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
        FaIRCoP
      </h1>
      <h1 className="text-xl md:text-4xl md:max-w-2xl text-gray-600 font-light break-all break-words">
        Facial Image Retrieval using Contrastive Personalization
      </h1>
      <div className="mt-10 relative w-full md:max-w-2xl">
        <video controls ref={vidRef} width={1280} height={720} className="mx-auto" preload="none" poster="/static/Thumbnail.jpg">
          <source type="video/mp4" src="https://a.storyblok.com/f/117912/x/2177eea698/faircop.mp4" />
        </video>
        <div className="absolute w-full transform -translate-y-1/2 flex flex-col items-center justify-end">
          <button
            onClick={() => {
              handleButtonVideo()
            }}
            className="flex items-center bg-white rounded-full font-medium group p-4 shadow-lg"
          >
            {play ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                <path d="M10 17l6-5-6-5z" />
              </svg>
            )}
            <span className="ml-3">{!play ? 'Play the full video (3:07 min)' : 'Pause'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home

export function ErrorBoundary({ error }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  )
}
