import Directory from "../../Components/Directory/Directory.component";
import { Outlet } from "react-router-dom";
const  Home =() => {

  return (
      <>
      <Directory />
      <Outlet/>
      </>
  );
}

export default Home;
 