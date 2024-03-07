"use client"
import * as React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { AppBar, IconButton, Menu, Stack } from '@mui/material';
import logo from '@/assets/logo.png'  
import Image from 'next/image';

// icon
import FacebookIcon from '@mui/icons-material/Facebook';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import DraftsIcon from '@mui/icons-material/Drafts';
import Link from 'next/link';
import Header from './Header';
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
    pathname:'/categories/news?category=all-news' 
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

function Navbar () {
  


  return (
        <>

        <Header/>
        
        <AppBar position="static" className=' bg-black' >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Image src={logo} alt='logo' width={130} height={100} ></Image>

          <Box className="w-full text-center" >
            {NavItem.map((item) => (
              
              <Link key={item} href={item.pathname} >
                <Button className= " text-white"  > {item.route} </Button>
              </Link>

            ))}
          </Box>

           <Box>
         <Stack direction="row" sx={{
               "& svg":{
                  color: 'white'
               }
         }} >
         <IconButton>
               <FacebookIcon/>
            </IconButton>
            <IconButton>
               <AddIcCallIcon/>
            </IconButton>
            <IconButton>
               <DraftsIcon/>
            </IconButton>
         </Stack>
           </Box>

        </Toolbar>
      </Container>
    </AppBar>
        
        
        </>
  );
}
export default Navbar;