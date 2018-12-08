import { react, Fragment, Component } from 'react';
import Router from 'next/router';
import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class index extends Component {
  // static async getInitialProps({ req }) {
  //   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  //   return { userAgent }
  // }

  render() {
    return (
      <div>
        <Head />
        <Header />
        <h1>WORKS</h1>
        <Footer /> 

      </div>
    )
  }
}