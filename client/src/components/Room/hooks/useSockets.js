import { useContext, useEffect } from 'react';
import { RoomContext } from '../RoomContext';
import { AuthenticationContext } from '../../AuthenticationContext';

import { isContainingData } from '../../../utils/index';
import { SOCKET_PATHS } from '../../../constants';

import io from 'socket.io-client';
const socket = io.connect('http://localhost:4000');

const {
  RECEIVE_ACTION_BAR,
  RECEIVE_ROOM_DETAILS,
  RECEIVE_WINDOW_STATE,
} = SOCKET_PATHS;

function useSockets(roomID) {
  const {
    userData
  } = useContext(AuthenticationContext);

  const {
    updateActionBars,
    updateRoomDetails,
    updateOpenWindows,
  } = useContext(RoomContext);

  useEffect(() => {
    if (isContainingData(userData)) {
      socket.emit('join-room', roomID, userData);
    }
    // eslint-disable-next-line
  }, [userData]);

  useEffect(() => {
    socket.on(RECEIVE_ACTION_BAR, newActionBarData => {
      updateActionBars(newActionBarData);
    });

    socket.on(RECEIVE_ROOM_DETAILS, newRoomDetails => {
      updateRoomDetails(newRoomDetails);
    });
    // eslint-disable-next-line
  }, []);

  socket.on(RECEIVE_WINDOW_STATE, ({ app, newState }) => {
    updateOpenWindows(app, newState);
  });
}

export function sendChanges(path, newData) {
  socket.emit(path, newData);
}

export default useSockets;