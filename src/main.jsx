import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Error boundary for better error handling
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log error for debugging purposes
    // In production, you might want to send this to an error reporting service
    // eslint-disable-next-line no-console
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-ff-slate-50 dark:bg-ff-slate-900 text-ff-slate-800 dark:text-ff-slate-200">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-ff-red-600 dark:text-ff-red-400 mb-4">
              Something went wrong
            </h1>
            <p className="text-ff-slate-600 dark:text-ff-slate-400 mb-4">
              Please refresh the page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-ff-red-500 text-white rounded-lg hover:bg-ff-red-600 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Debug logging
console.log('Main.jsx loaded successfully')
console.log('Root element:', document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
