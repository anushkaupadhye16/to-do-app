import React, { useState } from "react";

const HeroComponent = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isThankYouVisible, setThankYouVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    language: [],
    email: "",
    terms: false,
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "language") {
      setFormData((prevData) => ({
        ...prevData,
        language: checked
          ? [...prevData.language, value]
          : prevData.language.filter((lang) => lang !== value),
      }));
    } else if (type === "checkbox" && name === "terms") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleButtonClick = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    if (!formData.terms) {
      alert("Please agree to the terms and conditions before submitting.");
      return;
    }
    setFormVisible(false); // Closes the form
    setThankYouVisible(true); // Shows the Thank You pop-up
  };

  const handleCloseThankYou = () => {
    setThankYouVisible(false);
  };

  return (
    <>
      <div className={`container-md hero-section ${isFormVisible || isThankYouVisible ? "blur" : ""}`}>
        <h1>
          Simplify Your Life with Our <br /> Todo App
        </h1>
        <p>
          Stay organized and boost your productivity with our intuitive todo
          website.
          <br /> Experience a modern approach to task management that fits your
          lifestyle.
        </p>
        <br />
        <div className="btn">
          <button
            type="button"
            className="btn btn-outline-warning get"
            onClick={handleButtonClick}
          >
            <span>Get Started</span>
          </button>
          <button type="button" className="btn btn-outline-warning learn">
            Learn More
          </button>
        </div>
      </div>
      {isFormVisible && (
        <div className="overlay">
          <div className="form-container">
            <button className="close-button" onClick={handleCloseForm}>
              &times;
            </button>
            <h2>Get Started Today!</h2>
            <p>Fill in your details and take control of your tasks.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleInputChange}
                      required
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleInputChange}
                      required
                    />
                    Female
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>Language</label>
                <div className="checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      name="language"
                      value="english"
                      checked={formData.language.includes("english")}
                      onChange={handleInputChange}
                    />
                    English
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="language"
                      value="hindi"
                      checked={formData.language.includes("hindi")}
                      onChange={handleInputChange}
                    />
                    Hindi
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="language"
                      value="marathi"
                      checked={formData.language.includes("marathi")}
                      onChange={handleInputChange}
                    />
                    Marathi
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    required
                  />
                  I agree to the <a href="#terms">terms and conditions</a>
                </label>
              </div>
              <button type="submit" className="done-button">
                Done
              </button>
            </form>
          </div>
        </div>
      )}
      {isThankYouVisible && (
        <div className="overlay">
          <div className="thank-you-container">
            <button className="close-button" onClick={handleCloseThankYou}>
              &times;
            </button>
            <h2>Thank You!</h2>
            <p>Thank you for your interest! We’ll get back to you soon.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroComponent;
