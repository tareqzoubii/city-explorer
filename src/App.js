import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from './Main'
import Weather from "./Weather";

class App extends React.Component {
render() {
  return (
    <div >
    <Header />
    <Main />
    <Weather />
    <Footer />
    </div>
  )
}
}
export default App;
