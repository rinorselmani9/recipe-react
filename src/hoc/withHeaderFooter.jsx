import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const withHeaderFooter = (App) => {
    return(props) => {
        return (
            <div>
                <Header/>
                    <App/>
                <Footer/>
            </div>
          )
    }
  
}

export default withHeaderFooter