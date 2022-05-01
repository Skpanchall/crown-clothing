import Home from "./routes/home/home.component";
import {Routes,Route} from 'react-router-dom';

import Navigationbar from "./routes/Navigation/navigation.component";
import Authantication from "./routes/Authantication/Authantication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
const  App=()=> {
  return (
        <Routes>
            <Route path="/" element={<Navigationbar/>}>
                <Route index={true} element={<Home/>}/>
                <Route path="/shop/*" element={<Shop/>}/>
                <Route path="/auth" element={<Authantication/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Route>
        </Routes>
  );
}

export default App;
