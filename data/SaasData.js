import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import WindowRoundedIcon from "@mui/icons-material/WindowRounded";

export const tablehead = {
    tab1: "Tracking No",
    tab2: "Product Name",
    tab3: "Price",
    tab4: "Total Order",
    tab5: "Total amount",
  };

  export const rows = [
    {
      tab1: "#JY7685",
      img: "https://uko-react.vercel.app/static/products/shoe-1.png",
      tab2: "Nike Air max 170",
      tab3: "$654",
      tab4: "325",
      tab5: "$1,45,660",
    },
    {
      tab1: "#JY7686",
      img: "https://uko-react.vercel.app/static/products/bonsai.png",
      tab2: "Cactus Plant",
      tab3: "$654",
      tab4: "40",
      tab5: "$1,45,420",
    },
    {
      tab1: "#JY7687",
      img: "https://uko-react.vercel.app/static/products/airbud.png",
      tab2: "Minimal Pot",
      tab3: "$654",
      tab4: "57",
      tab5: "	$45,660",
    },
    {
      tab1: "#JY7688",
      img: "https://uko-react.vercel.app/static/products/shoe-2.png",
      tab2: "Adidas Blaze",
      tab3: "$654",
      tab4: "125",
      tab5: "$12,660",
    },
  ];
  export const saasData = [
    {
      icon: <ShoppingBasketOutlinedIcon />,
      title: "All Spending",
      price: "$574",
      color: "rgb(36, 153, 239)",
      bgColor: "rgb(36, 153, 239, 0.2)",
    },
    {
      icon: <BarChartRoundedIcon />,
      title: "Earnings",
      price: "$521",
      color: "rgb(167, 152, 255)",
      bgColor: "rgb(167, 152, 255, 0.2)",
    },
    {
      icon: <WindowRoundedIcon />,
      title: "Weekly reven",
      price: "$684",
      color: "rgb(255, 107, 147)",
      bgColor: "rgb(255, 107, 147, 0.2)",
    },
    {
      icon: <PeopleAltOutlinedIcon />,
      title: "New Clients",
      price: "$321",
      color: "rgb(255, 151, 119)",
      bgColor: "rgb(255, 151, 119, 0.2)",
    },
  ];