/* eslint-disable react/react-in-jsx-scope */
import useCartReducer from "../hooks/useCartReducer";
import "./Cart.css";
import { CirclePlus, CircleX, ShoppingCart } from "lucide-react";

import {
  Drawer,
  IconButton,
  Typography,
  Box,
  Button,
  Divider,
} from "@mui/material";

import { useState } from "react";

export default function Cart() {
  const { cart, addToCart, removeFromCart } = useCartReducer();
  const [open, setOpen] = useState(false);

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  function toggleDrawer() {
    setOpen(!open);
  }

  return (
    <>
      <IconButton
        onClick={toggleDrawer}
        aria-label='open cart'
        sx={{
          position: "fixed",
          top: 16,
          right: 16,

          color: "#fff",
          zIndex: 2000,
        }}
      >
        <ShoppingCart />
      </IconButton>

      <Drawer
        anchor='right'
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: 320,
            bgcolor: "hsl(220, 35%, 3%)",
            color: "white",
            padding: 2,
          },
        }}
      >
        <Typography variant='h6' gutterBottom>
          Shopping Cart
        </Typography>
        <Divider sx={{ bgcolor: "#555", mb: 2 }} />

        {cart.length > 0 ? (
          <Box component='ul' sx={{ listStyle: "none", p: 0, m: 0 }}>
            {cart.map((product) => (
              <Box
                component='li'
                key={product.id}
                sx={{
                  mb: 3,
                  border: "1px solid #444",
                  borderRadius: 2,
                  p: 2,
                }}
              >
                <img
                  src={product.images?.[0]}
                  alt={product.title}
                  style={{
                    height: "100px",
                    display: "block",
                    margin: "0 auto 10px",
                    objectFit: "contain",
                  }}
                />
                <Typography align='center'>{product.title}</Typography>

                <Box
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  gap={1}
                  mt={1}
                >
                  <Typography fontWeight='bold'>${product.price}</Typography>
                  <Typography fontSize={14}>Qty: {product.quantity}</Typography>
                </Box>

                <Typography align='center' mt={1}>
                  Total: ${product.price * product.quantity}
                </Typography>

                <Box display='flex' justifyContent='center' gap={1} mt={1}>
                  <Button
                    onClick={() => addToCart(product)}
                    variant='contained'
                    size='small'
                    sx={{
                      minWidth: 0,

                      borderRadius: "10px",
                      width: 40,
                      height: 30,
                    }}
                  >
                    <CirclePlus size={18} />
                  </Button>
                  <Button
                    onClick={() => removeFromCart(product)}
                    variant='contained'
                    size='small'
                    sx={{
                      minWidth: 0,
                      borderRadius: "10px",
                      width: 40,
                      height: 30,
                    }}
                  >
                    <CircleX size={18} />
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        ) : (
          <Box mt={5} textAlign='center'>
            <CircleX size={40} />
            <Typography variant='body1' mt={1}>
              You don't have any products in your cart.
            </Typography>
          </Box>
        )}

        <Divider sx={{ bgcolor: "#555", my: 2 }} />

        <Typography
          variant='subtitle1'
          align='center'
          sx={{
            borderRadius: 1,
            py: 1,
            px: 2,
          }}
        >
          Total of cart: ${total.toFixed(2)}
        </Typography>
      </Drawer>
    </>
  );
}
