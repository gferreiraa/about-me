import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout className="layout__body">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <main>
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                  <div className="columns">
                  <div className="column is-two-thirds">
                  <h1 className="title title__name">GETULIO</h1>
                  <h2 className="subtitle subtitle__name">RAFAEL</h2>
                  <p className="paragraph__about">
                    I'm a very motivated Front-end developer who likes to contribute<br/> to the group's
                    development. I believe we can improve every day<br/>by working and learning
                    together. I'm always prepared for new challenges.<br/><br/>
                    <b>I try to be just 1% better every day!</b>
                  </p>
                </div>
                  <div className="column">
                    <ul className="social-list">
                      <li className="hvr-bob list__name"><a href="https://www.linkedin.com/in/gferreiraa/" target="_blank">Linkedin</a></li>
                      <li className="hvr-bob list__name"><a href="https://github.com/gferreiraa" target="_blank">Github</a></li>
                      <li className="hvr-bob list__name"><a href="https://pt.stackoverflow.com/users/134567/getulio-rafael-ferreira" target="_blank">Stackoverflow</a></li>
                      <li className="hvr-bob list__name"><a href="https://medium.com/@getliorafaelferreira" target="_blank">Medium</a></li>
                      <li className="hvr-bob list__name"><a href="https://twitter.com/padawanmirim" target="_blank">Twitter</a></li>
                      <li className="hvr-bob list__name"><a href="https://www.reddit.com/user/gferreiraa" target="_blank">Reddit</a></li>
                    </ul>
                  </div>
                </div>
                </div>
            </div>
        </section>
        </main>
        <footer>
        <div className="container">
          <div className="columns">
            <div className="column is-two-thirds">
              <p className="footer__note"><b>© 2019</b> - Built with <span className="heart__icon">❤</span> Gatsby, GitHub Pages and React</p>
            </div>
            <div className="column">
              <p className="footer__note"><b><a className="link_cv hvr-bob" href="https://drive.google.com/file/d/0B04ZkygoVw1nblVjbmVsbmsxRGItUUI1TmVUdnFqbmVBV1RN/view" download="CV-Getúlio-Rafael-Ferreira.pdf" target="_blank">CV Download Here</a></b></p>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
);

export default IndexPage;
