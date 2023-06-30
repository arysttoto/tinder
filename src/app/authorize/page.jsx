'use client' 
import { useState, useRef, useEffect } from "react";
import Authorize from "../components/authorizationPage";


export default function AuthorizationPage() {
    const [passedCaptcha, setPassedCaptcha] = useState(false); 

    const MazeGame = () => {
        const canvasRef = useRef(null);
        let ctx;
        const wh = 60;
        let x = 60;
        let y = 60;
        let showwinscreen = false;
        const xy = [
          [0, 60], [60, 120], [0, 180], [0, 240], [0, 300], [0, 360], [60, 420], [0, 480],
          [600, 60], [600, 120], [540, 180], [600, 240], [600, 300], [600, 360],[540, 420], [600, 480],
          [60, 0], [120, 0], [180, 60], [240, 60], [300, 0], [360, 0], [420, 0], [480, 60], [540, 0],
          [60, 540], [120, 540], [180, 480], [240, 480], [300, 540], [360, 540], [420, 540], [480, 540], [540, 540],
          [360, 120], [420, 120], [180, 180], [300, 180], [360, 180], [120, 240], [180, 240], [480, 240], [300, 300], [360, 300], [480, 300], [120, 360], [240, 360], [420, 360], [360, 420], [420, 420]
        ];
    
        useEffect(() => {
          const canvas = canvasRef.current;
          ctx = canvas.getContext("2d");
          canvas.width = 660;
          canvas.height = 600;
        
          draw();
        
          // Event listeners for button clicks
          document.getElementById("leftBtn").addEventListener("click", left);
          document.getElementById("rightBtn").addEventListener("click", right);
          document.getElementById("upBtn").addEventListener("click", up);
          document.getElementById("downBtn").addEventListener("click", down);
        
          return () => {
            // Cleanup event listeners if necessary
            document.getElementById("leftBtn").removeEventListener("click", left);
            document.getElementById("rightBtn").removeEventListener("click", right);
            document.getElementById("upBtn").removeEventListener("click", up);
            document.getElementById("downBtn").removeEventListener("click", down);
          };
        }, []);
    
        function draw() {
          drawRect(0, 0, canvasRef.current.width, canvasRef.current.height, "silver");
        
          drawRect(0, 0, canvasRef.current.width, wh, "green");
          drawRect(0, 0, wh, canvasRef.current.height, "green");
          drawRect(0, canvasRef.current.height - wh, canvasRef.current.width, wh, "green");
          drawRect(canvasRef.current.width - wh, 0, wh, canvasRef.current.height, "green");
        
          // Draw the remaining obstacles
          // ...
        
          drawRect(x, y, wh, wh, "red");
        
          drawRect(540, 480, wh, wh, "#406fff");
        }
    
        function drawRect(x, y, width, height, color) {
          ctx.fillStyle = color;
          ctx.fillRect(x, y, width, height);
        }
    
        function checkWin() {
          if (x === 540 && y === 480) {
            ctx.font = "55px Verdana";
            ctx.fillText("You won", canvasRef.current.width / 2 - 100, canvasRef.current.height / 2 - 40);
        
            showwinscreen = true;
          }
        }
    
        function left() {
          if (showwinscreen) {
            return;
          }
          drawRect(x, y, wh, wh, "silver");
          x -= 60;
          for (let i = 0; i < xy.length; i++) {
            if (x === xy[i][0] && y === xy[i][1]) {
              x = 60;
              y = 60;
            }
          }
          drawRect(x, y, wh, wh, "red");
      
          checkWin();
        }
    
        function right() {
          if (showwinscreen) {
            return;
          }
          drawRect(x, y, wh, wh, "silver");
          x += 60;
          for (let i = 0; i < xy.length; i++) {
            if (x === xy[i][0] && y === xy[i][1]) {
              x = 60;
              y = 60;
            }
          }
          drawRect(x, y, wh, wh, "red");
      
          checkWin();
        }
    
        function up() {
          if (showwinscreen) {
            return;
          }
          drawRect(x, y, wh, wh, "silver");
          y -= 60;
          for (let i = 0; i < xy.length; i++) {
            if (x === xy[i][0] && y === xy[i][1]) {
              x = 60;
              y = 60;
            }
          }
          drawRect(x, y, wh, wh, "red");
      
          checkWin();
        }
    
        function down() {
          if (showwinscreen) {
            return;
          }
          drawRect(x, y, wh, wh, "silver");
          y += 60;
          for (let i = 0; i < xy.length; i++) {
            if (x === xy[i][0] && y === xy[i][1]) {
              x = 60;
              y = 60;
            }
          }
          drawRect(x, y, wh, wh, "red");
      
          checkWin();
        }
    
        return (
          <div>
            <canvas ref={canvasRef} id="canvas"></canvas>
            <div className="btn">
              <button id="leftBtn">Left</button>
              <button id="rightBtn">Right</button>
              <button id="upBtn">Up</button>
              <button id="downBtn">Down</button>
            </div>
        
            <style jsx>{`
              body {
                margin: 0;
                padding: 0;
              }
          
              button {
                margin: 0 20px;
                padding: 10px 20px;
                background: #ff0;
                color: #f50;
                border-radius: 12%;
                text-transform: uppercase;
                font-weight: bolder;
                outline: none;
              }
          
              canvas {
                position: absolute;
                margin: auto;
                left: 0;
                right: 0;
              }
          
              .btn {
                position: absolute;
                margin: auto;
                top: 0px;
                left: 0px;
                right: 0px;
                text-align: center;
              }
            `}</style>
          </div>
        );
      };
    
    return (
        <> 
        {
            passedCaptcha ? <Authorize /> : <MazeGame />
        }
        </>
    ); 
}