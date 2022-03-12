import * as t from "../types";
// icons
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

const initialState = {
    appBar: [
      {
        icon: <DashboardOutlinedIcon/>,
        title: 'Dashboard',
        lists: ['Saas', 'Sales', 'Project Management', 'Project Management V2'],
      },
      {
        icon: <SettingsOutlinedIcon/>,
        title:'Account Settings',
        lists: [],
      },
      {
        icon: <PersonOutlineOutlinedIcon/>,
        title:'User Profile',
        lists: [],
      },
      {
        icon: <TableChartOutlinedIcon/>,
        title:'Data Table',
        lists: ['Data Table V1', 'Data Table V2'],
      },
      {
        icon: <ShoppingBasketOutlinedIcon/>,
        title:'Admin Eccomerce',
        lists: ['Product management', 'Order management', 'Customer management'],
      },
      {
        icon: <ShoppingBagOutlinedIcon/>,
        title:'Eccomerce',
        lists: ['Shop', 'Cart', 'Checkout', 'Purchase Confirmation'],
      },
      {
        icon: <AssignmentOutlinedIcon/>,
        title:'Invoice',
        lists: ['Invoice List', 'Add Invoice', 'Invoice Details'],
      },
      {
        icon: <ListRoundedIcon/>,
        title:'User Management',
        lists: ['User Grid', 'User List', 'Add User'],
      },
      {
        icon: <FileCopyOutlinedIcon/>,
        title:'Projects',
        lists: ['Project List V1', 'Project List V2', 'Project List V3', 'Project Details', 'Team Member'],
      },
      {
        icon: <ViewAgendaOutlinedIcon/>,
        title:'Kanban',
        lists: [],
      },
      {
        icon: <ForumOutlinedIcon/>,
        title:'Chat',
        lists: [],
      },
      {
        icon: <CalendarTodayIcon/>,
        title:'Calendar',
        lists: [],
      },
      {
        icon: <LocalPoliceOutlinedIcon/>,
        title:'Sessions',
        lists: ['Sign In', 'Sign Up', 'Forgot Password', 'Error 404'],
      },
      {
        icon: <AutoStoriesOutlinedIcon/>,
        title:'Pages',
        lists: ['About', 'Contact', 'Pricing', 'Privacy'],
      },
      
    ]
};

const newsReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
};

export default newsReducer;
