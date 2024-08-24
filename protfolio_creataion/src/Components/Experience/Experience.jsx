import React from 'react';
import "./Experience.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faSchool,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

const Experience = () => {
  const timeline = [
    {
      icon: workIcon,
      date: '2022 - present',
      title: 'Frontend Developer',
      subtitle: 'Tata Consultancy services, Bangalore',
      desc: 'Developed responsive React UIs, optimized performance, and implemented Dark Mode for improved user experience. Collaborated with teams for efficient design and development processes, ensuring high-quality code and timely delivery.Expert in React,JavaScript,CSS Framework,RESTApi, React Native.',
    },
    {
      icon: workIcon,
      date: 'Sept-Dec 2020',
      title: 'Software Trainee',
      subtitle: 'Zensar Technologies, Pune',
      desc: 'While interning at Zensar, I contributed to a project that involved analyzing customer behavior data. Using Python, I developed a script to automate data extraction from our CRM system. I then employed SQL to clean and transform the data, preparing it for analysis. My work led to valuable insights that informed our marketing strategy.',
    },
   
    
    {
      icon: schoolIcon,
      date: '2018-2022',
      title: 'Bharati Vidyapeeth college of Engineering for Women,Pune',
      subtitle: 'Electronics & Telecommunication',
      desc: '3rd Rank Holder in my course.In addition to my undergraduate degree, I pursued an honors program in data science. This specialized program deepened my understanding of data analysis and equipped me with the practical skills to extract valuable insights from complex datasets.',
    },
   
    { icon: starIcon },
  ];

  return (
    
    <div className="App">
      <div className="glitch">
         <h1 className='heading'>Experience</h1>
    </div>
      <VerticalTimeline>
        {timeline.map((t, i) => {
          const contentStyle =
            i === 0
              ? { background: 'rgb(33, 150, 243)', color: '#fff' }
              : undefined;
          const arrowStyle =
            i === 0
              ? { borderRight: '7px solid  rgb(33, 150, 243)' }
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
  
}

export default Experience;
