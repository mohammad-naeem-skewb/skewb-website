import React from 'react';
import DynamicContent from './DynamicContent';
 
 
 
 
const Explore = () => (
  <div>
    <DynamicContent
      heading="Tech & E-Com"
      photoUrl="https://assets-global.website-files.com/61eaca7810877f81dc9aaa6b/620f8a767dfb1be540ae97ad_Tech%20_%20E-Com.png"
      heading2="Know your customer better"
      content1="
      By leveraging data from different sources, such as POS, demographics, and psychographics, customer segmentation and audience mapping becomes more efficient."
      content3="
      When it comes to technology and e-commerce, social media promotion, automation, and growing omnichannel business models are some core concepts to help brands reach new audiences and shine. Our ultra-intelligent AI and advanced digital marketing and analytics solutions are tailor-made and customized to help you succeed and optimize the entire consumer funnel and sensitivity to help you drive business KPIs and give you record-high ROIs."
      content2={'You need a marketing analytics solution that helps you capture this digital audience in the most optimum manner.'}
 
    />
 
    {/* Add more instances of DynamicContent as needed */}
  </div>
 
);
 
export default Explore;
