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
        <Helmet title="About Us"/>
        <HeaderGeneric title='About Us' description=''/>
        <GenericNav/>
        <div id="main">
          <section id="content" className="main">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <h2>About Us</h2>
            <p>Tech Mechanica Enterprises is a premier waste management equipment manufacturer in Kerala. We sell our
              equipment under the brand ‘Green Innovations’. From a humble beginning in 2015 with the manufacture of No
              fuel or Fuel free Incinerators, we are now a major player in the waste management arena with 250+
              installations across the length & breadth of the state. We are also the Original Equipment Manufacturer
              for many prominent brands in this field. </p>
            <p>Our No fuel Incinerator or Fuel free Incinerator is famous in the state for its durability & reliability.
              The modular design is helpful in maintenance & repair activities. The ergonomic design helps in operator
              comfort. We are the pioneers in Diesel Incinerators in the state. Our single/double chambered Diesel
              Incinerators are used in many prominent institutions.</p>
            <p>We are also the only manufacturer of Natural or Organic Composting machines in the state. Our Manual or
              Automatic composting machines perform the role of an Organic Waste Converter (OWC) by converting organic
              waste to nutrient rich compost. It is mainly used in apartment complexes in Mumbai & Bangalore. We are the
              OEM for a prominent brand in these markets.</p>
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
            <h2>OUR STRENGTHS</h2>
            <p>
              <ul>
                <li> Experienced & Well qualified Management</li>
                <li> Expert technicians with deep fabrication experience</li>
                <li> Manufacturing facility with modern equipment</li>
                <li> In-House R&D for Industry first equipment Composting Machine</li>
                <li> Customization possible based on customer preferences</li>
                <li> Excellent supplier relationship for faster material delivery</li>
                <li> Minimum cycle time & on time delivery</li>
                <li> Excellent goodwill from existing customers</li>
                <li> Reliable After sales support</li>
              </ul>
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
