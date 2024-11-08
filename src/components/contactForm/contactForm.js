import React, { useState, useContext, useRef } from "react";
import "./contactForm.scss";
import StyleContext from "../../contexts/StyleContext";

export default function ContactForm() {
  const formRef = useRef(null);
  const { isDark } = useContext(StyleContext);
  const [result, setResult] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setShowTooltip(true);

    const formData = new FormData(formRef.current);
    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      formRef.current.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    setTimeout(() => setShowTooltip(false), 3000); // Hides tooltip after 3 seconds
  };

  return (
    <div className={`form-card1 ${isDark ? "dark-form-card1" : "form-card1"}`}>
      <div className="form-card2">
        <form className={`form ${isDark ? "form-dark" : "form"}`} ref={formRef} onSubmit={onSubmit}>
          <p className="form-heading">Get In Touch</p>

          <div className="form-field">
            <input required placeholder="Name" name="name" className="input-field" type="text" />
          </div>

          <div className="form-field">
            <input required placeholder="Email" name="email" className="input-field" type="email" />
          </div>

          <div className="form-field">
            <input required placeholder="Subject" name="subject" className="input-field" type="text" />
          </div>

          <div className="form-field">
            <textarea required placeholder="Message" name="message" cols="30" rows="3" className="input-field"></textarea>
          </div>

          <button type="submit" className="sendMessage-btn">Send Message</button>

           {showTooltip && (
            <div className={`feedback-tooltip ${showTooltip ? "feedback-visible" : ""}`}>
              {result}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
