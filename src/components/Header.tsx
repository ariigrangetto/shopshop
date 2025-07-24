/* eslint-disable react/react-in-jsx-scope */
import Cart from "./Cart";
import Typography from "@mui/material/Typography";
import Filter from "./Filter";

export default function Header() {
  return (
    <>
      <div className='flex justify-center m-auto'>
        <div>
          <Typography
            variant='h1'
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
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
              justifyContent: "center",
              margin: "auto",
            }}
          >
            Take a look at our available products and make yourself at home!
          </Typography>
        </div>
      </div>

      <Cart />
      <Filter />
    </>
  );
}
