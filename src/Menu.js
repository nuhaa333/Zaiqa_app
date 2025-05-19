import React, { useEffect, useState } from 'react';
import ItemCard from './itemCard';
import CategoryBox from './categoryBox';
import {
Container, TextField, Grid, Typography, Box,
CircularProgress, Snackbar, Alert, Pagination
} from '@mui/material';

const Menu = () => {
const [items, setItems] = useState([]);
const [searchQuery, setSearchQuery] = useState('');
const [filteredItems, setFilteredItems] = useState([]);
const [loading, setLoading] = useState(false);
const [category, setCategory] = useState('pizza'); // default 

const [snackbarOpen, setSnackbarOpen] = useState(false);
const [snackbarMessage, setSnackbarMessage] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 6;

const API_BASE = process.env.REACT_APP_API_URL;

useEffect(() => {
  setLoading(true);
  fetch(`${API_BASE}/api/${category}`)
    .then(res => res.json())
    .then(data => {
      console.log("Fetched data:", data);
      setItems(data || []);
      setSearchQuery('');
      setCurrentPage(1);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
}, [category]);

useEffect(() => {
  const filtered = items.filter(item =>
    (item.title || item.name || '').toLowerCase().includes(searchQuery.toLowerCase())
  );
  setFilteredItems(filtered);
}, [searchQuery, items]);

const handleAddToCart = (item) => {
  setSnackbarMessage(`${item.title || item.name} added to cart`);
  setSnackbarOpen(true);
};

const paginatedItems = filteredItems.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

return (
  <Container sx={{ mt: 5, px: { xs: 1, sm: 3, md: 5 } }}>
    {/* Gradient Header */}
    <Box
      sx={{
        background: 'rgba(200, 230, 255, 0.2)',      // glassy blue
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',          // Safari support
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
        py: 3,
        borderRadius: 2,
        mb: 4,
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: '#fff',
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
        }}
      >
        Our {category.replace('-', ' ').toUpperCase()}
      </Typography>
    </Box>

    {/* Category and Search */}
    <Box display="flex" justifyContent="center" mb={3}>
      <CategoryBox setCategory={setCategory} />
    </Box>

    <Box display="flex" justifyContent="center" mb={4}>
      <TextField
        label="Search Items"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ width: '100%',
           maxWidth: 400,
          input: {
        color: '#E0E0E0', // Light grey text
      },
      label: {
        color: '#90caf9', // Light blue label
      },
      '& label.Mui-focused': {
        color: '#64b5f6', // Brighter blue on focus
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#555', // Grey border
        },
        '&:hover fieldset': {
          borderColor: '#90caf9', // Light blue on hover
        },
        '&.Mui-focused fieldset': {
          borderColor: '#64b5f6', // Brighter blue on focus
        },
        backgroundColor: '#1c1c1c', // Dark background for input
      },
    }}
  />
    </Box>

    {/* Content */}
    {loading ? (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    ) : (
      <>
        <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {paginatedItems.length > 0 ? (
            paginatedItems.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <ItemCard item={item} onAdd={handleAddToCart} />
              </Grid>
            ))
          ) : (
            <Typography variant="h6" align="center" sx={{ width: '100%' }}>
              No items match your search.
            </Typography>
          )}
        </Grid>

        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={Math.ceil(filteredItems.length / itemsPerPage)}
            page={currentPage}
            onChange={(e, page) => setCurrentPage(page)}
            color="primary"
            sx={{
              '& .MuiPaginationItem-root': {
                fontWeight: 'bold',
                borderRadius: 2,
              },
            }}
          />
        </Box>
      </>
    )}

    {/* Snackbar */}
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={3000}
      onClose={() => setSnackbarOpen(false)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
  </Container>
);
};

export default Menu;
