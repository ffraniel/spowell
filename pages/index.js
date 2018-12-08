import { react, Fragment, Component } from 'react';
import Router from 'next/router';
import Layout from '../components/Layout';

export default class index extends Component {
  // static async getInitialProps({ req }) {
  //   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  //   return { userAgent }
  // }

  render() {
    return (
      <div>
        <Layout>
          <section>
            <h1>Stephen Powell</h1>
          </section>
          <section>
            <article>
              <h3>Title of some text</h3>
              <p>This is the main lot of text.</p>
            </article>
          </section>        
        </Layout>
      </div>
    )
  }
}