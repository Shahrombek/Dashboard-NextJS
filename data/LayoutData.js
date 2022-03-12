// icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocalPoliceOutlinedIcon from "@mui/icons-material/LocalPoliceOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

const LayoutData = [
  {
    icon: <DashboardOutlinedIcon />,
    title: "Dashboard",
    lists: [
      { title: "Saas", link: "/dashboard/saas" },
      { title: "Sales", link: "/dashboard/sales" },
      { title: "Project Management", link: "/dashboard/projectManagement" },
      {
        title: "Project Management V2",
        link: "/dashboard/projectManagementV2",
      },
    ],
  },
  {
    icon: <SettingsOutlinedIcon />,
    title: "Account Settings",
    lists: [],
    link: "/accountsettings",
  },
  {
    icon: <PersonOutlineOutlinedIcon />,
    title: "User Profile",
    lists: [],
    link: "userProfile",
  },
  {
    icon: <TableChartOutlinedIcon />,
    title: "Data Table",
    lists: [
      { title: "Data Table V1", link: "dataTable/dataTableV1" },
      { title: "Data Table V2", link: "dataTable/dataTableV2" },
    ],
  },
  {
    icon: <ShoppingBasketOutlinedIcon />,
    title: "Admin Eccomerce",
    lists: [
      {
        title: "Product management",
        link: "adminEccomerce/productManagement",
      },
      { title: "Order management", link: "adminEccomerce/orderManagement" },
      {
        title: "Customer management",
        link: "adminEccomerce/customerManagement",
      },
    ],
  },
  {
    icon: <ShoppingBagOutlinedIcon />,
    title: "Eccomerce",
    lists: [
      { title: "Shop", link: "eccomerce/shop" },
      { title: "Cart", link: "eccomerce/cart" },
      { title: "Checkout", link: "eccomerce/checkout" },
      {
        title: "Purchase Confirmation",
        link: "eccomerce/purchaseConfirmation",
      },
    ],
  },
  {
    icon: <AssignmentOutlinedIcon />,
    title: "Invoice",
    lists: [
      { title: "Invoice List", link: "invoice/invoiceList" },
      { title: "Add Invoice", link: "invoice/addInvoice" },
      { title: "Invoice Details", link: "invoice/invoiceDetails" },
    ],
  },
  {
    icon: <ListRoundedIcon />,
    title: "User Management",
    lists: [
      { title: "User Grid", link: "userManagement/userGrid" },
      { title: "User List", link: "userManagement/userList" },
      { title: "Add User", link: "userManagement/addUser" },
    ],
  },
  {
    icon: <FileCopyOutlinedIcon />,
    title: "Projects",
    lists: [
      { title: "Project List V1", link: "projects/projectListV1" },
      { title: "Project List V2", link: "projects/projectListV2" },
      { title: "Project List V3", link: "projects/projectListV3" },
      { title: "Project Details", link: "projects/projectDetails" },
      { title: "Team Member", link: "projects/teamMember" },
    ],
  },
  {
    icon: <ViewAgendaOutlinedIcon />,
    title: "Kanban",
    lists: [],
    link: "kanban",
  },
  {
    icon: <ForumOutlinedIcon />,
    title: "Chat",
    lists: [],
    link: "chat",
  },
  {
    icon: <CalendarTodayIcon />,
    title: "Calendar",
    lists: [],
    link: "calendar",
  },
  {
    icon: <LocalPoliceOutlinedIcon />,
    title: "Sessions",
    lists: [
      { title: "Sign In", link: "sessions/signIn" },
      { title: "Sign Up", link: "sessions/signUp" },
      { title: "Forgot Password", link: "sessions/forgotPassword" },
      { title: "Error 404", link: "sessions/error404" },
    ],
  },
  {
    icon: <AutoStoriesOutlinedIcon />,
    title: "Pages",
    lists: [
      { title: "About", link: "pages/about" },
      { title: "Contact", link: "pages/contact" },
      { title: "Pricing", link: "pages/pricing" },
      { title: "Privacy", link: "pages/privacy" },
    ],
  },
];

export default LayoutData;
