import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeNotification } from '../../Store/Reducers/notificationReducer';
import bell from './../../assets/bell.png'

export const Notifications = () => {

    
    const {notifications, notiShow} = useSelector((state) => state.notificationsRed);
    const dispatch = useDispatch();

    const notificationsDom = notifications.map((note, idx) => {
        return(
            <li key={idx} style={{marginBottom: '20px'}}>
                <span className='pink-text'>{note.userName} </span>
                <span className='content'>{note.message} </span>
                <div className='grey-text note-date'>{note.date}</div>
            </li>
        )
    })

    useEffect(() => {
    const notificationTimeout = setTimeout(() => {
        if (notifications.length > 0) {
            dispatch(removeNotification(notifications[0].id));
        }
        }, 600000);

        return () => clearTimeout(notificationTimeout);
    }, [notifications, dispatch]);

    return (
        <div className={`notifications ${notiShow?'noti-block':''}`}>
            <div className="card z-depth-0 project-summary pro-card">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-tit" style={{ fontSize: '32px',fontWeight: '700',marginBottom: '10px',display: 'block'}}>Notifications</span>
                    <ul className="notifications-list">
                        {
                        notificationsDom.length > 0? notificationsDom:
                        <div className='empty-notes'>
                            <h3>No Notices Right Now </h3>
                            <img src={bell} alt='img'/>
                        </div>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
