// import React, { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//   const [form, setForm] = useState({
//     name: '',
//     number: '',
//     email: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', form);
//   };

//   return (
//     <section id="contact" className="contact">
//       <div className="contact-container">
//         <h2>Contact Us</h2>
//         <form onSubmit={handleSubmit} className="contact-form">
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="number">Number</label>
//             <input
//               type="tel"
//               id="number"
//               name="number"
//               value={form.number}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="description">Description</label>
//             <textarea
//               id="description"
//               name="description"
//               value={form.description}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Name" required />
        <input type="tel" name="phone" placeholder="Phone Number" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" rows="4" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
