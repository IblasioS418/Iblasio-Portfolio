import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/pic1.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Iblasio Sanchez</a></h1>
              <div className="email"><i className="icon-mail"></i> Iblasio.Sanchez@gmail.com</div>
              <span className="email"><i className="icon-phone3"></i> (718)371-8440 </span>
            </div>
            <br></br>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  {/* <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li> */}
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#project" data-nav-section="projects">Projects</a></li>
                </ul>
              </div>
            </nav>
            {/* <br></br> */}
            <nav id="colorlib-main-menu">
              <ul>
                {/* <li><a href="https://www.facebook.com/ibby.sanchez/" target="_blank" rel="noopener noreferrer"><span>Facebook </span><i className="icon-facebook2" /></a></li> */}
                <li><a href="https://twitter.com/IblasioSanchez" target="_blank" rel="noopener noreferrer"><span>Twitter </span><i className="icon-twitter2" /></a></li>
                {/* <li><a href="https://www.instagram.com/ibby418/" target="_blank" rel="noopener noreferrer"><span>Instagram </span><i className="icon-instagram" /></a></li> */}
                <li><a href="https://www.linkedin.com/in/iblasio-sanchez/" target="_blank" rel="noopener noreferrer"><span>Linkedin </span><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/IblasioS418" target="_blank" rel="noopener noreferrer"><span>Github </span><i className="icon-github"></i></a></li>
                <li><a href="https://iblasio.home.blog/" target="_blank" rel="noopener noreferrer"><span>Blog </span><i className="icon-blogger"></i></a></li>
              </ul>
            </nav>
            {/* <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              </small></p>
              <p><small>
                Something coming soon !!
              </small></p>
            </div> */}
          </aside>
        </div>
      </div>
    )
  }
}
