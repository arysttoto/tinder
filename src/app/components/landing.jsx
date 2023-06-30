import Navbar from "./navbar";
import Balancer from "react-wrap-balancer"; 

export default function LandingPage() {
    return (
        <>
        <Navbar /> 
        <div className="landing flex h-screen flex-col items-center justify-center">  
            <div className="px-5 xl:px-0">  
              <h1      
                className="transform -rotate-45 z-10 bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-100 drop-shadow-sm md:text-7xl md:leading-[5rem]" 
                style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}  
              >   
                <Balancer>
                    Kinder 
                </Balancer>
              </h1> 
              <p
                className="transform rotate-135 z-10 mt-6 animate-fade-up text-center text-gray-500 opacity-100 md:text-xl"
                style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
              >  
                <Balancer>
                  Go log in!
                </Balancer>   
              </p> 
            </div> 
        </div>  
        </>
    );
} 