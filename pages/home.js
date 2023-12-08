// pages/home.js
import Link from 'next/link';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Fast Food Facts</h1>
      <p className="text-lg mb-8">Your source for quick nutrient information!</p>
    </div>
  );
};

export default Home;
