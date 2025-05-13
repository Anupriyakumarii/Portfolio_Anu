import React from "react";
import "./Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faSchool,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: "rgb(16, 204, 82)", color: "#fff" },
};

const Experience = () => {
  const timeline = [
    {
      icon: workIcon,
      date: "2023 - Present",
      title: "Frontend Developer",
      subtitle: "Tata Consultancy services, Bangalore",
      desc: (
        <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem" }}>
          <li>
            Developed responsive, high-performance web apps using React,
            JavaScript, and modern CSS frameworks like Tailwind CSS and SASS.
          </li>
          <li>
            Improved cross-device compatibility across 10+ applications by
            implementing adaptive design strategies and leveraging CSS
            utilities.
          </li>
          <li>
            Optimized script loading performance—reduced wait queue time from
            300ms to 4ms by lazy-loading non-critical CSS and eliminating
            render-blocking elements.
          </li>
          <li>
            Migrated 27% of legacy frontend codebase to modern React using
            functional components, React Hooks, and enhanced state management.
          </li>
          <li>
            Wrote unit tests using Jest to improve code reliability and
            maintainability.
          </li>
          <li>
            Integrated and optimized RESTful APIs with pagination, filtering,
            and authentication, improving data flow and application performance.
          </li>
          <li>
            Actively contributed to performance tuning, caching strategies, and
            CI/CD integration for smoother deployments.
          </li>
        </ul>
      ),
    },
    {
      icon: workIcon,
      date: "2022 - 2023",
      title: "Jr.Frontend Developer",
      subtitle: "Tata Consultancy services, Bangalore",
      desc: (
        <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem" }}>
          <li>
            Created and optimized 10+ responsive landing pages, improving
            usability, accessibility, and increasing conversion rates by 30% for
            the company and clients.
          </li>
          <li>
            Debugged and resolved cross-browser compatibility issues and
            JavaScript errors, reducing bug reports by 40% and ensuring
            consistent performance across major browsers.
          </li>
          <li>
            Maintained and optimized 20+ websites and forms, collaborating
            closely with UX/UI and backend teams to enhance functionality,
            speed, and user experience.
          </li>
        </ul>
      ),
    },
    {
      icon: workIcon,
      date: "Sept-Dec 2020",
      title: "Software Trainee",
      subtitle: "Zensar Technologies, Pune",
      desc: (
        <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem" }}>
          <li>
            Contributed to a data analysis project focused on understanding
            customer behavior and improving marketing strategy.
          </li>
          <li>
            Developed Python scripts to automate data extraction from the CRM
            system, improving data retrieval efficiency.
          </li>
          <li>
            Used SQL to clean, transform, and structure raw data, ensuring
            accuracy and consistency for downstream analysis.
          </li>
          <li>
            Delivered insights that supported data-driven marketing decisions
            and enhanced customer targeting strategies.
          </li>
        </ul>
      ),
    },

    {
      icon: schoolIcon,
      date: "2018-2022",
      title: "Bharati Vidyapeeth college of Engineering for Women,Pune",
      subtitle: "Electronics & Telecommunication",
      desc: (
        <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem" }}>
          <li>Achieved 3rd rank in my undergraduate program.</li>
          <li>
            Completed an honors program in Data Science alongside my degree.
          </li>
          <li>
            Gained practical skills in data analysis, transformation, and
            insight generation from complex datasets.
          </li>
        </ul>
      ),
    },

    { icon: starIcon },
  ];

  return (
    <div className="App" id="Experience">
      <div className="glitch">
        <h2 className="heading">💼 Experience</h2>
      </div>
      <VerticalTimeline>
        {timeline.map((t, i) => {
          const contentStyle =
            i === 0
              ? { background: "rgb(33, 150, 243)", color: "#fff" }
              : undefined;
          const arrowStyle =
            i === 0
              ? { borderRight: "7px solid  rgb(33, 150, 243)" }
              : undefined;
          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              date={t.date}
              {...t.icon}
            >
              {t.title ? (
                <React.Fragment>
                  <h3 className="vertical-timeline-element-title">{t.title}</h3>
                  {t.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle">
                      {t.subtitle}
                    </h4>
                  )}
                  {t.desc && <p>{t.desc}</p>}
                </React.Fragment>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
