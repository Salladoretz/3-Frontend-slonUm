import React from 'react'
import './AppAlt.scss'
import Main from './features/main/Main'
import Benefits from './features/benefits/Benefits'
import Plan from './features/plan/Plan'
import Sertificate from './features/sertificate/Sertificate'
import PriceAndOrder from './features/priceAndOrder/PriceAndOrder'
import QA from './features/qa/QA'
import Subscribe from './features/subscribe/Subscribe'
import Footer from './features/footer/Footer'

function AppAlt() {
  return (
    <div className="AppAlt">
      <Main />
      <Benefits />
      <Plan />
      <Sertificate />
      <PriceAndOrder />
      <QA />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default AppAlt
