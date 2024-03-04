import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import News from '@/assets/news.png'
import { useScramble } from "use-scramble";
import {showCurrentDate } from "@/utils/getCurrentDate";
 

const Header = () => {
    const { ref, replay } = useScramble({ 
        text: "Stay Updated with the Latest News!",
      });

      const currentDate = showCurrentDate()
    return (
        <Box className=' mb-2' >
            <Container>
                <Image className=" mx-auto" src={News} width={300} height={100} alt="news" ></Image>
                 <Typography className=" text-center text-3xl text-sky-600" >
                 <a
  ref={ref} 
  onMouseOver={replay} 
  onFocus={replay} 
/>
                 </Typography>

         <Typography className=" text-center text-2xl mt-1 text-sky-600" >
            {currentDate}
         </Typography>

            </Container>
        </Box>
    );
};

export default Header;