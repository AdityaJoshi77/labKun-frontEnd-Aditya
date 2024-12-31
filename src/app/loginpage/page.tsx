
import Loginbox from "../components/loginbox";
import LeftPanel from "../components/LeftPanel";

const LoginPage = () => {
  return (
    
    // outer most div

    <main className = 'flex flex-row md:1/2 bg-gradient-to-br from-blue-50 to-blue-100'>

        {/* left-half for hero image */}
        <LeftPanel/>

        {/* right-half for the details section */}
        <Loginbox/>

      </main>
  )
}

export default LoginPage;