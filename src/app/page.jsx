'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import LandingPage from './components/landing';
import Link from 'next/link';


export default function Home() {
  const [passedChallenge, setPassedChallenge] = useState(false); 

  function ChallengePage() {
    const [people, setPeople] = useState([
      { id: 1, top: 50, left: 50, visible: true },
      { id: 2, top: 200, left: 200, visible: true },
      { id: 3, top: 350, left: 350, visible: true },
    ]);
  
    const handlePersonClick = (personId) => {
      setPeople((prevPeople) =>
        prevPeople.map((person) =>
          person.id === personId ? { ...person, visible: false } : person
        )
      );
    };
  
    useEffect(() => {
      const checkPeopleVisibility = () => {
        if (people.every((person) => !person.visible)) {
          setPassedChallenge(true); 
        }
      };
  
      checkPeopleVisibility();
    }, [people]);
  
    useEffect(() => {
      const movePeople = () => {
        setPeople((prevPeople) =>
          prevPeople.map((person) => {
            if (!person.visible) return person;
  
            const randomTop = Math.random() * (window.innerHeight - 50);
            const randomLeft = Math.random() * (window.innerWidth - 50);
  
            return {
              ...person,
              top: randomTop,
              left: randomLeft,
            };
          })
        );
      };
  
      const interval = setInterval(movePeople, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div
        style={{
          position: 'relative',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
        }} 
      >
        {people.map((person) => (
          <span
            key={person.id}
            onClick={() => handlePersonClick(person.id)}
            style={{
              position: 'absolute',
              top: person.top,
              left: person.left,
              fontSize: '2rem',
              cursor: 'pointer',
              transition: 'all 0.5s ease',
              opacity: person.visible ? 1 : 0,
            }}
          >
            {person.visible ? '🔥' : ''}
          </span>
        ))}
      </div>
    );
  }
  return (
    <>
    {passedChallenge ? <LandingPage /> : <ChallengePage />} 
    </> 
  );
}
