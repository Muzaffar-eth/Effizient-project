import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer'

function App() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    age: '',
    highestLevelOfEducation: '',
    institueForHLE: '',
    course: '',
    workexp: '',
    futureGoals: '',
    canadaInstitueName: '',
    canadaInstitueCourse: '',
    originCountry: '',
    englishScoresListening: '',
    englishScoresReading: '',
    englishScoresSpeaking: '',
    englishScoresWriting: '',
    tuitionFeeStatus: 'false', 
    tuitionFeeAmount: '', 
    gicStatus: 'false', 
    gicAmount: '', 
  });

  const [showTuitionFeeAmount, setShowTuitionFeeAmount] = useState(false);
  const [showGICAmount, setShowGICAmount] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTuitionFeeStatusChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      tuitionFeeStatus: value,
    });
    setShowTuitionFeeAmount(value === 'true');
  };

  const handleGICStatusChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      gicStatus: value,
    });
    setShowGICAmount(value === 'true');
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    // Extract form data from e.target
    const formData = new FormData(e.target);

    // Create an object to hold the form data
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Now, formObject contains all the form data as key-value pairs

    // You can perform actions with the form data here, such as API requests
    // For example, you can send the form data to an API endpoint:
    try {
      const response = await fetch('your-api-endpoint-here', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        // Successful form submission, display a success alert
        alert('Form submitted successfully');
      } else {
        // Form submission failed, display an error alert
        alert('Form submission failed');
      }
    } catch (error) {
      // Handle network errors or other exceptions here
      // Display an error alert
      alert('An error occurred while submitting the form');
      console.error('An error occurred:', error);
    }

    // Reset the form if needed
    e.target.reset();
  };

  const handleTryNowClick = () => {
    // Find the form section by its id
    const formSection = document.getElementById('Form');

    if (formSection) {
      // Scroll to the form section smoothly
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="https://effizient.ca/assets/img/logo.png" alt="Logo" />
        </div>
        <div className="header-links">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
      </header>
      <main className="main">
        <div className="card">
          <h1 className="card-heading">Personalized SOP Generator</h1>
          <p className="card-tagline">Crafting Statements of Purpose Tailored Just for You</p>
          <button className="try-now-button" onClick={handleTryNowClick} >Try Now</button>
        </div>
      </main>
      <div className="form-container" id='Form'>
        <div className="card2">
          <p>Fill this questionnaire for the student. After submitting, you will receive an email at the email address that you have provided with a Statement of Purpose customized for you. You can use and modify that as per your needs. </p>
          <p>If you would like to get it edited, reviewed, or drafted by our experts, you can get in touch with us:<a href="https://effizient-immigration-inc.square.site/s/shop">https://effizient-immigration-inc.square.site/s/shop</a></p>
          <form onSubmit={handleSubmitForm}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name *</label>
              <input type="text" id="fullname" name="fullname" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age *</label>
              <input type="number" id="age" name="age" required />
            </div>

            <div className="form-group">
              <label htmlFor="highestLevelOfEducation">Highest Level of Education *</label>
              <select id="highestLevelOfEducation" name="highestLevelOfEducation" required>
                <option value="">Choose a Option</option>
                <option value="12 Grade">12 Grade</option>
                <option value="Diploma">Diploma</option>
                <option value="Bachelor's degree">Bachelor's degree</option>
                <option value="Master's degree">Master's degree</option>
                <option value="PhD">PhD</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="institueForHLE">Institute where you completed your highest level of education *</label>
              <input type="text" id="institueForHLE" name="institueForHLE" required />
            </div>

            <div className="form-group">
              <label htmlFor="course">What did you study *</label>
              <input type="text" id="course" name="course" required />
            </div>

            <div className="form-group">
              <label htmlFor="workexp">Do you have any relevant work experience? *</label>
              <textarea id="workexp" name="workexp" required />
            </div>

            <div className="form-group">
              <label htmlFor="futureGoals">What are your future goals? *</label>
              <textarea id="futureGoals" name="futureGoals" required />
            </div>

            <div className="form-group">
              <label htmlFor="canadaInstitueName">What institute did you get admitted to in Canada? *</label>
              <input type="text" id="canadaInstitueName" name="canadaInstitueName" required />
            </div>

            <div className="form-group">
              <label htmlFor="canadaInstitueCourse">What is your program of study in Canada? *</label>
              <input type="text" id="canadaInstitueCourse" name="canadaInstitueCourse" required />
            </div>

            <div className="form-group">
              <label htmlFor="originCountry">Which country are you applying from? *</label>
              <input type="text" id="originCountry" name="originCountry" required />
            </div>

            <div className="form-group">
              <label htmlFor="englishScoresListening">English Scores - Listening *</label>
              <input type="number" id="englishScoresListening" name="englishScoresListening" required />
            </div>

            <div className="form-group">
              <label htmlFor="englishScoresReading">English Scores - Reading *</label>
              <input type="number" id="englishScoresReading" name="englishScoresReading" required />
            </div>

            <div className="form-group">
              <label htmlFor="englishScoresSpeaking">English Scores - Speaking *</label>
              <input type="number" id="englishScoresSpeaking" name="englishScoresSpeaking" required />
            </div>

            <div className="form-group">
              <label htmlFor="englishScoresWriting">English Scores - Writing *</label>
              <input type="number" id="englishScoresWriting" name="englishScoresWriting" required />
            </div>

            <div className="form-group">
              <label>Did you pay your first year tuition? *</label>
              <div className="form-radio">
              <label htmlFor="gicStatusFalse" className="radio-label">
                No
                <input
                  type="radio"
                  id="tuitionFeeStatusFalse"
                  name="tuitionFeeStatus"
                  value="false"
                  required
                  onChange={handleTuitionFeeStatusChange}
                />
                
                </label>
                <label htmlFor="gicStatusTrue" className="radio-label">
                  Yes
                <input className='radio1'
                  type="radio"
                  id="tuitionFeeStatusTrue"
                  name="tuitionFeeStatus"
                  value="true"
                  required
                  onChange={handleTuitionFeeStatusChange}
                />
                </label>
                
                {showTuitionFeeAmount && (
                  <input
                    type="text"
                    id="tuitionFeeAmount"
                    name="tuitionFeeAmount"
                    placeholder="Amount"
                    onChange={handleInputChange}
                  />
                )}
              </div>
            </div>

            <div className="form-group">
  <label>Did you do a GIC? *</label>
  <div className="form-radio">
    <label htmlFor="gicStatusFalse" className="radio-label">
      No
      <input
        type="radio"
        id="gicStatusFalse"
        name="gicStatus"
        value="false"
        required
        onChange={handleGICStatusChange}
      />
      
    </label>
    <label htmlFor="gicStatusTrue" className="radio-label">
      Yes
      <input className='radio1'
        type="radio"
        id="gicStatusTrue"
        name="gicStatus"
        value="true"
        required
        onChange={handleGICStatusChange}
      />
      
    </label>
    {showGICAmount && (
      <input
        type="text"
        id="gicAmount"
        name="gicAmount"
        placeholder="Amount"
        onChange={handleInputChange}
      />
    )}
  </div>
</div>


            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
    
  );
  
}

export default App;
