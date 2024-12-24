

const Spinner = () => {
  const spinnerColor = "bg-blue-600";
  return (
      <div className = "flex flex-grow relative w-screen h-screen items-center justify-center ">
      <div role="status">
          <div className="w-[140px] h-[140px] rounded-full bg-conic-spinner mask-radial animate-spin text-blue-900"
          aria-hidden="true">
          </div>
      </div>
      <p className = "absolute italic text-blue-900 text-lg font-semibold animate-pulse-fast">Loading...</p>
    </div>
  )
}

export default Spinner