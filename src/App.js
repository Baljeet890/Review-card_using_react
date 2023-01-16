import logo from './logo.svg';
import './App.css';
import {FaGithubSquare} from 'react-icons/fa'; 
import './compnent/Review.css';
import Review from './compnent/Review';

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
           <h2>our Reviews</h2>
           <div className='underline'></div>
        </div>
      <Review/>
      </section>
    </main>
  );
}

export default App;
