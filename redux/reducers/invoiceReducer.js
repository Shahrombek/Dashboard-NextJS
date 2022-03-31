import * as t from "../types";

const initialState = {
  userGrid: [
    {
      id:1,
      billToAddress: "Arizona, USA",
      billFromAddress: "Sylhet zindabazar",
      billToNumber: "+003344422",
      billFromNumber: "+013145813",
      orderNumber: "#46876458",
      billTo: "Natalie Dormer",
      billFrom: "UI lib",
      img: "https://uko-react.vercel.app/static/avatar/001-man.svg",
      job: "Marketing Manager",
      amount: 450,
      status: "Unpaid",
      date: "Dec 02, 2021",
      change: true,
    },
    {
      id:2,
      billToAddress: "Barcelona, SPA",
      billFromAddress: "Marokash zindabazar",
      billToNumber: "+012354613",
      billFromNumber: "+056249422",
      orderNumber: "#49123hd92",
      billFrom: "Mark Hecmor",
      img: "https://uko-react.vercel.app/static/avatar/002-girl.svg",
      billTo: "Selena Gomez",
      job: "Font End Developer",
      amount: 280,
      status: "Unpaid",
      date: "Nov 16, 2021",
    },
    {
      id:3,
      billToAddress: "Ceul, CHINA",
      billFromAddress: "New York Aspira",
      billToNumber: "+013976564",
      billFromNumber: "+015483286",
      orderNumber: "#dj2910341",
      billFrom: "Ella Knox",
      img: "https://uko-react.vercel.app/static/avatar/005-man-1.svg",
      billTo: "Mark Dhoner",
      job: "UI Designer",
      amount: 320,
      status: "Unpaid",
      date: "Oct 07, 2021",
    },
    {
      id:4,
      billToAddress: "Ceul, CHINA",
      billFromAddress: "New York Aspira",

      billToNumber: "+013976564",
      billFromNumber: "+015483286",

      orderNumber: "#dj2910341",

      billFrom: "Ella Knox",



      img: "https://uko-react.vercel.app/static/avatar/014-man-3.svg",
      billTo: "Tom Hardy",
      job: "Marketing Manager",
      amount: 290,
      status: "Unpaid",
      date: "Mar 12, 2021",
    },
    {
      id:5,
      billToAddress: "Ceul, CHINA",
      billFromAddress: "New York Aspira",

      billToNumber: "+013976564",
      billFromNumber: "+015483286",

      orderNumber: "#dj2910341",

      billFrom: "Ella Knox",




      img: "https://uko-react.vercel.app/static/avatar/023-man-6.svg",
      billTo: "Logan Paul",
      job: "Font End Developer",
      amount: 410,
      status: "Unpaid",
      date: "Jul 18, 2021",
    },
    {
      id:6,
      billToAddress: "Ceul, CHINA",
      billFromAddress: "New York Aspira",

      billToNumber: "+013976564",
      billFromNumber: "+015483286",

      orderNumber: "#dj2910341",

      billFrom: "Ella Knox",




      img: "https://uko-react.vercel.app/static/avatar/027-man-7.svg",
      billTo: "Tom Holland",
      job: "UI Designer",
      amount: 500,
      status: "Unpaid",
      date: "Jan 24, 2021",
    },
  ],   
  findUser: [],
  editInvoice: [],
};

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_INVOICE:
      state.userGrid.map((item, index) => {
        if(item.id === action.payload.id){
          state.userGrid[index] = action.payload;
        }
      })
      return { ...state};
    case t.FIND_USER:
      return {
        ...state,
        userGrid: [...state.userGrid],
        findUser: action.payload,
      };
    case t.CHOOSE_INVOICE:
      return { ...state, userGrid: [...action.payload] };
      case t.EDIT_INVOICE: 
      return {...state, editInvoice: action.payload};
    default:
      return state;
  }
};

export default invoiceReducer;
