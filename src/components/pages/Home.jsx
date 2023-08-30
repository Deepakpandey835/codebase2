import React from 'react';
import python from '../../assests/images/python.png';
import java from '../../assests/images/java.png';
import ruby from '../../assests/images/ruby.png';
import node from '../../assests/images/node.png';
import react from '../../assests/images/react.png';
import typescript from '../../assests/images/typescript.png';

export const Home = () => {
  return (
    <div className="container px-16 py-12 mx-auto">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
        {/* Python Card */}
        <div className="p-2">
          <div className="bg-white shadow-md hover:border-2 hover:border-indigo-400 p-4">
            <div className="h-40 overflow-hidden rounded-lg">
              <img src={python} alt="Python" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-black mt-2">Python</h2>
            <p className="text-base leading-relaxed mt-2 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.Obcaecati quod officia labore aspernatur necessitatibus optio,
            </p>
            <a className="inline-block mt-4 text-2xl text-indigo-600">Explore</a>
          </div>
        </div>
  
        {/* Java Card */}
        <div className="p-2">
          <div className="bg-white shadow-md hover:border-2 hover:border-indigo-400 p-4">
            <div className="h-40 overflow-hidden rounded-lg">
              <img src={java} alt="Java" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-black mt-2">Java</h2>
            <p className="text-base leading-relaxed mt-2 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.Obcaecati quod officia labore aspernatur necessitatibus optio,
            </p>
            <a className="inline-block mt-4 text-2xl text-indigo-600">Explore</a>
          </div>
        </div>
        {/* Ruby Card */}
        <div className="p-2">
          <div className="bg-white shadow-md hover:border-2 hover:border-indigo-400 p-4">
            <div className="h-40 overflow-hidden rounded-lg">
              <img src={ruby} alt="Ruby" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-black mt-2">Ruby</h2>
            <p className="text-base leading-relaxed mt-2 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.Obcaecati quod officia labore aspernatur necessitatibus optio,
            </p>
            <a className="inline-block mt-4 text-2xl text-indigo-600">Explore</a>
          </div>
        </div>
        {/* JavaScript Card */}

        <div className="p-2">
          <div className="bg-white shadow-md hover:border-2 hover:border-indigo-400 p-4">
            <div className="h-40 overflow-hidden rounded-lg">
              <img src={node} alt="Ruby" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-black mt-2">Ruby</h2>
            <p className="text-base leading-relaxed mt-2 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.Obcaecati quod officia labore aspernatur necessitatibus optio,
            </p>
            <a className="inline-block mt-4 text-2xl text-indigo-600">Explore</a>
          </div>
        </div>
        {/* React Card */}
        <div className="p-2">
          <div className="bg-white shadow-md hover:border-2 hover:border-indigo-400 p-4">
            <div className="h-40 overflow-hidden rounded-lg">
              <img src={react} alt="Ruby" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-black mt-2">Ruby</h2>
            <p className="text-base leading-relaxed mt-2 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.Obcaecati quod officia labore aspernatur necessitatibus optio,
            </p>
            <a className="inline-block mt-4 text-2xl text-indigo-600">Explore</a>
          </div>
        </div>
        {/* TypeScript Card */}
        <div className="p-2">
          <div className="bg-white shadow-md hover:border-2 hover:border-indigo-400 p-4">
            <div className="h-40 overflow-hidden rounded-lg">
              <img src={typescript} alt="Ruby" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-black mt-2">Ruby</h2>
            <p className="text-base leading-relaxed mt-2 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.Obcaecati quod officia labore aspernatur necessitatibus optio,
            </p>
            <a className="inline-block mt-4 text-2xl text-indigo-600">Explore</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
