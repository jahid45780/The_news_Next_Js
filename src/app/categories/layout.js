import CategoryList from '@/components/ui/CategoryList/CategoryList';
import { Box, Container, Grid } from '@mui/material';


const categoriesLayout = ({children}) => {
    return (
        <Box>
            <Container>
            <Grid  container spacing={2}>
          <Grid xs={3}>
         <CategoryList></CategoryList>
         </Grid>
        
        <Grid item xs={9}>
            {children}
            </Grid>
  
      </Grid>
            </Container>
        </Box>
    );
};

export default categoriesLayout;