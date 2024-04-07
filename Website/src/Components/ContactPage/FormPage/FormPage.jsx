// import React, { useRef } from "react";
// import emailjs from 'emailjs-com';

// import "./FormPage.css";

// function FormPage() {
//   const form = useRef();
//   const emailService = process.env.REACT_APP_EMAIL_SERVICE_ID;
//   const templateId = process.env.REACT_APP_TEMPLATE_ID;
//   const publicKey = process.env.REACT_APP_PUBLIC_KEY;

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(emailService, templateId, form.current, publicKey).then(
//       (result) => {
//         console.log(result.text);
//         alert("Message sent successfully!");
//         form.current.reset();
//       },
//       (error) => {
//         alert("Message Not Send, Retry after Sometime!!");
//         console.log(error.text);
//       }
//     );
//   };

//   return (
//     <div className="Form">
//       <form ref={form} onSubmit={sendEmail}>
//         <div className="contatusform-name">
//           <label>Name</label>
//           <input type="text" name="to_name" required />
//         </div>
//         <div className="contactusform-email">
//           <label>Email</label>
//           <input type="email" name="from_name" required />
//         </div>
//         <div className="contactform-msg">
//           <label>Message</label>
//           <textarea
//             name="message"
//             placeholder="Type something here!"
//             required
//           />
//         </div>
//         <button type="submit" className="submit-btn">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default FormPage;




// import React, { useRef } from "react";
// import emailjs from 'emailjs-com';

// import "./FormPage.css";

// function FormPage() {
//   const form = useRef();
//   const emailService = process.env.REACT_APP_EMAIL_SERVICE_ID;
//   const templateId = process.env.REACT_APP_TEMPLATE_ID;
//   const publicKey = process.env.REACT_APP_PUBLIC_KEY;

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(emailService, templateId, form.current, publicKey).then(
//       (result) => {
//         console.log(result.text);
//         alert("Message sent successfully!");
//         form.current.reset();
//       },
//       (error) => {
//         alert("Message Not Send, Retry after Sometime!!");
//         console.log(error.text);
//       }
//     );
//   };

//   return (
//     <div className="form-container">
//       <div className="ring">
//         <i style={{ "--clr": "#00ff0a" }}></i>
//         <i style={{ "--clr": "#ff0057" }}></i>
//         <i style={{ "--clr": "#fffd44" }}></i>
//         <div className="login">
//           <h2>Contact Us</h2>
//           <div className="inputBx">
//             <input type="text" placeholder="Username" />
//           </div>
//           <div className="inputBx">
//             <input type="email" placeholder="email" />
//           </div>
//           <div className="inputBx">
//             <input type="text" placeholder="Message" />
//           </div>
//           <div className="inputBx">
//             <input type="submit" value="Submit" />
//           </div>
          
          
//         </div>
//       </div>
      
//     </div>
//   );
// }

// export default FormPage;

import React, { useState } from "react";
// Remove 'emailjs' import if not used
// import emailjs from 'emailjs-com'; 

import "./FormPage.css";

function FormPage() {
  // Remove 'form', 'emailService', 'templateId', and 'publicKey' declarations if not used
  // const form = useRef();
  // const emailService = process.env.REACT_APP_EMAIL_SERVICE_ID;
  // const templateId = process.env.REACT_APP_TEMPLATE_ID;
  // const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: ""
  });

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Check if any input field is empty
    if (!formData.username || !formData.email || !formData.message) {
      alert("Please fill all the fields!"); // Display an alert message
      return;
    }

    // If all fields are filled, continue with form submission
    alert("Form submitted!"); // Display an alert message
    // Add further logic for form submission here, such as sending data to backend or email service
  };

  return (
    <div className="form-container">
      <div className="ring">
        <i style={{ "--clr": "#00ff0a" }}></i>
        <i style={{ "--clr": "#ff0057" }}></i>
        <i style={{ "--clr": "#fffd44" }}></i>
        <div className="login">
          <h2>Form</h2>
          {/* Form element with onSubmit event handler */}
          <form onSubmit={handleSubmit}>
            <div className="inputBx">
              <input 
                type="text" 
                placeholder="Username" 
                name="username"
                value={formData.username}
                onChange={handleInputChange} 
              />
            </div>
            <div className="inputBx">
              <input 
                type="email" 
                placeholder="Email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange} 
              />
            </div>
            <div className="inputBx">
              <input 
                type="text" 
                placeholder="Message" 
                name="message"
                value={formData.message}
                onChange={handleInputChange} 
              />
            </div>
            <div className="inputBx">
              {/* Submit button */}
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
