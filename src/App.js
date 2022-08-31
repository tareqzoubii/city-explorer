import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from './Main'
//import Weather from "./Weather";
import ThirdParty from "./ThirdParty";

class App extends React.Component {
render() {
  return (
    <div >
    <Header />
    <Main />
    <ThirdParty />
    <Footer />
    </div>
  )
}
}
export default App;
