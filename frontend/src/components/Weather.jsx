

function Weather() {
    return (
        <div className="weather-container">
            <div className="weather-header">
                Weather Today
            </div>
            <div className="weather-body">
                <div className="current-weather">
                    <div className="temperature">72°</div>
                    <div className="weather-condition">Partly Cloudy</div>
                    <div className="location">Chicago, IL</div>
                </div>
                <div className="weather-details">
                    <div className="weather-detail">
                        <div className="weather-detail-label">Humidity</div>
                        <div className="weather-detail-value">65%</div>
                    </div>
                    <div className="weather-detail">
                        <div className="weather-detail-label">Wind</div>
                        <div className="weather-detail-value">8 mph</div>
                    </div>
                    <div className="weather-detail">
                        <div className="weather-detail-label">Feels Like</div>
                        <div className="weather-detail-value">75°</div>
                    </div>
                    <div className="weather-detail">
                        <div className="weather-detail-label">UV Index</div>
                        <div className="weather-detail-value">6</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;