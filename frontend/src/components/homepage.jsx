import Calender from "./Calender";
import Chatbot from "./chatbot";
import Header from "./header";

function Homepage() {
  return (
    <div>
      <Header/>
      <div className="main-content">
        <Chatbot/>
        <div className="right-panel">
          <Calender/>
          
        </div>
      </div>

    </div>
  );
}
export default Homepage;