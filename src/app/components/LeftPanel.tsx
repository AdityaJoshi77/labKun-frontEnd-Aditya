const LeftPanel = () => {
    return (
      <div className="w-full md:w-1/2 h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col justify-center items-start p-8 relative">
       
        <img
          src="/images/signin.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
  
   
        <h1 className="absolute top-4 right-8 text-lg font-bold text-gray-200 tracking-wide">
          Virtual-Labs
        </h1>
  
        <div className="z-10 text-left w-full mt-32 ml-4">
          
          <p className="text-5xl font-extralight text-gray-100 leading-snug mb-4 -ml-5 -mt-60">
            Don't Dream, <br />
            Start coding <br /> Today.
          </p>
  
          <p className="text-lg text-gray-300 mt-7 -ml-4">
            Make it happen — complete your assignments like a pro.
          </p>
        </div>
      </div>
    );
  };
  
  export default LeftPanel;
  