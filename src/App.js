import Home from "./routes/home/home.component";
import {Routes,Route} from 'react-router-dom';

import Navigationbar from "./routes/Navigation/navigation.component";
import Authantication from "./routes/Authantication/Authantication.component";
const Shop = ()=> {
    return (<h1>hello ji </h1>)
}
const  App=()=> {
  return (
        <Routes>
            
            <Route path="/" element={<Navigationbar/>}>
                <Route index={true} element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/auth" element={<Authantication/>}/>
            </Route>
          
        </Routes>
  );
}

export default App;
