import { NOTIFY_USER } from "../actions/types";

const INITIAL_STATE = {
  message: null,
  messageType: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case NOTIFY_USER:
      return {
        ...state,
        message: action.message,
        messageType: action.messageType
      };

    default:
      return state;
  }
}
