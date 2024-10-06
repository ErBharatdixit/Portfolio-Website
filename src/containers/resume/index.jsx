
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';
import PageHeaderContact from "../../component/pageHeaderContact";
import {MdWork} from 'react-icons/md';
import { data } from "./utils";
import './styles.scss';

const Resume = () => {
      return (
            <section id="resume" className="resume">
                  <PageHeaderContact headerText="My Resume" icon={<FaGraduationCap size={40} />} />

                  <div className="timeline">

                        <div className="timeline_experience">
                              <h3 className="timeline_experience_header-txt">Experience</h3>

                              <VerticalTimeline layout={'1-column'} lineColor="var(--yellow-theme-main-color)">
                                    {
                                          data.experience.map((item, i) => (
                                                <VerticalTimelineElement
                                                      key={i}
                                                      className="timeline_experience_vertical-timeline-element"
                                                      contentStyle={{
                                                            background:'none',
                                                            color:'var(--yellow-theme-sub-text-color)',
                                                            border:'1.5px solid var(--yellow-theme-main-color)'

                                                      }}

                                                      icon={<MdWork/>}
                                                      iconStyle={{
                                                            background:'#101010',
                                                            color:'var(--yellow-theme-sub-text-color)'

                                                        }}
                                                >
                                                      <div className="vertical-timeline-element-title-wrapper">
                                                            <h3>{item.title}</h3>
                                                            <h4>{item.subTitle}</h4>
                                                      </div>
                                                      <p>{item.description}</p>

                                                </VerticalTimelineElement>
                                          ))
                                    }
                              </VerticalTimeline>
                        </div>

                        <div className="timeline_education">
                              <h3 className="timeline_education-header-txt">Education</h3>
                              <VerticalTimeline layout={'1-column'} lineColor="var(--yellow-theme-main-color)">
                                    {
                                          data.education.map((item, i) => (
                                                <VerticalTimelineElement
                                                      key={i}
                                                      className="timeline_education_vertical-timeline-element"
                                                      contentStyle={{
                                                            background: 'none',
                                                            color: 'var(--yellow-theme-sub-text-color)',
                                                            border: '1.5px solid var(--yellow-theme-main-color)'

                                                      }}
                                                      icon={<MdWork />}
                                                      iconStyle={{
                                                            background: '#101010',
                                                            color: 'var(--yellow-theme-sub-text-color)'

                                                      }}

                                                >
                                                      <div className="vertical-timeline-element-title-wrapper">
                                                            <h3 >{item.title}</h3>
                                                            <h4 >{item.subTitle}</h4>
                                                      </div>
                                                      <p>{item.description}</p>

                                                </VerticalTimelineElement>
                                          ))
                                    }
                              </VerticalTimeline>
                        </div>

                  </div>
            </section>
      )
}

export default Resume;