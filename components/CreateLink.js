import { Box } from "@mui/material";
import Link from "next/link";

const CreateLink = (props) => {
  return (
    <Box>
      <Link href={`${props.href}`}>
        <a> {props.children} </a>
      </Link>
    </Box>
  );
};

export default CreateLink;
