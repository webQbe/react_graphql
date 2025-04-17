import React from 'react'
import classNames from 'classnames' // To add Bootstrap classes dynamically

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
                        <h4>Mission:{' '}
                            {/* Conditionally apply Bootstrap text color classes */}
                            <span className={classNames({
                                'text-success': launch_success, /* Color text green if launch_success is true */
                                'text-danger': !launch_success  /* Color text red if launch_success is false */
                            })}>
                                { mission_name }
                            </span>
                        </h4>
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