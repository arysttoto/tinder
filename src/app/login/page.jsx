'use client' 
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";


export default function LoginPage() { 
    const [password, setPassword] = useState('');
    const [checkboxPosition, setCheckboxPosition] = useState({ x: 0, y: 0 });
    const [formCompleted, setFormCompleted] = useState(false); 
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleMouseMove = (event) => {
      setCheckboxPosition({ x: event.clientX, y: event.clientY });
    };
  
    const playMeowSound = () => {
      const audio = new Audio('/meow.mp3');
      audio.play();
    };
  
    return (
      <>
        <style>{`
          .cat {
            background-color: #f19b1a;
            height: 65px;
            width: 80px;
            border-radius: 0 80px 80px 0;
            position: absolute;
            bottom: 60px;
            right: 50px;
        }
        .ear {
            height: 15px;
            width: 15px;
            background-color: #f19b1a;
            position: absolute;
            bottom: 64px;
            left: 8px;
            border-radius: 20px 0 0 0;
            box-shadow: 25px 0 #f19b1a;
        }
        .eye,
        .eye:before {
            height: 7px;
            width: 10px;
            border: 2px solid #2c2c2c;
            position: absolute;
            border-radius: 0 0 15px 15px;
            border-top: none;
        }
        .eye {
            top: 18px;
            left: 15px;
        }
        .eye:before {
            content: "";
            left: 30px;
        }
        .nose {
            background-color: #ffffff;
            height: 12px;
            width: 12px;
            border-radius: 50%;
            position: absolute;
            top: 32px;
            left: 25px;
            box-shadow: 12px 0 #ffffff;
        }
        .nose:before {
            content: "";
            width: 12px;
            height: 8px;
            position: absolute;
            background-color: #ffffff;
            left: 6px;
        }
        .nose:after {
            content: "";
            position: absolute;
            height: 0;
            width: 0;
            border-top: 8px solid #ef926b;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            bottom: 7px;
            left: 6px;
        }
        .mouth {
            background-color: #2c2c2c;
            height: 15px;
            width: 17px;
            position: absolute;
            border-radius: 0 0 5px 5px;
            top: 38px;
            left: 27px;
            animation: mouth-move 2s infinite;
            transform-origin: top;
        }
        @keyframes mouth-move {
            50% {
                transform: scaleY(0.7);
            }
        }
        .body {
            background-color: #f19b1a;
            height: 90px;
            width: 140px;
            position: absolute;
            right: 65px;
            bottom: 0;
            border-radius: 60px 60px 0 0;
            animation: sleep 2s infinite;
            transform-origin: bottom right;
        }
        @keyframes sleep {
            50% {
                transform: scale(0.9, 1.05);
            }
        }
        .tail {
            background-color: #d07219;
            height: 20px;
            width: 100px;
            position: absolute;
            right: 150px;
            bottom: 0;
            border-radius: 20px 0 0 20px;
        }
        .body:before {
            content: "";
            position: absolute;
            background-color: #ffffff;
            height: 12px;
            width: 30px;
            border-radius: 6px;
            bottom: 0;
            left: 22px;
            box-shadow: 45px 0 #ffffff;
        }
        .bubble {
            height: 20px;
            width: 20px;
            background-color: rgba(255, 255, 255, 0.4);
            position: absolute;
            left: 65px;
            top: 20px;
            border-radius: 50px 50px 50px 5px;
            animation: bubble-scale 2s infinite;
        }
        @keyframes bubble-scale {
            50% {
                transform: scale(1.6);
            }
        }
        `}</style>
        <Navbar />
        <div
          className="flex flex-col items-center justify-center h-screen"
          style={{ transform: 'rotate(180deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onMouseMove={handleMouseMove}
        >
          <div
            style={{
              width: '400px',
              height: '400px',
              padding: '20px',
              border: '2px solid black',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gridTemplateRows: '1fr 1fr 1fr',
              gap: '20px',
            }}
          >
            <h1
              className="text-center"
              style={{ fontFamily: 'Comic Sans MS', fontSize: '3rem' }}
            >
              Welcome to Login Page!
            </h1>
            <div style={{ textAlign: 'center' }}>
              <label htmlFor="username">Username:</label>
              <input className="transform rotate-180" type="text" id="username" style={{ marginLeft: '10px' }} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <label htmlFor="password">Password:</label>
              <input
              className=""
                type="text"
                id="password"
                style={{
                  marginLeft: '14px',
                  fontSize: password ? '2rem' : '1rem',
                }}
                value={password}
                onChange={handlePasswordChange}
              />
            </div> 
            <div style={{ textAlign: 'center' }}>
              <h1>Press the cat to login</h1>  
              <div class="cat" onClick={playMeowSound}> 
                  <div class="ear"></div>  
                  <div class="eye"></div>  
                  <div class="mouth"></div>
                  <div class="nose"></div>
                  <div class="tail"></div>
                  <div class="body"></div>
                  <div class="bubble"></div>
                </div> 
              </div>
            </div>
          <div
            style={{
              position: 'absolute',   
              left: checkboxPosition.x,
              top: checkboxPosition.y,
              transition: 'left 0.5s, top 0.5s',
            }}
            onMouseEnter={handleMouseMove}
          >
            <label htmlFor="box">Do you like pineapple pizza?</label> 
            <input name="box" type="checkbox" /> 
          </div>
        </div>
      </>
    );
  }