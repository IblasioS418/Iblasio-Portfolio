import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      {/* <div className="timeline-icon color-3">
                        <i className="icon-bag" />
                      </div> */}
                      {/* <div className="timeline-label">
                        <h2>Investigator <span>2020-present</span></h2>
                        <p>In my role as a Technical Writer at most Bausch + Lomb I utilized and grew my expertise in top skills (i.e. React, Vue.js, Mobile Development, Python). I supported employer name or organization in achievement , achieving a measurable improvement or example of how you integrated automation in your non-technical work. My contributions resulted in a an improvement our measurable outcome.</p>
                      </div> */}
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Java Apprentice Software Guild<span> 2019-2020</span></h2>
                        <p> As a Java Appretice I was able to develope my skills using Java as a programming language.  </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-paper-stack" />
                      </div>
                      <div className="timeline-label">
                        <h2>Manufacturing Technician <span> 2017-2019</span></h2>
                        <p>As a Mannufacturing Technician, I exercised skills in communication, critical thinking and technical writing and consistently contributed to team efforts and organizational improvements.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Machine Operator <span> 2016-2017</span></h2>
                        <p>During my time working as a Machine Operator at Bausch + Lomb, I had the opportunity to develop my communication skills. </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduate Degree<span> 2011-2016</span></h2>
                        <p> I completed my higher education majoring in Forensic Psychology. At school, I developed an interest in research and data analysis. I enjoyed compiling data from various sources and using this imformation to understand problems.</p> 
                      </div>
                    </div>
                  </article>
                  <article></article>
                  <article className="timeline-entry begin animate-box">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
