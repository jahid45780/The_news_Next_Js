import { getCategoriesNews } from "@/utils/getCategoriyNews";
import { Fullscreen } from "@mui/icons-material";
import { Box, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";




const DynamicNewsPage =  async ({ params, searchParams }) => {
              const {data} = await getCategoriesNews(searchParams.category)
            // console.log(data);
    return (
        <div>
          
               <Grid className=" grid lg:grid-cols-2 md:grid-cols-1 gap-4 mt-3" >
                {
                    data.map((news)=>(
                        <Grid key={news.id} className=" mt-2">
    
                      
                       <Link href={`/${news.category.toLowerCase()}/${news._id}`} >   
                        <CardActionArea>
                              <CardMedia>
                                <Image className=" h-80" src={news.thumbnail_url} alt="news" width={600} height={400} ></Image>
                              </CardMedia>
                              <CardContent>
                      
                              <span className=" text-2xl text-white bg-red-500 font-semibold p-1 rounded-md px-2" > {news.category} </span>
                      
                                <Typography className=" mt-1" gutterBottom variant="h5" component="div">
                                {news.title.length>20? news.title.slice(0,20)+ '...':news.title}
                                </Typography>

                               <Box className=" flex justify-between items-center" >
                               <Typography className=" font-black" >
                                   {news.author.name}
                                </Typography>

                                <Typography>
                                   <Image className=" w-12 h-12 rounded-full" src={news.author.img} alt="ak" width={200} height={200} ></Image>
                                </Typography>
                               </Box>
                                  
                                <Typography className=" font-bold" >
                                Published  {news.author.published_date}
                                </Typography>
                      
                                <Typography variant="body2" color="text.secondary">
                                {news.details.length>200? news.details.slice(0,200)+ '...':news.details}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                        
                            </Link>
                      
                      
                        </Grid>
                    ))
                }
               </Grid>

        </div>
    );
};

export default DynamicNewsPage;