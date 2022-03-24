import * as t from "../types";

const initialState = {
  addTodo: {},
  messageData: [
    {
      user: "shahrom",
      title: "Hello world",
    },
    {
      user: "Tom Cruise",
      title: "Hey, Pixy can we get on a quick call? i need to show you something",
    },
    {
      user: "shahrom",
      title: "i need to show you something i need to show you something",
    },
    {
      user: "Tom Cruise",
      title: "Hey, Pixy can we get on a quick call? ",
    },
    {
      user: "shahrom",
      title: "i need to show you something",
    },
    {
      user: "Tom Cruise",
      title: "Hey, Pixy can we get on a quick call? ",
    },
    {
      user: "shahrom",
      title: "i need to show you something",
    },
    {
      user: "Tom Cruise",
      title: "Hey, Pixy can we get on a quick call? ",
    },
  ],
};

const newsReducer = (state = initialState, action) => {
  console.log("keldi", action);
  switch (action.type) {
    case t.ADD_TODO:
      return {
        ...state,
        addTodo: {
          ...state.addTodo,
          [action.payload.id]: { ...action.payload },
        },
      };

    case t.REMOVE_TODO:
      const task = Object.values(state.addTodo).filter(
        (e) => e.id !== action.payload.id
      );
      return { ...state, addTodo: { ...task } };

    case t.ADD_MSG:
      return { ...state, messageData: [...state.messageData, action.payload] };
    default:
      return state;
  }
};

export default newsReducer;
