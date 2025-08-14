import "../style/homepage.css";
import FullCalender from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calender() {
  return (
    <>
      <div className="calendar-container">
                <div className="calendar-header">
                    <button className="calendar-nav" >‹</button>
                    <span id="currentMonth">
                      <FullCalender height={1600}
                      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                      initialView="dayGridMonth"
                      headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                      }}
                      editable={true}
                      selectable={true}/>
                    </span>
                    <button className="calendar-nav" >›</button>
                </div>
                <div className="calendar-body">
                    <div className="calendar-grid" id="calendarGrid">
                    </div>
                </div>
                </div>
            
    </>
  );
}

export default Calender;