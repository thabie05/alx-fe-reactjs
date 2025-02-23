import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will respond shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ 
      padding: '40px',
      backgroundColor: '#e6e6fa',
      minHeight: 'calc(100vh - 160px)'
    }}>
      <h1 style={{ color: '#333', borderBottom: '2px solid #6a5acd' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '30px auto' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '12px',
            margin: '10px 0',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '12px',
            margin: '10px 0',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '12px',
            margin: '10px 0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            height: '150px'
          }}
          required
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#6a5acd',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;