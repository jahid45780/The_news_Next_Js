import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import Bit from '@/assets/images.jpg'

const SiteBar = () => {
    return (
        <Box className=" mt-2" >
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
        </Box>
    );
};

export default SiteBar;