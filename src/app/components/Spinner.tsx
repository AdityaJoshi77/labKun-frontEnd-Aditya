

const Spinner = () => {
  console.log("Bhai dekh ye Spinner chala to tha");
  return (
      <div className = "flex flex-grow w-screen h-screen items-center justify-center ">
      <div role="status">

          <div
            className="w-[150px] h-[150px] rounded-full bg-[conic-gradient(#0000_20%,_#2563eb)] mask-radial animate-spin"
            aria-hidden="true">
          </div>

      </div>
    </div>
  )
}

export default Spinner