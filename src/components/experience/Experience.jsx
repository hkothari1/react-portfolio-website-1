import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Professional Experience</h2>

      <div className="container experience__container">
        <div className="experience__48HourDiscovery">
          <h2 class="company">48HourDiscovery</h2>
          <h4 class="position">Full Stack Developer Intern</h4>
          <div className="experience_content">
            <ul class="list">
              <li class="list-item">
                Designed and implemented MySQL triggers to automatically
                maintain hierarchical data relationships between two tables,
                capturing the lineage of DNA samples sequenced over multiple
                rounds
              </li>
              <li class="list-item">
                Developed interactive UI components in JavaScript, including
                buttons and sliders, to dynamically adjust bar plot elements,
                enhancing user experience and data visualization
              </li>
              <li class="list-item">
                Conducted in-depth navigation and debugging of extensive Flask
                codebase, successfully identifying and addressing root causes of
                critical software bugs
              </li>
            </ul>
          </div>
        </div>
        <div className="experience__SoftwareGovtofCanada">
          <h2 class="company">Government of Canada</h2>
          <h4 class="position">Software Developer Intern</h4>
          <div className="experience_content">
            <ul class="list">
              <li class="list-item">
                Performed backend software development using Golang and a Linux
                environment, resulting in improved productivity of all
                telecommunication teams in the department
              </li>
              <li class="list-item">
                Implemented Golang code which allows for real-time backup of
                crucial csv files and informs admins about any changes
              </li>
              <li class="list-item">
                Developed a Golang script that performed CSV data parsing to
                ensure real-time data accuracy
              </li>
              <li class="list-item">
                Demonstrated familiarization with telecom terminology through
                analyzing base station and access point/Wifi router user manuals
                and extracting power consumption values
              </li>
            </ul>
          </div>
        </div>
        <div className="experience__SpectrumGovtofCanada">
          <h2 class="company">Government of Canada</h2>
          <h4 class="position">Spectrum/Telecom Engineering Intern</h4>
          <div className="experience_content">
            <ul>
              <li>
                Developed Python code in a Linux environment for the Automated
                Frequency Coordination (AFC) Evaluation Python Tool and designed
                a flowchart using Microsoft Visio for the 3000 lines of code in
                the Python Tool codebase
              </li>
              <li>
                Utilized VBA to identify erroneous Excel data fields in the 6
                GHz data extract
              </li>
              <li>
                Helped address consultation of technical documents from
                stakeholders such as Cisco, Microsoft, and Google
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience