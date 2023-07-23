import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [formSubmissions, setFormSubmissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!name || !email || !phone || !address) {
      alert('Please fill in all fields');
      return;
    }

    
    if (name.length < 3) {
      alert('Name must be at least 3 characters long');
      return;
    }

    if (!validateEmail(email)) {
      alert('Invalid email address');
      return;
    }

    if (!validatePhone(phone)) {
      alert('Invalid phone number');
      return;
    }

    
    const formData = { name, email, phone, address };
    setFormSubmissions((prevSubmissions) => [...prevSubmissions, formData]);

    
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  const validateEmail = (email) => {
  
    const re = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
  
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className="mini">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <br />
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>

      {formSubmissions.length > 0 && (
        <div className="form-output">
          <h3>Form Submissions:</h3>
          {formSubmissions.map((submission, index) => (
            <div key={index}>
              <h4>Submission {index + 1}:</h4>
              <p>Name: {submission.name}</p>
              <p>Email: {submission.email}</p>
              <p>Phone: {submission.phone}</p>
              <p>Address: {submission.address}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
