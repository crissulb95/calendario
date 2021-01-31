import React from 'react';

export const CalendarEvent = ({event}) => {
    const { title, user } = event;

    return (
        <div>
            <h4> { title } </h4>
            <p>- {user.name} </p>
        </div>
    )
}
