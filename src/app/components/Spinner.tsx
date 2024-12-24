

const Spinner = () => {
  const spinnerColor = "bg-blue-600";
  return (
      <div className = "flex flex-grow relative w-screen h-screen items-center justify-center ">
      <div role="status">
          <div className="w-[150px] h-[150px] rounded-full bg-[conic-gradient(#0000_20%,_#1e3a8a)] mask-radial animate-spin"
            aria-hidden="true">
          </div>
      </div>
      {/*Spinner color tested so far :  #1f2937, #2563eb */}
      <p className = "absolute italic text-blue-900 text-lg font-semibold animate-pulse-fast">Loading...</p>
    </div>
  )
}

export default Spinner