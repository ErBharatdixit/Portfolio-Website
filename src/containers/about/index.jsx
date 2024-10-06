import React from "react";
import './styles.scss';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContact from "../../component/pageHeaderContact";
import { Animate } from "react-simple-animate";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
const aboutMe = `Hi! I'm Bharat Dixit, a web developer  and B.Tech Computer Science student at GLA University in Mathura. I’m passionate about creating dynamic, user-friendly web applications using technologies like HTML, CSS, JavaScript, and React.  

As I continue to learn and grow in my field, I enjoy tackling new challenges and working on personal projects that enhance my skills. In my spare time, I love collaborating on tech initiatives and exploring the latest trends in web development.  

I’m eager to connect and explore new opportunities.`;
const personalDetails = [
      {
            label: "Name",
            value: "Bharat Dixit"
      },
      {
            label: "Age",
            value: 21
      },
      {
            label: "Address",
            value: "India"
      },
      {
            label: "Email",
            value: "bharat010703@gmail.com"
      },
      {
            label: "Contact No",
            value: "7068876861"
      }
];
const About = () => {
      return (
            <section id="about" className="about">
                  <PageHeaderContact headerText="About Me"
                        icon={<BsInfoCircleFill size={40} />} />


                  <div className="about_content">
                        <div className="About_content_personalWrapper">
                              <Animate play
                                    duration={1.5}
                                    delay={1}
                                    start={{
                                          transform: 'translateX(-900px)'
                                    }}
                                    end={{
                                          transform: 'translateX(0px)'
                                    }}
                              >
                                    <h3>Web developer</h3>
                                    <p>{aboutMe}</p>
                              </Animate>
                              <Animate play
                                    duration={1.5}
                                    delay={1}
                                    start={{
                                          transform: 'translateX(500px)'
                                    }}
                                    end={{
                                          transform: 'translateX(0px)'
                                    }}
                              >
                                    <h3 className="personalInformationheaderText">Personal Information</h3>
                                    <ul>
                                          {
                                                personalDetails.map((item, i) => (
                                                      <li key={i}>
                                                            <span className="title">{item.label}</span>
                                                            <span className="value">{item.value}</span>
                                                      </li>

                                                ))


                                          }
                                    </ul>
                              </Animate>

                        </div>
                        <div className="About_content_servicesWrapper">
                        <Animate play
                              duration={1.5}
                              delay={1}
                              start={{
                                    transform: 'translateX(500px)'
                              }}
                              end={{
                                    transform: 'translateX(0px)'
                              }}
                        >
                              <div className="About_content_servicesWrapper_innerContent">
                                    <div>
                                          <FaDev size={60} color="var(--yellow-theme-main-color)" />

                                    </div>
                                    <div>
                                          <DiAndroid size={60} color="var(--yellow-theme-main-color)" />

                                    </div>
                                    <div>
                                          <FaDatabase size={60} color="var(--yellow-theme-main-color)" />

                                    </div>
                                    <div>
                                          <DiApple size={60} color="var(--yellow-theme-main-color)" />

                                    </div>
                              </div>
                              </Animate>


                        </div>



                  </div>

            </section>
      )
}
export default About;