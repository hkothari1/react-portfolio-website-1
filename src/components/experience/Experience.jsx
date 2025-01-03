import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Professional Experience</h2>

      <div className="container experience__container">
        <div className="experience__PCLConstruction">
          <h2 class="company">PCL Construction</h2>
          <h4 class="position">Full Stack Developer Intern</h4>
          <div className="experience_content">
            <ul class="list">
              <li class="list-item">
                Created an employee management web application using the MVCS
                design pattern and REST API architecture, leveraging C#, .NET,
                and Entity Framework for backend development, Angular and
                TypeScript for frontend development, and MSSQL Server for
                database management
              </li>
              <li class="list-item">
                Developed and integrated advanced form field components,
                including checklist and signature fields, into a dynamic form
                builder web application, using C#, .NET, Entity Framework,
                Angular, TypeScript, HTML, and SCSS
              </li>
              <li class="list-item">
                Enhanced reliability and performance of the company’s largest
                in-house construction management web application by resolving
                software bugs while using Agile practices and Azure DevOps for
                code management
              </li>
            </ul>
          </div>
        </div>
        <div className="experience__48HourDiscovery">
          <h2 class="company">48HourDiscovery</h2>
          <h4 class="position">Full Stack Developer Intern</h4>
          <div className="experience_content">
            <ul class="list">
              <li class="list-item">
                Enabled accurate tracking and analysis of DNA sample evolution
                by designing and implementing MySQL triggers that maintain
                hierarchical data relationships between database tables
              </li>
              <li class="list-item">
                Enhanced user experience and data visualization within the
                company’s in-house web application by developing interactive UI
                components in JavaScript that dynamically adjust bar plot
                elements
              </li>
              <li class="list-item">
                Successfully identified and addressed root causes of critical
                software bugs by performing thorough navigation and debugging of
                the Flask backend
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
                Improved productivity of all telecommunication teams in the
                department by performing backend software development tasks
                using Go and a Linux environment
              </li>
              <li class="list-item">
                Enabled real-time backup and secure storage of critical CSV
                files by implementing algorithms in Go
              </li>
              <li class="list-item">
                Enhanced data accuracy by developing a Go script that performs
                CSV data processing and parsing
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
                Optimized spectrum management and allocation by developing
                Python code for an in-house software application that automates
                and evaluates the coordination of wireless frequency usage
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