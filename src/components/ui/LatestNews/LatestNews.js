import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Bit from '@/assets/bit.jpg'
import Pakistan from '@/assets/11.webp'
import france from '@/assets/france-abortion-bill.webp'
import Getty from '@/assets/GettyImages.webp'
import Gaza from '@/assets/highres.webp'
import { getAllNews } from "@/utils/getAllNews";
const LatestNews = async () => {
  const {data} =  await getAllNews()
  // console.log(data);
    return (
        <>
          <Box className=" mt-5" >
            
          <Card>
      <CardActionArea>
        <CardMedia>
          <Image className=" w-full" src={data[0].thumbnail_url} alt="bit" width={500} height={500} ></Image>
        </CardMedia>
        <CardContent>

        <span className=" text-2xl bg-red-500 font-semibold p-1 rounded-md px-2" > {data[0].category} </span>

          <Typography className=" mt-1" gutterBottom variant="h5" component="div">
           {data[0].title}
          </Typography>
            
          <Typography className=" font-bold" >
            {data[0].author.name} {data[0].author.published_date} 
          </Typography>

          <Typography variant="body2" color="text.secondary">
                
          {data[0].details.length>200? data[0].details.slice(0,200)+ '...':data[0].details}

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Grid className=" mt-2" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {/* card 1 */}
  
  {
    data.slice(0,8).map((news)=>(
      <Grid key={news.id} item xs={6}>
      
  <CardActionArea>
        <CardMedia>
          <Image className=" h-80" src={news.thumbnail_url} alt="news" width={500} height={500} ></Image>
        </CardMedia>
        <CardContent>

        <span className=" text-2xl bg-red-500 font-semibold p-1 rounded-md px-2" > {news.category} </span>

          <Typography className=" mt-1" gutterBottom variant="h5" component="div">
          {news.title.length>18? news.title.slice(0,18)+ '...':title.details}
          </Typography>
             
          <Typography className=" font-bold" >
          {news.author.published_date}
          </Typography>

          <Typography variant="body2" color="text.secondary">
              
                {news.details.length>200? news.details.slice(0,200)+ '...':news.details}
            
          </Typography>
        </CardContent>
      </CardActionArea>


  </Grid>
    ))
  }
 </Grid>


            
            </Box>  
        </>
    );
};

export default LatestNews;