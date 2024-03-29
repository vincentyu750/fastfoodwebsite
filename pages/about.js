// pages/about.js
import Link from 'next/link';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">About Fast Food Facts</h1>
      <p className="text-lg mb-8">
        Fast Food Facts is dedicated to providing you with the latest and greatest in fast-food
        information.
      </p>
      <p className="text-lg mb-8">
        This website is an informative website to help people learn more about nutrition and know the nutrion info of popular food choices.
      </p>
    </div>
  );
};

export default About;
