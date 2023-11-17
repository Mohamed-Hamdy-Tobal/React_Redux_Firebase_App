import React from 'react'

export const Notifications = () => {
    return (
        <div className='notifications'>
            <div className="card z-depth-0 project-summary pro-card">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-tit" style={{ fontSize: '26px',fontWeight: '500',marginBottom: '10px',display: 'block'}}>Notifications</span>
                    <ul className="notifications-list">
                        <li>
                            <span className='pink-text'>Mohamed Tobal </span>
                            <span className='content'>notification content</span>
                            <div className='grey-text note-date'>a few seconds ago</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
