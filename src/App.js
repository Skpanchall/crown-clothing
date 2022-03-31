import Home from "./routes/home/home.component";
import {Routes,Route} from 'react-router-dom';

import Navigationbar from "./routes/Navigation/navigation.component";
import Signin from "./routes/sign-in/sign-in.component";
const Shop = ()=> {
    return (<h1>hello ji </h1>)
}
const  App=()=> {
  return (
        <Routes>
            
            <Route path="/" element={<Navigationbar/>}>
                <Route index={true} element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/sign-in" element={<Signin/>}/>
            </Route>
          
        </Routes>
  );
}

export default App;
