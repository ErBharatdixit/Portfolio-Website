import React from "react";
import { AiOutlineContacts } from 'react-icons/ai';
import PageHeaderContact from "../../component/pageHeaderContact";
import { Animate } from "react-simple-animate";
import './styles.scss'

const Contact = () => {
      return (
            <section id="contact" className="contact">
                  <PageHeaderContact headerText="Contact Me"
                        icon={<AiOutlineContacts size={40} />} />


                  <div className="contact_content">
                        <Animate
                              play
                              duration={1}
                              delay={0}
                              start={{
                                    transform: "translateX(-200px)"
                              }}
                              end={{
                                    transform: "translateX(0px)"
                              }}
                        >
                              <h3 className="contact_contant_header-text">Let's Talk</h3>
                        </Animate>
                        <Animate
                              play
                              duration={1}
                              delay={0}
                              start={{
                                    transform: "translateX(200px)"
                              }}
                              end={{
                                    transform: "translateX(0px)"
                              }}
                        >
                           <div className="contact_content_form">
                                    <div className="contact_content_form_controlswrapper">

                                          <div>
                                                <input required name='name' className="inputName" type={'text'}/>
                                                <label htmlFor="name" className="nameLabel">Name</label>
                                          </div>
                                          <div>
                                                <input  required name='email' className="inputEmail" type={'text'} />
                                                <label htmlFor="email" className="emailLabel">Email</label>
                                          </div>
                                          <div>
                                                <textarea required name='description' className="inputDescription" type={'text'}  rows="5"/>
                                                <label htmlFor="descriptio" className="descriptioLabel">Description</label>
                                          </div>
                                    </div>
                              <button>Submit</button>
                           
                           
                           </div>   
                        </Animate>
                  </div>

            </section>
      )
}
export default Contact;