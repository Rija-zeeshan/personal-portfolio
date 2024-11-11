'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

export default function About() {
  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen p-6">
      {/* Left side - Image */}
      <div className="flex-shrink-0 mr-10">
        <img src="/image/rija.png" alt="mypicture" className="w-48 h-48 rounded-full" />
      </div>

      {/* Right side - Heading */}
      <div>
        <h1 className="title-font sm:text-4xl text-3xl font-medium text-yellow-500">
          <Typewriter
            options={{
              strings: ['HEY THERE!', 'I am RIJA ZEESHAN', 'I Am Passionate Web Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        
      </div>
    </div>
  );
}

