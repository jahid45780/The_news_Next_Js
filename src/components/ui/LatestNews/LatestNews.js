import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Bit from '@/assets/bit.jpg'
import Pakistan from '@/assets/11.webp'
import france from '@/assets/france-abortion-bill.webp'
import Getty from '@/assets/GettyImages.webp'
import Gaza from '@/assets/highres.webp'
const LatestNews = () => {
    return (
        <>
          <Box className=" mt-5" >
            
          <Card>
      <CardActionArea>
        <CardMedia>
          <Image src={Bit} alt="bit" width='full' height={500} ></Image>
        </CardMedia>
        <CardContent>

        <span className=" text-2xl bg-red-500 font-semibold p-1 rounded-md px-2" > Technology </span>

          <Typography className=" mt-1" gutterBottom variant="h5" component="div">
          Unlocking the Power of Bitcoin: A Comprehensive Overview
          </Typography>
            
          <Typography className=" font-bold" >
            By Jahid Hossain Mar 15-3-2024
          </Typography>

          <Typography variant="body2" color="text.secondary">
          Certainly! If youre looking to write an article about Bitcoin, you might want to consider
          This title suggests that the article will delve into the world of Bitcoin
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Grid className=" mt-2" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {/* card 1 */}
  <Grid item xs={6}>
      
  <CardActionArea>
        <CardMedia>
          <Image src={Pakistan} alt="news" width='full' height={500} ></Image>
        </CardMedia>
        <CardContent>

        <span className=" text-2xl bg-red-500 font-semibold p-1 rounded-md px-2" > Political </span>

          <Typography className=" mt-1" gutterBottom variant="h5" component="div">
          Shehbaz Sharif takes oath as 24th prime minister
          </Typography>
            
          <Typography className=" font-bold" >
            By Jahid Hossain Mar 15-3-2024
          </Typography>

          <Typography variant="body2" color="text.secondary">
          Certainly! If youre looking to write an article about Bitcoin, you might want to consider
          This title suggests that the article will delve into the world of Bitcoin
          </Typography>
        </CardContent>
      </CardActionArea>


  </Grid>
 
 {/* card 2 */}
  <Grid item xs={6}>
    
  <CardActionArea>
        <CardMedia>
          <Image className=" h-[215px]" src={france} alt="news" width='full' height={500} ></Image>
        </CardMedia>
        <CardContent>

        <span className=" text-2xl bg-red-500 font-semibold p-1 rounded-md px-2" > Voting</span>

          <Typography className=" mt-1" gutterBottom variant="h5" component="div">
          France Is Voting to Enshrine Abortion Rights
          </Typography>
            
          <Typography className=" font-bold" >
            By Jahid Hossain Mar 15-3-2024
          </Typography>

          <Typography variant="body2" color="text.secondary">
          Certainly! If youre looking to write an article about Bitcoin, you might want to consider
          This title suggests that the article will delve into the world of Bitcoin
          </Typography>
        </CardContent>
      </CardActionArea>

  </Grid>

  {/* card 3 */}
  <Grid className=" mt-2" item xs={6}>
    
    <CardActionArea>
          <CardMedia>
            <Image src={Getty} alt="bit" width='full' height={500} ></Image>
          </CardMedia>
          <CardContent>
  
          <span className=" text-2xl bg-red-500 font-semibold p-1 rounded-md px-2" > Political </span>
  
            <Typography className=" mt-1" gutterBottom variant="h5" component="div">
            State of the Union Speech Will Serve as Crucial Test For Many Voters
            </Typography>
              
            <Typography className=" font-bold" >
              By Jahid Hossain Mar 15-3-2024
            </Typography>
  
            <Typography variant="body2" color="text.secondary">
            Certainly! If youre looking to write an article about Bitcoin, you might want to consider
            This title suggests that the article will delve into the world of Bitcoin
            </Typography>
          </CardContent>
        </CardActionArea>
  
    </Grid>

 {/* card 4 */}
 <Grid className="mt-2" item xs={6}>
    
    <CardActionArea>
          <CardMedia>
            <Image src={Gaza} alt="bit" width='full' height={500} ></Image>
          </CardMedia>
          <CardContent>
  
          <span className=" text-2xl bg-red-500 font-semibold p-1 rounded-md px-2" > Ignite </span>
  
            <Typography className=" mt-1" gutterBottom variant="h5" component="div">
            UN rights chief says ‘powder keg’ Gaza could ignite wider war
            </Typography>
              
            <Typography className=" font-bold" >
              By Jahid Hossain Mar 15-3-2024
            </Typography>
  
            <Typography variant="body2" color="text.secondary">
            Certainly! If youre looking to write an article about Bitcoin, you might want to consider
            This title suggests that the article will delve into the world of Bitcoin
            </Typography>
          </CardContent>
        </CardActionArea>
  
    </Grid>

 
</Grid>


            
            </Box>  
        </>
    );
};

export default LatestNews;