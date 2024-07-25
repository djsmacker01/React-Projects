// src/components/CreateCommunity.js
import React from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';

const CreateCommunity = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create Community
        </Typography>
        <TextField
          label="Community Title"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Creation Date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue="2024-06-14"
        />
        <TextField
          label="Thumbnail Photo"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Rule 1"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Rule 2"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Rule 3"
          fullWidth
          margin="normal"
        />
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" fullWidth>
            Create Community
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CreateCommunity;
