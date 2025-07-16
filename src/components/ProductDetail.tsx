/* eslint-disable react/react-in-jsx-scope */
import {
  Box,
  Button,
  Container,
  Typography,
  Chip,
  Card,
  Stack,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { MousePointerClick, Star, MessageCircle } from "lucide-react";
import Cart from "./Cart";
import useCartReducer from "../hooks/useCartReducer";

export default function ProductDetail({ products }) {
  const { id } = useParams();
  const { addToCart } = useCartReducer();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <Typography>Product not found</Typography>;

  return (
    <>
      <Cart />
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4} alignItems='center' justifyContent='center'>
          <Grid item xs={12} md={5}>
            <Box
              component='img'
              src={product.images[0]}
              alt={product.title}
              sx={{
                height: 300,
                width: "100%",
                objectFit: "contain",
                borderRadius: 4,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 3,
                borderRadius: 4,
                color: "white",
                backgroundColor: "rgba(182,182,182,0.158)",
              }}
            >
              <Typography variant='h4' gutterBottom>
                {product.title}
              </Typography>
              <Typography variant='h6' align='center' fontWeight='medium'>
                {product.brand}
              </Typography>
              <Stack direction='row' spacing={1} justifyContent='center' my={2}>
                {product.tags?.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: 50,
                    }}
                  />
                ))}
              </Stack>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                mb={2}
              >
                <Star size={16} style={{ marginRight: 4 }} />
                <Typography>{product.rating}</Typography>
              </Box>
              <Typography variant='body1' mb={2}>
                {product.description}
              </Typography>
              <Typography align='center' variant='h5'>
                US <strong>${product.price}</strong>
              </Typography>
              <Typography color='primary' fontSize={15} align='center' mt={1}>
                Discount: {product.discountPercentage}%
              </Typography>
              <Stack
                direction='row'
                justifyContent='center'
                alignItems='center'
                mt={2}
                p={2}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.075)",
                  borderRadius: 4,
                }}
              >
                <Typography>{product.warrantyInformation}</Typography>
                <Typography sx={{ marginLeft: "10px" }}>
                  {product.shippingInformation}
                </Typography>
              </Stack>
              <Stack
                direction='row'
                justifyContent='center'
                alignItems='center'
                mt={2}
                p={2}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.075)",
                  borderRadius: 4,
                }}
              >
                <Typography>
                  <strong>Width:</strong> {product.dimensions.width}
                </Typography>
                <Typography sx={{ marginLeft: "10px" }}>
                  <strong>Height:</strong> {product.dimensions.height}
                </Typography>
                <Typography sx={{ marginLeft: "10px" }}>
                  <strong>Depth:</strong> {product.dimensions.depth}
                </Typography>
              </Stack>
              <Box textAlign='center' mt={3}>
                <Button
                  variant='contained'
                  onClick={() => addToCart(product)}
                  endIcon={<MousePointerClick size={18} />}
                  sx={{ borderRadius: 50, px: 4 }}
                >
                  Add to cart
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>

        <Paper
          elevation={1}
          sx={{
            backgroundColor: "rgba(182,182,182,0.158)",
            borderRadius: 4,
            mt: 3,
            p: 3,
          }}
        >
          <Grid container spacing={4} justifyContent='center'>
            {product.reviews?.map((review, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    bgcolor: "rgba(182,182,182,0.158)",
                    color: "white",
                  }}
                >
                  <Typography display='flex' alignItems='center' gutterBottom>
                    <Star size={15} style={{ marginRight: 4 }} /> Rating:
                    {review.rating}
                  </Typography>
                  <Typography variant='h6'>{review.reviewerName}</Typography>
                  <Typography color='primary' fontSize={14}>
                    {review.reviewerEmail}
                  </Typography>
                  <Typography mt={1}>{review.comment}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
