import React from "react";
import { BiLinkExternal } from 'react-icons/bi';
import PageHeaderContact from "../../component/pageHeaderContact";
import './styles.scss'

const Portfolio = () => {
     
      return (
            <section id="portfolio" className="portfolio">
                  <PageHeaderContact headerText="My Portfolio"
                        icon={< BiLinkExternal size={40} />} />
            </section>
      )
}
export default Portfolio;