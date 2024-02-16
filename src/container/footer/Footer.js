
import React, { Component } from 'react';
import { Box, styled } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { InstaLogo, FbLogo, TwitterLogo, LinkLogo } from "../assets";
import Typography from './Typography.web';
// type FPropsType = {
//   theme?: string;
// }
export default class Footer extends Component{
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const FooterStyle = styled(Box)({
      "& .footerContainer": {
        backgroundColor: 'rgba(209, 228, 234, 1)',
        color: 'white',
        padding: '20px 0',
        bottom: 0,
        width: '100%',
        marginTop: 'auto',
      },
      "& .footerContent": {
        display: 'flex',
        justifyContent: 'space-evenly',
      },
      "& .listItem": {
        marginBottom: '1vh',
        marginTop: '2vh',
        fontFamily: 'Roboto',
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1rem',
        color: '#333333',
        cursor: 'pointer',
        textDecoration:'none',
      },
      "& .footerSection": {
        marginTop:'3vh',
        marginBottom: '20px',
        color: 'rgba(0, 0, 0, 1)',
      },
      "& .listContainer": {
        listStyle: 'none',
        paddingLeft:'2px',
        margin: 0,
      },
      "& .logo":{
        display: 'flex',
        gap: "16px",
        marginBottom: '2vh',
        marginTop: '2vh'
      },
      "& .dark":{
        padding: "57px 0 106px",
        backgroundColor: "#1B2D54",
        marginTop: "102px"
      },
      "@media(max-width: 767px)":{
        "& .dark, .footerContainer":{
          padding: "57px 40px 106px"
        },
        "& .footerContent":{
          flexDirection: "column"
        },
        "& .socialContainer":{
          paddingTop:'2vh'
        }
      }
    })
    const {theme} = this.props;
    const companyItems = ['About Us', 'Customers Speak', 'Business Partnership', 'Contact Us', 'Careers'];
    const policiesItems = ['Terms and Conditions', 'Privacy Policy', 'Fees and Payments Policy', 'Shipping and Delivery Policy', 'Return, Refund & Cancellation Policy'];
    const servicesItems = ['Order Medicine', 'Healthcare Products', 'Hospitals Product'];
    const shoppingItems = ['Browse by A-Z', 'Browse by Manufacturers', 'Health Articles', 'Offers / Coupons', 'FAQs'];
    // Helper function to generate list items
    const generateListItems = (items) => (
      <>
        <Box className='listContainer'>
          {items.map((item, index) => (
            <Box className='listItem' key={index} >
              <Link style={{color: theme === 'dark' ? 'white' : 'black'}}>{item}</Link>
            </Box>
          ))}
        </Box>
      </>
    );
    // Define the items for each section
    const FooterListItem = [
      {
        name: "COMPANY",
        function: generateListItems(companyItems)
      },
      {
        name: "OUR POLICIES",
        function: generateListItems(policiesItems)
      },
      {
        name: "OUR SERVICES",
        function: generateListItems(servicesItems)
      },
      {
        name: "SHOPPING",
        function: generateListItems(shoppingItems)
      },
    ]
    return (
      <FooterStyle>
        <Box className={`footerContainer ${theme}`}>
          <Box className='footerContent'>
            {
              FooterListItem.map((items) => {
                return (
                  <Box className='footerSection'>
                    <Typography size='xl' weight='semiBold' color={theme === 'dark' ? 'white' : 'black'}>{items.name}</Typography>
                    {items.function}
                  </Box>
                )
              })
            }
            <Box className='footerSection'>
              <Typography size='x' weight='medium' color={theme === 'dark' ? 'white' : 'black'}>CONNECT</Typography>
              <Box className='listContainer socialContainer'>
                <Typography size='xs' weight='normal' color={theme === 'dark' ? 'white' : 'black'}>SOCIAL LINKS</Typography>
                <Box className='logo'>
                  <Link href="#"><img src={InstaLogo} alt="Instagram" /></Link>
                  <Link href="#"><img src={FbLogo} alt="Facebook" /></Link>
                  <Link href="#"><img src={TwitterLogo} alt="Twitter" /></Link>
                  <Link href="#"><img src={LinkLogo} alt="LinkedIn" /></Link>
                </Box>
                <Typography size='xs' weight='normal'  color={theme === 'dark' ? 'white' : 'black'}> Want daily dose of health</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </FooterStyle>
    );
  }
}