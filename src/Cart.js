import React from "react";
import { useCart } from "./cartContext";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  IconButton,
  Divider,
  Stack,
  Button
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const { cart, removeFromCart, totalPrice, totalQuantity, clearCart } = useCart();

  const handleOrderNow = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please login first.");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/orders/place`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user.id,
            items: cart,
            date: new Date().toLocaleString(),
          }),
        }
      );

      const data = await res.json();
      alert(data.message);
      clearCart();
    } catch (err) {
      console.error("Order failed", err);
    }
  };

  return (
    <Container sx={{ mt: 5, px: { xs: 1, sm: 3, md: 5 } }}>
      <Box
        sx={{
          backgroundColor: "rgba(173, 216, 230, 0.3)", // light glass blue
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          color: "#fff",
          py: 3,
          borderRadius: 2,
          mb: 4,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: "2rem", mr: 1, mb: "2px" }} />
          Your Cart
        </Typography>
      </Box>

      {cart.length === 0 ? (
        <Typography variant="h6" textAlign="center">
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <Stack spacing={2}>
            {cart.map((item, index) => (
              <Card
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  boxShadow: 4,
                  borderRadius: 3,
                  border: "2px solid transparent",
                  backgroundClip: "padding-box, border-box",
                  backgroundImage:
                    "linear-gradient(to right, rgba(26, 84, 103, 0.5), rgba(169, 169, 169, 0.3))",
                  backgroundOrigin: "padding-box, border-box",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: "100%", sm: 220, md: 250 },
                    height: { xs: 200, sm: 200, md: 250 },
                    objectFit: "cover",
                    borderTopLeftRadius: { xs: 12, sm: 0 },
                    borderBottomLeftRadius: { xs: 0, sm: 12 },
                  }}
                  image={
                    item.image || item.img || "https://via.placeholder.com/250"
                  }
                  alt={item.title || item.name}
                />
                <Box
                  sx={{
                    flexGrow: 1,
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6" fontWeight="bold">
                      {item.title || item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {item.description || "No description available"}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      Price: ${item.price?.toFixed(2) || "N/A"}
                    </Typography>
                    <Typography variant="body1">
                      Quantity: {item.quantity}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      textAlign: { xs: "center", sm: "right" },
                      mt: { xs: 1, sm: 0 },
                    }}
                  >
                    <IconButton
                      color="error"
                      onClick={() => removeFromCart(item.id)}
                      sx={{ border: "1px solid #f44336", borderRadius: 2 }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>

          <Divider sx={{ my: 4 }} />

          <Box
            sx={{
              textAlign: "center",
              p: 3,
              borderRadius: 2,
              backgroundColor: "rgba(173, 216, 230, 0.3)", // light glass blue
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              color: "#fff",

              fontWeight: "bold",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Total Items: {totalQuantity}
            </Typography>
            <Typography variant="h5">
              Total Price: ${totalPrice.toFixed(2)}
            </Typography>
          </Box>

          <Button
            variant="contained"
            onClick={handleOrderNow}
            sx={{
              mt: 3,
              display: "block",
              mx: "auto",
              background: "linear-gradient(to right, #1a5467, #a9a9a9)",
              color: "#fff",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              borderRadius: 3,
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              "&:hover": {
                background: "linear-gradient(to right, #14434f, #8f8f8f)",
              },
            }}
          >
            Order Now
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
