import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import GenericNav from "../components/GenericNav";

// import pic04 from '../assets/images/pic04.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Products"/>
        <HeaderGeneric title='Products' description=''/>
        <GenericNav/>
        <div id="main">
          <section id="content" className="main">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <h2>PRODUCT RANGE</h2>
            <p>
              <ul>
                <li>No Fuel or Fuel Free Incinerator</li>
                <li>Diesel Incinerator</li>
                <li>Napkin Incinerator</li>
                <li>Automatic Composting Machine</li>
                <li>Manual Composting Machine</li>
                <li>Organic Waste Converters</li>
                <li>Waste Shredders</li>
                <li>Waste Dewatering Systems</li>
                <li>Bio Gas Plant</li>
                <li>Composting Bins</li>
                <li>Self-Watering Pots</li>
                <li>Vertical Gardens</li>
              </ul>
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
