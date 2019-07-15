import React from 'react'
import {Link} from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({stickyNav: false}));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({stickyNav: true}));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar"/>

        <Header/>

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav}/>

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Who we are</h2>
                </header>
                <p>Tech Mechanica Enterprises is a premier waste management equipment manufacturer in Kerala. We sell
                  our equipment under the brand ‘Green Innovations’. From a humble beginning in 2015 with the
                  manufacture of No fuel or Fuel free Incinerators, we are now a major player in the waste management
                  arena with 250+ installations across the length & breadth of the state. We are also the Original
                  Equipment Manufacturer for many prominent brands in this field. </p>
                <ul className="actions">
                  <li><Link to="/aboutus" className="button">Learn More</Link></li>
                </ul>
              </div>
              <span className="image"><img src={pic01} alt=""/></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>What we build</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style6 fa-leaf"></span>
                <h3>No Fuel or Fuel Free Incinerator</h3>
                <p>Want to process your waste without any operational cost?
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-recycle"></span>
                <h3>Diesel Incinerator </h3>
                <p>Diesel Incinerators use diesel fuel to convert waste to ash.</p>
              </li>
              <li>
                <span className="icon major style2 fa-bathtub"></span>
                <h3>Self-Watering Pots</h3>
                <p>The pots that will take care of your plants even in your absence.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/products" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Ipsum consequat</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br/>
                posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus
              hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer
              maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a
              enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget
              purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus
              et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur
              lacinia.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br/>
                posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
