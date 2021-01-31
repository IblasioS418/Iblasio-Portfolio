import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/pic1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://editor.p5js.org/iblasios418/sketches/2r7U6o3Bs">Traffic Control</a></h3>
											<span> Small project created using p5.js in which the user can control a car going down 
											an intersection. </span>
											<p>
											</p>
											<p className="icon">
												<span><a href="https://editor.p5js.org/iblasios418/sketches/2r7U6o3Bs"><i className="icon-share3" />View</a></span>
												<span><a href="https://iblasio.home.blog/2019/11/26/traffic-control/"><i className="icon-eye" /> Blog</a></span>
												<span><a href="#"><i className="icon-social-github-circular" /> Github</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">DVD Library</a></h3>
											<span>CRUD console application for a DVD Library</span>
											<p className="icon">
												{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span> */}
												<span><a href="https://github.com/IblasioS418/MovieLibrary"><i className="icon-social-github-circular" /> Github</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Sales System</a></h3>
											<span>MVC CRUD application for a fictional flooring company</span>
											<p className="icon">
												{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span> */}
												<span><a href="https://github.com/IblasioS418/FlooringSystem"><i className="icon-social-github-circular" /> Github</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Blog</a></h3>
											<span>Application</span>
											<p className="icon">
												{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span> */}
												<span><a href=""><i className="icon-social-github-circular" /> Github</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Vending Machine</a></h3>
											<span>MVC web application for a Vending Machine</span>
											<p className="icon">
												{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span> */}
												<span><a href="https://github.com/IblasioS418/VM"><i className="icon-social-github-circular" /> Github</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Game</a></h3>
											<span>Web Design</span>
											<p className="icon">
												{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span> */}
												<span><a href="https://github.com/IblasioS418/Game1"><i className="icon-social-github-circular" /> Github</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
