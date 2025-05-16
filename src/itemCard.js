import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from './cartContext';

const ItemCard = ({ item, onAdd }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(item);
    if (onAdd) onAdd(item);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        boxShadow: 3,
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
        border: '2px solid transparent',
        backgroundImage:
          'linear-gradient(white, white), linear-gradient(to right, #d4145a, #fbb03b, #f0ef83)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'content-box, border-box',
        minHeight: 400, // Set a minimum height to keep all cards the same size
      }}
    >
      <CardMedia
        component="img"
        image={item.image || item.img || 'https://via.placeholder.com/300'}
        alt={item.title || item.name}
        sx={{
          height: 200,  // Fixed height for consistency
          objectFit: 'cover',  // Ensures the image does not stretch
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          width: '100%', // Full width of the card
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {item.title || item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {item.description || 'No description provided.'}
        </Typography>
        <Typography variant="body1" fontWeight="medium" sx={{ mt: 1 }}>
          ${item.price?.toFixed(2) || '$5.99'}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2, pt: 0, textAlign: 'center' }}>
        <Button
          
          variant="contained"
          startIcon={<AddShoppingCartIcon />}
          onClick={handleAdd}
          sx={{
            background: 'linear-gradient(to right, #d4145a, #fbb03b)',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: 2,
            '&:hover': {
              background: 'linear-gradient(to right, #c3134f, #eaa22f)',
            },
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
};

export default ItemCard;
