import React from 'react';
import Link from '@material-ui/core/Link';
import { Box, styled } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import Typography from '../../../components/src/design-system/Typography.web';
import CustomButton from '../../../components/src/design-system/CustomButton.web';
import TextInput from '../../../components/src/design-system/TextInput.web';
import DropDownMenu from '../../../components/src/design-system/DropDownMenu.web';
import { TextLogo, OrderIcon, CartIcon, UserIcon, LangIcon, SearchIcon } from '../../../components/src/assets'
import { CountryList, OrdersList, accountData, dropDownList, listData, UserRoles } from './utilities';
import FrontHeaderController, { Props, configJSON } from './FrontHeaderController';
import {loginBtn, en_flag} from "./assets";
const HeaderStyle = styled(Box)({
    position: "relative",
    zIndex: 2,
    "& .primaryTextInput .MuiOutlinedInput-root": {
        "& fieldset": {
            border: 'none',
        },
    },
    "& .headerContainer": {
        width: '100vw !important',
        display: 'flex',
        justifyContent: 'center'
    },
    "& .menuBox": {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4vw'
    },
    "& .headerBody": {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '14px',
        border: '1px solid rgb(223, 223, 223)',
        position: 'sticky',
        width: '100vw',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    "& boxItem": {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '3vw'
    },
    "& searchIcon": {
        display: 'flex', justifyContent: 'center', marginTop: '1vh',
        alignItems: 'center',
    },
    "& .searchBox": {
        width: '3.5vw',
        backgroundColor: 'rgba(37, 99, 235, 1)',
        borderBottomRightRadius: '4px',
        borderTopRightRadius: '4px',
        justifyContent: 'center',
        display: 'flex',
    },
    "& .orderBoxContainer": {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    "& .OrderBox": {
        fontWeight: 400,
        fontSize: '14px',
        color: '#333333',
        fontFamily: 'Roboto',
        marginBottom: '-10px',
        marginLeft:'-25px'
    },
    "& .cartBox": {
        display: 'flex',
        alignItems: 'center'
    },
    "& .searchButton": {
        marginTop: '0.6rem',
        background: 'none',
        border: 'none',
    },
    "& .searchImg": {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    "& .cartImg": {
        marginRight: '1vw'
    },
    "& .DropDownContainer": {
        display: 'flex',
        justifyContent: 'center'
    },
    "& .inputContainer": {
        display: 'flex',
        "& >div":{
            marginTop: "0px !important"
        }
    },
    "& .action-box":{
        display: "flex",
        gap: "20px"
    },
    "& .navigation-box":{
        display: "flex",
        gap: "24px"
    },
    "& .link":{
        "textDecoration": "none",
        "padding": "13px 18px",
        "fontSize": "16px",
        "fontFamily": "Roboto",
        "borderRadius": "4px",
        "color": "#333",
        "fontWeight": 500
    },
    "& .signin":{
        alignItems: "center",
        background: "#fff",
        "& .headerBody":{
            justifyContent: "space-between",
            padding: "24px 40px"
        }
    }
})
export default class FrontHeader extends FrontHeaderController {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <HeaderStyle>
               {this.isGuest()  ?
                 [this.isSignScreens() ?
                 <Box className={`headerContainer signin`} style={this.props.customStyle}>
                    <Box className='headerBody'>
                        <Box className='boxItem'>
                            <Link href="/"><img src={TextLogo} alt="" /></Link>
                        </Box>
                        <Box className='action-box'>
                            <DropDownMenu handleTarget={this.navigateToTarget}  label={'En'} btnDisplay="textButton" btnStyle={customeStyle.langBtn} listData={CountryList} upArrowIcon={<ExpandLess />} downArrowIcon={<ExpandMore />}
                                rightIcon={<img src={en_flag} alt="Right Icon" />}
                                index={0} />
                            {this.props.signUpData?.userType!="" && this.props.signUpData?.userType === "customer"
                                ? [(this.props.signUpData?.isSignIn) ? <CustomButton onClickHandle={this.handleSignUrl} display='primary' themes='primary'>{configJSON.singupTxt}</CustomButton>
                                    : <CustomButton onClickHandle={this.handleSignUrl} display='primary' themes='primary'>{configJSON.singinTxt}</CustomButton>]
                                : ''}
                        </Box>
                    </Box>
                </Box>
                    :
                <Box className={`headerContainer`} style={this.props.customStyle}>
                    <Box className='headerBody'>
                        <Box className='boxItem'>
                            <Link href="/"><img src={TextLogo} alt="" /></Link>
                        </Box>
                        <Box className='navigation-box'>
                            <Link href='/'><Typography color='charcoal' size='base'>Home</Typography></Link>
                            <Link><Typography color='charcoal' size='base'>Contact us</Typography></Link>
                        </Box>
                        <Box className='action-box'>
                            <DropDownMenu rightIcon={<img src={loginBtn} alt="" />} handleTarget={this.navigateToTarget} label={'Customers Portal'} btnDisplay="primary" listData={UserRoles} upArrowIcon={<ExpandLess />} downArrowIcon={<ExpandMore />} index={0} />
                            <DropDownMenu handleTarget={this.navigateToTarget}  label={'En'} btnDisplay="textButton" btnStyle={customeStyle.langBtn} listData={CountryList} upArrowIcon={<ExpandLess />} downArrowIcon={<ExpandMore />}
                                rightIcon={<img src={en_flag} alt="Right Icon" />}
                                index={0} />
                        </Box>
                    </Box>
                </Box>]
             :
                <>
                <Box className='headerContainer' style={this.props.customStyle}>
                    <Box className='headerBody'>
                        <Box className='boxItem'>
                            <Link href="/"><img src={TextLogo} alt="" /></Link>
                        </Box>
                        <Box className='inputContainer'>
                            <TextInput
                                placeholder="Search for products, brands & more"
                                value=''
                                onValueChange={() => { }}
                                inputStyles={headerInput}
                            />
                            <Box className='searchBox'>
                                <Box className='searchIcon' >
                                    <CustomButton themes='secondary' className='searchButton' onClickHandle={() => { }}>
                                        <img className='searchImg' src={SearchIcon} alt="" />
                                    </CustomButton>
                                </Box>
                            </Box>
                        </Box>
                        <Box className='boxItem'>
                            <Box className='orderBoxContainer'>
                                <Box className='OrderBox'>Orders</Box>
                                <DropDownMenu btnDisplay='textButton' btnStyle={customeStyle.secondary} handleTarget={this.navigateToTarget} label={'My Items'} listData={OrdersList} upArrowIcon={<ExpandLess />} downArrowIcon={<ExpandMore />} rightIcon={<img src={OrderIcon} alt="Right Icon" />} index={0} />
                            </Box>
                        </Box>
                        <Box className='boxItem' >
                            <DropDownMenu btnDisplay='textButton' btnStyle={customeStyle.secondary} handleTarget={this.navigateToTarget} label={'Account'} listData={accountData} upArrowIcon={<ExpandLess />} downArrowIcon={<ExpandMore />} rightIcon={<img src={UserIcon} alt="Right Icon" />} index={0} />
                        </Box>
                        <Box className='boxItem' >
                            <DropDownMenu btnDisplay='textButton' btnStyle={customeStyle.secondary} handleTarget={this.navigateToTarget} label={''} listData={CountryList} upArrowIcon={<ExpandLess />} downArrowIcon={<ExpandMore />}
                                rightIcon={<img src={LangIcon} alt="Right Icon" />}
                                index={0} />
                        </Box>
                        <Box className='cartBox' >
                            <img className='cartImg' src={CartIcon} alt="" />
                            <Typography size='sm' weight='normal' color='charcoal' children={'Cart'} />
                        </Box>
                    </Box>
                </Box>
                <Box className='DropDownContainer' style={this.props.customStyle}>
                    {this.state.categories?.map((item, index) => {
                        if(item.subCategory.length > 0){
                            return <DropDownMenu btnDisplay='textButton' customeStyle={customeStyle.dropDown} btnStyle={customeStyle.secondary} handleTarget={this.navigateToTarget} index={index} label={item.title} listData={item.subCategory} upArrowIcon={<ExpandLess />} downArrowIcon={<ExpandMore />} />
                        }else{
                            return <Link href={`/category/${item.id}`} className="link">{item.title}</Link>
                        }
                   })}
                </Box>
                </>}
            </HeaderStyle>
        );
    }
}
const headerInput = {
    font: 'Roboto',
    width: '26vw',
    background: '#EDF0F7',
    bordarRedius: '4px',
    marginTop: "0px",
    height: "100%"
}
const customeStyle = {
    langBtn :{
        background: '#fff',
        minHeight: "50px",
        color: "#333"
    },
    secondary: {
        color: "#333"
    },
    dropDown: {
        marginTop: "132px",
        height: "247px",
        top: "0px !important"
    }
}