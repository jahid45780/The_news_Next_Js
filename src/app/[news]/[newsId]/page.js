import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";


const NewsDetailPage = async ({params}) => {
    const {data} = await getSingleNews(params.newsId)
    // console.log(data);
    return (
        <Box>
        <Container className=" grid lg:grid-cols-2 grid-cols-1 gap-2 mt-3" >
            <Grid item lg={6} >
            <Image className=" w-full" src={data.thumbnail_url} width={500} height={300} alt="news" ></Image>
              
            <Grid className=" lg:flex gap-1 mt-1" >
            <Grid item lg={6} >
            <Image src={data.image_url} width={500} height={300} alt="news" ></Image>
             
            </Grid>

            <Grid item lg={6} >
            <Image src={data.image_url} width={500} height={300} alt="news" ></Image>
             
            </Grid>
            </Grid>

  </Grid>
            <Grid item lg={6} >
                <Typography className=" font-bold" > {data.title} </Typography>
                <Box className=' flex gap-2 items-center mt-2' > 
                    <Avatar alt="ab" src={data.author.img} ></Avatar>
                <Typography className=" font-semibold" > {data.author.name} </Typography>
                </Box>
                <Typography className=" font-mono mt-2" > Published {data.author.published_date}  </Typography>
                <Typography className=" mt-2 font-thin" > {data.details} </Typography>

                <Typography className=" font-semibold mt-3" > ---{data.author.name}--- </Typography>

            </Grid>
        </Container>
        </Box>
    );
};

export default NewsDetailPage;