import React from 'react'
import Header from '../Components/shared/Header'
import Footer from '../Components/shared/Footer'

const withHeaderFooter = (App) => {
  return (props) => {
    return (
      <>
        <Header />
        <App />
        <Footer />
      </>
    )
  }
}

export default withHeaderFooter
