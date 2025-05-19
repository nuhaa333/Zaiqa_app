import React from 'react';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Button, ButtonGroup } from '@mui/material';

const CategoryBox = ({ setCategory }) => (
  //<ButtonGroup
  //variant="contained"
  //sx={{
  //  backgroundColor: 'transparent',
  //  '& .MuiButton-root': {
  //    backgroundColor: 'rgba(173, 216, 230, 0.25)', // glassy blue
  //    color: '#fff',
  //    backdropFilter: 'blur(8px)',
  //    WebkitBackdropFilter: 'blur(8px)',
  //    border: '1px solid rgba(255, 255, 255, 0.2)',
  //    transition: 'all 0.3s ease',
  //    '&:hover': {
  //      backgroundColor: 'rgba(200, 230, 250, 0.35)', // brighter on hover
  //    },
  //  },
  //}}
//>
<ButtonGroup
  variant="contained"
  sx={{
    backgroundColor: 'transparent',
    flexWrap: 'wrap',
    justifyContent: {
      xs: 'center',
      sm: 'flex-start',
    },
    gap: {
      xs: 1,
      sm: 2,
    },
    '& .MuiButton-root': {
      backgroundColor: 'rgba(173, 216, 230, 0.25)', // glassy blue
      color: '#fff',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease',
      minWidth: {
        xs: '100%', // Full width on extra-small screens
        sm: 'auto',
      },
      '&:hover': {
        backgroundColor: 'rgba(200, 230, 250, 0.35)', // brighter on hover
      },
    },
  }}
>

    <Button onClick={() => setCategory('MainCourse')} startIcon={<DinnerDiningIcon sx={{ color: '#98ff98'}}/>}>Main course</Button>
    <Button onClick={() => setCategory('pizza')} startIcon={<LocalPizzaIcon sx={{ color: '#D2691E'}} />}>Pizza</Button>
    <Button onClick={() => setCategory('hot-coffee')} startIcon={<FreeBreakfastIcon sx={{ color: '#C3B091'}}/>}>Hot Coffee</Button>
    <Button onClick={() => setCategory('iced-coffee')} startIcon={<AcUnitIcon sx={{ color: '#4682B4'}}/>}>Iced Coffee</Button>
  </ButtonGroup>
);

export default CategoryBox;
