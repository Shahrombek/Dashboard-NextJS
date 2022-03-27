import * as t from "../types";

const initialState = {
  userGrid: [
    {
      img: "https://uko-react.vercel.app/static/avatar/001-man.svg",
      name: "Natalie Dormer",
      job: "Marketing Manager",
      company: 'tesla',
      country: 'Arizona, USA',
    },
    {
      img: "https://uko-react.vercel.app/static/avatar/002-girl.svg",
      name: "Selena Gomez",
      job: "Font End Developer",
      company: 'ford',
      country: 'Arizona, USA',
    },
    {
      img: "https://uko-react.vercel.app/static/avatar/005-man-1.svg",
      name: "Mark Dhoner",
      job: "UI Designer",
      company: 'space x',
      country: 'Arizona, USA',
    },
    {
      img: "https://uko-react.vercel.app/static/avatar/014-man-3.svg",
      name: "Tom Hardy",
      job: "Marketing Manager",
      company: 'amazon',
      country: 'Arizona, USA',
    },
    {
      img: "https://uko-react.vercel.app/static/avatar/023-man-6.svg",
      name: "Logan Paul",
      job: "Font End Developer",
      company: 'cisco',
      country: 'Arizona, USA',
    },
    {
      img: "https://uko-react.vercel.app/static/avatar/027-man-7.svg",
      name: "Tom Holland",
      job: "UI Designer",
      company: 'twitter',
      country: 'Arizona, USA',
    },
  ],
  findUser:[],
};

const userManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_USER:
      return { ...state, userGrid: [...state.userGrid, action.payload] };
    case t.FIND_USER:
      return {...state, userGrid: [...state.userGrid], findUser: action.payload};
    default:
      return state;
  }
};

export default userManagementReducer;
