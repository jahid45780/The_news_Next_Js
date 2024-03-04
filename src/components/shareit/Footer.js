import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
// icon
import FacebookIcon from '@mui/icons-material/Facebook';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import DraftsIcon from '@mui/icons-material/Drafts';
import Link from "next/link";

const Footer = () => {

    const NavItem = [
        {
          route: 'Home',
          pathname:'/' 
        },
        {
          route: 'Pages',
          pathname:'/pages' 
        },
        {
          route: 'Category',
          pathname:'/category' 
        },
        {
          route: 'News',
          pathname:'/news' 
        },
        {
          route: 'About',
          pathname:'/about' 
        },
        {
          route: 'Contact',
          pathname:'/contact' 
        },
      ];


    return (
        <Box className="bg-black px-2 py-10" >
              <Container>
                
              <Box  className=" w-full text-center"
              sx={{
                "& svg":{
                   color: 'white'
                }
          }}>
         <IconButton>
                 <a href="https://www.facebook.com/mdjahid.hossain.16547"> <FacebookIcon/> </a> 
            </IconButton>
            <IconButton>
               <AddIcCallIcon/>
            </IconButton>
            <IconButton>
               <DraftsIcon/>
            </IconButton>
           </Box>
             
           <Box className="w-full text-center" >
            {NavItem.map((item) => (
              
              <Link key={item} href={item.pathname} >
                <Button className= " text-white"  > {item.route} </Button>
              </Link>

            ))}
          </Box>

          <Typography className=" text-gray-100 text-center"  >
            @2024 tHE News Design By Jahid
          </Typography>
                
        </Container>        
        </Box>

        


    );
};

export default Footer;

