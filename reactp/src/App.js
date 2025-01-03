
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Testing a Responsive Form</h1>
      <form className="responsive-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" placeholder="Enter your address" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Your message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
