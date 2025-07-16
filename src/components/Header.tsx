/* eslint-disable react/react-in-jsx-scope */
import Cart from "./Cart";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <>
      <Stack
        spacing={2}
        useFlexGap
        sx={{
          alignItems: "center",
          width: { xs: "100%", sm: "70%" },
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <Typography
          variant='h1'
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            color: "white",
            fontSize: "clamp(3rem, 10vw, 3.5rem)",
          }}
        >
          Our&nbsp;
          <Typography
            component='span'
            variant='h1'
            sx={(theme) => ({
              fontSize: "inherit",
              color: "primary.main",
              ...theme.applyStyles("dark", {
                color: "primary.light",
              }),
            })}
          >
            products
          </Typography>
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "white",
            width: { sm: "100%", md: "80%" },
          }}
        >
          Take a look at our available products and make yourself at home!
        </Typography>
      </Stack>
      <Cart />
    </>
  );
}
