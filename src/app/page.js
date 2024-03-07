import LatestNews from '@/components/ui/LatestNews/LatestNews';
import SiteBar from '@/components/ui/SiteBar/SiteBar';
import { Grid } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Grid container spacing={2}>
  <Grid xs={8}>
    <LatestNews/>
       
  </Grid>
  <Grid  item xs={4}>

<SiteBar/>    

  </Grid>
  
</Grid>
    </div>
  );
};

export default HomePage;