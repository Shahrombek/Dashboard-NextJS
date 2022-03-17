import { Box } from "@mui/material";
import Layout from "./Layout";

export default function Home() {
  return (
    <Box>
      <Layout title='Home'>
        helloan not use the unsized prop. That would decrease the lighthouse score because the image does not have a set width.

The unsized prop is not the solution in this case. It's the additional wrappers created around the img element that has hard-coded styling. If there were no added styling, there wouldn't be a problem, I've tried removing the width wrapper manually, and it works like expected/before.

Here's the code: https://github.com/MathiasKandelborg/TRUE-framework/blob/alpha/components/UI/Pages/Home/HomePage.tsx#L28-L36

I was using srcset before; you can look at the accompanying file for styling. It worked with '100%' width on the native img component, changing the styling on the image makes no difference now (because of the wrappers).

@MathiasKandelborg
MathiasKandelborg
on Oct 29, 2020

      </Layout>
    </Box>
  );
}
