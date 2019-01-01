import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import donwloadIcon from '../images/arrow-alt-circle-down-regular.svg';
import linkedinIcon from '../images/linkedin-in-brands.svg';
import githubIcon from '../images/github-brands.svg';  
import stackoverflowIcon from '../images/stack-overflow-brands.svg'; 
import mediumIcon from '../images/medium-m-brands.svg';
import twitterIcon from '../images/twitter-brands.svg';
import reddit from '../images/reddit-alien-brands.svg';


const IndexPage = () => (
    <Layout className="layout__body">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <main>
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                  <div className="columns">
                  <div className="column is-two-thirds">
                  <h1 className="title title__name is-size-1-mobile">GETULIO</h1>
                  <h2 className="subtitle subtitle__name is-size-1-mobile">RAFAEL</h2>
                  <p className="paragraph__about">
                    I'm a very motivated Front-end developer who likes to contribute<br/> to the group's
                    development. I believe we can improve every day<br/>by working and learning
                    together. I'm always prepared for new challenges.<br/><br/>
                    <b>I try to be just 1% better every day!</b>
                  </p>
                </div>
                  <div className="column">
                    <ul className="social-list">
                      <li className="hvr-bob list__name"><a href="https://www.linkedin.com/in/gferreiraa/" target="_blank"><img className="icon is-small icon__img" src={linkedinIcon}/>Linkedin</a></li>
                      <li className="hvr-bob list__name"><a href="https://github.com/gferreiraa" target="_blank"><img className="icon is-small icon__img" src={githubIcon}/>Github</a></li>
                      <li className="hvr-bob list__name"><a href="https://pt.stackoverflow.com/users/134567/getulio-rafael-ferreira" target="_blank"><img className="icon is-small icon__img" src={stackoverflowIcon}/>Stackoverflow</a></li>
                      <li className="hvr-bob list__name"><a href="https://medium.com/@getliorafaelferreira" target="_blank"><img className="icon is-small icon__img" src={mediumIcon}/>Medium</a></li>
                      <li className="hvr-bob list__name"><a href="https://twitter.com/padawanmirim" target="_blank"><img className="icon is-small icon__img" src={twitterIcon}/>Twitter</a></li>
                      <li className="hvr-bob list__name"><a href="https://www.reddit.com/user/gferreiraa" target="_blank"><img className="icon is-small icon__img" src={reddit}/>Reddit</a></li>
                    </ul>
                  </div>
                </div>
                </div>
            </div>
        </section>
        </main>
        <footer>
        <div className="container">
          <div className="columns footer__mobile">
            <div className="column is-two-thirds">
              <p className="footer__note"><b>© 2019</b> - Built with <span className="heart__icon">❤</span> Gatsby, GitHub Pages and ReactJS</p>
            </div>
            <div className="column footer__cv">
              <p className="footer__note"><b><a className="link_cv hvr-bob" href="https://drive.google.com/file/d/0B04ZkygoVw1nblVjbmVsbmsxRGItUUI1TmVUdnFqbmVBV1RN/view" download="CV-Getúlio-Rafael-Ferreira.pdf" target="_blank"><img className="icon is-small icon__img" src={donwloadIcon}/>Download CV Here</a></b></p>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
);

export default IndexPage;
