import "../style/homepage.css";

function Calender() {
  return (
    <>
      <div className="calendar-container">
                <div className="calendar-header">
                    <button className="calendar-nav" onclick="changeMonth(-1)">‹</button>
                    <span id="currentMonth">August 2025</span>
                    <button className="calendar-nav" onclick="changeMonth(1)">›</button>
                </div>
                <div className="calendar-body">
                    <div clasn
                    s="calendar-grid" id="calendarGrid">
                    </div>
                </div>
            </div>
    </>
  );
}

export default Calender;