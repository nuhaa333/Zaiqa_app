import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

const CategoryBox = ({ setCategory }) => (
  <ButtonGroup variant="contained" color="success">
    <Button onClick={() => setCategory('MainCourse')}>Main course</Button>
    <Button onClick={() => setCategory('pizza')}>Pizza</Button>
    <Button onClick={() => setCategory('hot-coffee')}>Hot Coffee</Button>
    <Button onClick={() => setCategory('iced-coffee')}>Iced Coffee</Button>
  </ButtonGroup>
);

export default CategoryBox;
