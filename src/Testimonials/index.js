
// import React from 'react';
// import './Testimonials.css';

// const workflowSteps = [
//   { title: "Search", description: "We start by understanding your needs through detailed research and analysis." },
//   { title: "Analyzing", description: "We analyze the gathered information to plan an effective strategy." },
//   { title: "Design", description: "Our team designs a user-friendly and aesthetically pleasing solution." },
//   { title: "Discussion", description: "We discuss the design and plan with you to ensure it meets your requirements." },
//   { title: "Development", description: "We develop the solution using the latest technologies and best practices." },
//   { title: "Testing", description: "Rigorous testing is performed to ensure quality and functionality." },
//   { title: "Shortout Bugs", description: "Any bugs found are fixed promptly to ensure a smooth experience." }
// ];

// const Testimonials = () => {
//   return (
//     <section id="testimonials" className="testimonials">
//       <h2>Our Workflow</h2>
//       <div className="workflow-container">
//         {workflowSteps.map((step, index) => (
//           <div key={index} className="workflow-card">
//             <h3>{step.title}</h3>
//             <p>{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React, { useEffect, useState } from 'react';
import './Testimonials.css';

const workflowSteps = [
  { title: "Search", description: "We start by understanding your needs through detailed research and analysis." },
  { title: "Analyzing", description: "We analyze the gathered information to plan an effective strategy." },
  { title: "Design", description: "Our team designs a user-friendly and aesthetically pleasing solution." },
  { title: "Discussion", description: "We discuss the design and plan with you to ensure it meets your requirements." },
  { title: "Development", description: "We develop the solution using the latest technologies and best practices." },
  { title: "Testing", description: "Rigorous testing is performed to ensure quality and functionality." },
  { title: "Shortout Bugs", description: "Any bugs found are fixed promptly to ensure a smooth experience." },
  { title: "Deployment", description: "The final product is deployed to the production environment and made live." }
];

const Testimonials = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prevStep => (prevStep + 1) % workflowSteps.length);
    }, 3000); // Change step every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <h2>Our Workflow</h2>
      <div className="workflow-container">
        {workflowSteps.map((step, index) => (
          <div key={index} className="workflow-step">
            <div
              className={`workflow-card ${currentStep === index ? 'active' : ''}`}
              style={{
                '--gradient-start': index === 0 ? '#ff6347' : `var(--gradient-end-${index - 1})`,
                '--gradient-end': `var(--gradient-start-${index})`
              }}
            >
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            {index < workflowSteps.length - 1 && (
              <div className="arrow"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
