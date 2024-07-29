// import React from 'react';
// import './Services.css';

// const Services = () => {
//   return (
//     <section id="services" className="services">
//       <div className="services-container">
//         <h2>Our Services</h2>
//         <ul>
//           <li>Custom Software Development</li>
//           <li>Mobile Application Development</li>
//           <li>Web Development</li>
//           <li>Cloud Solutions</li>
//           <li>IT Consulting</li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from 'react';
import './Services.css';

const Services = () => {
  const serviceList = [
    { title: 'App Development', image: 'dummy-image-url' },
    { title: 'Web App Development', image: 'dummy-image-url' },
    { title: 'UI/UX Design', image: 'dummy-image-url' },
    { title: 'Website Development', image: 'dummy-image-url' },
    { title: 'Digital Marketing', image: 'dummy-image-url' },
    { title: 'Logo Design', image: 'dummy-image-url' },
    { title: 'And Many More...', image: 'dummy-image-url' }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {serviceList.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
