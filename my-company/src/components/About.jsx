function About() {
  return (
    <div style={{ 
      padding: '40px',
      backgroundColor: '#fff0f5',
      minHeight: 'calc(100vh - 160px)'
    }}>
      <h1 style={{ color: '#333', borderBottom: '2px solid #ff69b4' }}>About Us</h1>
      <p style={{ color: '#333', fontSize: '1.1em', marginTop: '20px' }}>
        Founded in 1990, we've been at the forefront of innovation in technology,
        marketing, and consultancy. Our team of experts is committed to delivering
        tailored solutions for your business needs.
      </p>
    </div>
  );
}

export default About;