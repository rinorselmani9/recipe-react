import React from 'react'
import Header from '../Components/shared/Header'
import Footer from '../Components/shared/Footer'

const withHeaderFooter = (App) => {
  return (props) => {
    return (
      <div>
        <Header />
        <App />
        <Footer />
      </div>
    )
  }
}

export default withHeaderFooter
