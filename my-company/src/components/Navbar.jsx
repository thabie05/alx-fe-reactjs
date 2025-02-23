import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      padding: '20px',
      backgroundColor: '#333',
      color: 'white',
      marginBottom: '20px'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
    </div>
  );
}

export default Navbar;