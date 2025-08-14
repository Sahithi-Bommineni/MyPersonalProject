import Calender from "./Calender";
import Chatbot from "./chatbot";
import Header from "./Header";
import Weather from "./Weather";

function Homepage() {
  return (
    <div className="homepage">
      <Header/>
      <div className="main-content">
        <Chatbot/>
        <div className="right-panel">
          <Calender/>
          <Weather/>
          
        </div>
      </div>
<div style={{height:"1500px", background:"rgba(100,0,0,0.1"}} > </div>
    </div>
  );
}
export default Homepage;