/* eslint-disable react/react-in-jsx-scope */
import { MousePointerClick, Star } from "lucide-react";
import useCartReducer from "../hooks/useCartReducer";
import { Link } from "react-router-dom";
import type { Product } from "../types.d";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

interface Props {
  products: Product[];
}

export function ListOfProducts({ products }: Props) {
  const { addToCart } = useCartReducer();

  return (
    <>
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
          maxWidth: "lg",
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        ></Box>
        <Grid container spacing={2} justifyContent='center'>
          {products.map((product) => (
            <Grid item xs={{ xs: 15, sm: 6, md: 4 }} key={product.id}>
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Stack
                  direction='column'
                  component={Card}
                  spacing={1}
                  useFlexGap
                  sx={{
                    color: "inherit",
                    p: 3,
                    height: "100%",
                    maxWidth: 320,
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backgroundColor: "hsl(218, 30%, 7%)",
                    borderRadius: "15px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    margin: "auto",
                  }}
                >
                  <Box sx={{ opacity: "50%" }}>
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      style={{
                        width: "100%",
                        height: 180,
                        objectFit: "contain",
                        borderRadius: 8,
                        display: "block",
                        margin: "auto",
                      }}
                    />
                  </Box>
                  <div>
                    <Typography
                      gutterBottom
                      sx={{ fontWeight: "medium", color: "white" }}
                    >
                      {product.title}
                    </Typography>
                    <Typography variant='body2' sx={{ color: "grey.400" }}>
                      {product.brand}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{
                        justifyContent: "center",
                        margin: "center",
                        display: "flex",
                        alignItems: "center",
                        color: "grey.400",
                        marginTop: "5px",
                      }}
                    >
                      {product.category}
                      <Star
                        size={12}
                        style={{
                          marginLeft: "10px",
                          marginRight: 5,
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      />
                      {product.rating}
                    </Typography>

                    <Typography align='center' mt={1} sx={{ color: "white" }}>
                      US <strong>${product.price}</strong>
                    </Typography>
                    <Typography
                      align='center'
                      variant='body2'
                      mt={1}
                      sx={{ color: "white" }}
                    >
                      Discount:
                      <strong style={{ fontSize: "15px" }}>
                        {product.discountPercentage}%
                      </strong>
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      Available: {product.stock}
                    </Typography>

                    <Button
                      onClick={() => addToCart(product)}
                      variant='contained'
                      color='primary'
                      aria-label='add to cart icon'
                      sx={{
                        mt: 2,
                        border: "none",
                        outline: "none",
                        borderRadius: "50px",
                        width: 150,
                        mx: "auto",
                        textTransform: "none",
                        bgcolor: "",
                      }}
                      endIcon={<MousePointerClick size={16} />}
                    >
                      Add to cart
                    </Button>
                  </div>
                </Stack>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export function WithoutResult() {
  return <p>No se encontraron resultados</p>;
}

export default function Products({ products }: Props) {
  const hasProduct = products.length > 0;
  return hasProduct ? (
    <ListOfProducts products={products} />
  ) : (
    <WithoutResult />
  );
}
