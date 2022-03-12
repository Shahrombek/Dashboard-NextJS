import { Box, Divider, Typography } from "@mui/material";
import Layout from "../Layout";


function Prepare() {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: { xs: "600", sm: "700" },
          fontSize: { xs: "30px", sm: "40px" },
          width: "100%",
          textAlign: "center",
          p: { xs: "20px 0px 10px 0px", sm: "15px 0px 15px 0px" },
          color: "textColor.main",
        }}
      >
        Privacy Policy
      </Typography>
      <Divider />
      <Typography
        pt={4}
        pb={4}
        sx={{ fontSize: "15px", color: "textColor.main", lineHeight: 2 }}
      >
        PrivacyIt is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </Typography>
      <Typography
        sx={{
          fontWeight: { xs: "500", sm: "600" },
          fontSize: { xs: "20px", sm: "30px" },
          color: "textColor.main",
        }}
      >
        Who We Are and How To Contact Us
      </Typography>
      <Typography
        pb={2}
        sx={{ fontSize: "15px", color: "textColor.main", lineHeight: 2 }}
      >
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness. No one
        rejects, dislikes, or avoids pleasure itself, because it is pleasure,
        but because those who do not know how to pursue pleasure rationally
        encounter consequences that are extremely painful. Nor again is there
        anyone who loves or pursues or desires to obtain pain of itself, because
        it is pain, but because occasionally circumstances occur in which toil
        and pain can procure him some great pleasure. To take a trivial example,
        which of us ever undertakes laborious physical exercise, except to
        obtain some advantage from it? But who has any right to find fault with
        a man who chooses to enjoy a pleasure that has no annoying consequences,
        or one who avoids a pain that produces no resultant pleasure?
      </Typography>
      <Typography
        pb={4}
        sx={{ fontSize: "15px", color: "textColor.main", lineHeight: 2 }}
      >
        If you have reason to believe that a child under the age of 16 has
        provided personal data to Vercel through the Platform, please contact
        privacy@vercel.com and we will endeavor to delete that information from
        our databases.
      </Typography>
      <Typography
        sx={{
          fontWeight: { xs: "500", sm: "600" },
          fontSize: { xs: "20px", sm: "30px" },
          color: "textColor.main",
        }}
      >
        Children's Privacy
      </Typography>
      <Typography
        pb={2}
        sx={{ fontSize: "15px", color: "textColor.main", lineHeight: 2 }}
      >
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
        ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
        earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus
        asperiores repellat.
      </Typography>
      <Typography
        pb={4}
        sx={{ fontSize: "15px", color: "textColor.main", lineHeight: 2 }}
      >
        That they cannot foresee the pain and trouble that are bound to ensue;
        and equal blame belongs to those who fail in their duty through weakness
        of will, which is the same as saying through shrinking from toil and
        pain. These cases are perfectly simple and easy to distinguish.
      </Typography>
    </Box>
  );
}

const privacy = () => {
  return (
    <Layout title={"Privacy"}>
      <Prepare />
    </Layout>
  );
};

export default privacy;
