function Services() {
  const services = [
    'Technology Consulting',
    'Market Analysis',
    'Product Development',
    'Digital Marketing',
    'Cloud Solutions',
    'AI Integration'
  ];

  return (
    <div style={{ 
      padding: '40px',
      backgroundColor: '#f5f5f5',
      minHeight: 'calc(100vh - 160px)'
    }}>
      <h1 style={{ color: '#333', borderBottom: '2px solid #4CAF50' }}>Our Services</h1>
      <ul style={{ color: '#333', listStyle: 'none', padding: '20px' }}>
        {services.map((service, index) => (
          <li key={index} style={{
            padding: '15px',
            margin: '10px 0',
            backgroundColor: 'white',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;