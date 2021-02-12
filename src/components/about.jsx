import React, { Component } from 'react'


export default class About extends Component {
    render() {
        return (
            <div>   
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">Welcome</span>
                                            <h2 className="colorlib-heading">About Me</h2>
                                            <p style={{Image: 'url(images/pic2.jpg)'}}>Hi there,</p>
                                            <p>My name is Iblasio Sanchez,</p>
                                            <p>I am an Experienced professional with a background in Pharmaceuticals and Manufacturing. Although I enjoyed working in Pharma and Manufacturing, I could not
                                            develop a passion for it as I felt that I had reached the upper limit in what I could learn. I am the type of person that firmly believes that there is no better
                                            reward than knowlege is always eager and hungry to learn new skills and add new tools to my toolbelt and what better career to work in than a career where learning never really ends.
                                            I've always had a vested interest in technology but the infinite progression of Software Development has been the biggest draw for me and is what ultimately prompted me to switch careers. 
                                            I am open-minded and focused on new developments in my field. I have proven to be effective and motivational, with proficiency in interpersonal and collaborative work. I enjoy brainstorming and coordinating efforts to achieve a common goal.
                                            </p>
                                            <p>Some Hobbies and Interests of mine include motorcycles, cars, hiking, photography, traveling to different countries, writing, astrology, and video games. I love video games. </p>
                                            <p>As a recent bootcamp graduate, I am excited to build on the skills that I learned throughout the bootcamp and apply the unique set of skills that I have developed throughout my
                                            professional career in the tech industry!
                                            </p>
                                            <p>
                                            <a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/181frzGsdj3RW50KSTB4HJh7ltno4wimT/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Background</span>
                                <h2 className="colorlib-heading">Here's a snapshot of my skills and background</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>Languages/ Frameworks </h3>
                                        <p>I have experience building webapps primarily using <b>JavaScript,HTML,CSS, Java, JQuery, Spring and Thymeleaf</b></p>
                                        <p>I also am familiar with <b>React and Node.Js</b> and have worked in teams utilizing React to build web applications</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-point-of-interest" />
                                    </span>
                                    <div className="desc">
                                        <h3>Professional Background</h3>
                                        <p>An <b>adaptable</b> professional with a <b>strong background in troubleshooting, problem-solving and data analysis</b>. Able to work well <b>independently
                                        and within a team</b>.</p>
                                        <p>Passionate individual with <b>strong written and verbal communication</b> skills</p> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-briefcase3" />
                                    </span>
                                    <div className="desc">
                                        <h3>Programming Background</h3>
                                        <p>As an incoming Software Engineer I am experienced in utilizing <b>test-driven development, Agile development and RESTful api</b>.</p> 
                                        <p>I also have experience utilizing tools such as <b>Git(Version Control), Postman and JUnit</b>.</p>
                                    </div>
                                </div>
                            </div>
                            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
