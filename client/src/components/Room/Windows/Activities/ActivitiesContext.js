import React, { createContext, useState } from 'react';

export const ActivitiesContext = createContext(null);

export function ActivitiesProvider({ children, isStarted, setIsStarted }) {
  const [startTimer, setStartTimer] = useState(false); // handle delay
  const [activityPlaying, setActivityPlaying] = useState(0);
  const [firstRender, setFirstRender] = useState(true);

  const [activityCards, setActivityCards] = useState(
    [
      {
        title: 'Push Ups',
        description: 'None',
        position: 0,
        id: 0,
        time: 20
      },
      {
        title: 'Sit Ups',
        description: 'None',
        position: 1,
        id: 1,
        time: 20
      },
      {
        title: 'Squats',
        description: 'None',
        position: 2,
        id: 2,
        time: 20
      },
      {
        title: 'Kick Ups',
        description: 'None',
        position: 3,
        id: 3,
        time: 20
      },
      {
        title: 'Kick Ups',
        description: 'None',
        position: 4,
        id: 4,
        time: 20
      },
      {
        title: 'Kick Ups',
        description: 'None',
        position: 5,
        id: 5,
        time: 20
      },
      {
        title: 'I am',
        description: 'None',
        position: 6,
        id: 6,
        time: 20
      }
    ]
  );

  return (
    <ActivitiesContext.Provider
      value={{
        isStarted,
        setIsStarted,
        startTimer,
        setStartTimer,
        activityCards,
        setActivityCards,
        activityPlaying,
        setActivityPlaying,
        firstRender,
        setFirstRender,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  )
}
