import React from 'react';
import DynamicContent from './DynamicContent';
import { Exposure } from '@mui/icons-material';

 
const Explore = () => (
  <div>
    <DynamicContent
      heading="Dynamic Heading 1"
      photoUrl="https://assets-global.website-files.com/61eaca7810877f81dc9aaa6b/6211b76b789b585e6cda3898_MA-p-1080.png"
      heading2="Know your customer better"
      content="
      By leveraging data from different sources, such as POS, demographics, and psychographics, customer segmentation and audience mapping becomes more efficient."
 
    />
 
    {/* Add more instances of DynamicContent as needed */}
  </div>
);
 
export default Explore;