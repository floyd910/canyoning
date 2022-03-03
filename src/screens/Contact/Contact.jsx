import React from 'react'
import Header from '../../components/Header/Header'
import "./Contact.css"
const Contact = () => {
  return (
      <>
    <Header />
   <div className="contact_wrapper">
    <p>Send us an email</p>
    <a href="mailto:ajaracanyoning@gmail.com">ajaracanyoning@gmail.com</a>
   </div>
   </>
  )
}

export default Contact