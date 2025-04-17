import React from 'react'

const LaunchItem = ({ // Destructure {launch} prop passed from Launches
                      launch : { flight_number,
                                 mission_name,
                                 launch_date_local,
                                 launch_success }
                    }) => { 
    return (
            <div className="card card-body mb-3"> 
            {/* Bootstrap card to neatly group content */}
                <div className="row">
                    {/* A 2-column Bootstrap layout */}
                    <div className="col-md-9">
                        {/* Left - Shows mission name and date */}
                        <h4>Mission: { mission_name }</h4>
                        <p>Date: { launch_date_local }</p>
                    </div>
                    <div className="col-md-3">
                        {/* Right - Bootstrap-styled button */}
                        <button className="btn btn-secondary">
                            Launch Details
                        </button>
                    </div>
                </div>

            </div>
    )
}

export default LaunchItem