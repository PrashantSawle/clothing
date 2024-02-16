// import React, { Component } from 'react';
// import MenuList from '@material-ui/core/MenuList';
// import { Box, styled, ListItemIcon, ListItemText } from '@material-ui/core';
// import MenuItem from '@material-ui/core/MenuItem';
// import CustomButton from './CustomButton.web';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Grow from '@material-ui/core/Grow';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
// type SimpleMenuState = {
//   anchorEl: null | HTMLElement;
//   selectedList: number | null;
// }
// type DropDownProp = {
//   label: string,
//   index?: number,
//   listData: any[],
//   downArrowIcon: React.ReactNode,
//   upArrowIcon: React.ReactNode,
//   rightIcon?:  React.ReactNode,
//   btnStyle?: any,
//   customeStyle?: any,
//   handleTarget: (item:string) => void;
//   btnDisplay?: 'primary' | 'primaryWithBorder' | 'lightWhite' | 'light' | 'secondary' | "textButton" | 'successBorderless' | 'successWithBorder' | 'secondaryBorderless' | 'secondaryWithBorder' | 'error';
// }
// const DropDownStyling = styled(Box)({
//   position: "relative",
//   "& .customBtn":{
//     textTransform: "capitalize"
//   },
//   "& .dropdownList:hover":{
//     background: "#fff",
//     color: "#2563EB"
//   },
//   "& .menuContainer":{
//     position: "absolute !important" as "absolute",
//     top: "100% !important",
//     width: "100%",
//     minWidth: "220px"
//   }
// })
// export default class DropDownMenu extends Component<DropDownProp, SimpleMenuState>{
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       anchorEl: null,
//       selectedList: null,
//     };
//   }
//   private handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
//     this.setState({ anchorEl: event.currentTarget, selectedList: index });
//   };
//   private handleClose = () => {
//     this.setState({ anchorEl: null, selectedList: null });
//   };
//   render(): React.ReactNode {
//     const { anchorEl } = this.state;
//     return (
//       <DropDownStyling>
//         <CustomButton styles={this.props.btnStyle} display={this.props.btnDisplay} themes='primary' onClickHandle={(event) => this.handleClick(event, this.props.index || 0)}
//           className={`customBtn`}
//         >
//           {this.props.rightIcon}
//           {this.props.label}
//           {this.props.index === this.state.selectedList ? this.props.upArrowIcon : this.props.downArrowIcon}
//         </CustomButton>
//         <Popper
//             open={Boolean(anchorEl)}
//             transition
//             placement="top-start"
//             disablePortal
//             className='menuContainer'
//             >
//           {({ TransitionProps }) => (
//             <Grow
//               {...TransitionProps}
//             >
//               <Paper>
//                 <ClickAwayListener onClickAway={this.handleClose}>
//                   <MenuList autoFocusItem={Boolean(anchorEl)}>
//                       {this.props.listData.map((item: any) => {
//                         return (
//                             <MenuItem onClick={() => this.props.handleTarget(item?.url)} className='dropdownList' >
//                               {item?.icon ? <ListItemIcon><img src={item.icon}/> </ListItemIcon>: ""}
//                               <ListItemText>{item?.title ? item.title : item}</ListItemText>
//                             </MenuItem>
//                         )
//                       })
//                       }
//                   </MenuList>
//                 </ClickAwayListener>
//               </Paper>
//             </Grow>
//           )}
//         </Popper>
//       </DropDownStyling>
//     )
//   }
// }

// import React, { Component } from 'react';
// import MenuList from '@material-ui/core/MenuList';
// import { Box, styled, ListItemIcon, ListItemText } from '@material-ui/core';
// import MenuItem from '@material-ui/core/MenuItem';
// import CustomButton from './CustomButton.web';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Grow from '@material-ui/core/Grow';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
// // type SimpleMenuState = {
// //   anchorEl: null | HTMLElement;
// //   selectedList: number | null;
// // }
// // type DropDownProp = {
// //   label: string,
// //   index?: number,
// //   listData: any[],
// //   downArrowIcon: React.ReactNode,
// //   upArrowIcon: React.ReactNode,
// //   rightIcon?:  React.ReactNode,
// //   btnStyle?: any,
// //   customeStyle?: any,
// //   handleTarget: (item:string) => void;
// //   btnDisplay?: 'primary' | 'primaryWithBorder' | 'lightWhite' | 'light' | 'secondary' | "textButton" | 'successBorderless' | 'successWithBorder' | 'secondaryBorderless' | 'secondaryWithBorder' | 'error';
// // }
// const DropDownStyling = styled(Box)({
//   position: "relative",
//   "& .customBtn":{
//     textTransform: "capitalize"
//   },
//   "& .dropdownList:hover":{
//     background: "#fff",
//     color: "#2563EB"
//   },
//   "& .menuContainer":{
//     position: "absolute ",
//     top: "100% !important",
//     width: "100%",
//     minWidth: "220px"
//   }
// })
// export default class DropDownMenu extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       anchorEl: null,
//       selectedList: null,
//     };
//   }
//    handleClick = (event, index) => {
//     this.setState({ anchorEl: event.currentTarget, selectedList: index });
//   };
//    handleClose = () => {
//     this.setState({ anchorEl: null, selectedList: null });
//   };
//   render() {
//     const { anchorEl } = this.state;
//     return (
//       <DropDownStyling>
//         <CustomButton styles={this.props.btnStyle} display={this.props.btnDisplay} themes='primary' onClickHandle={(event) => this.handleClick(event, this.props.index || 0)}
//           className={`customBtn`}
//         >
//           {this.props.rightIcon}
//           {this.props.label}
//           {this.props.index === this.state.selectedList ? this.props.upArrowIcon : this.props.downArrowIcon}
//         </CustomButton>
//         <Popper
//             open={Boolean(anchorEl)}
//             transition
//             placement="top-start"
//             disablePortal
//             className='menuContainer'
//             >
//           {({ TransitionProps }) => (
//             <Grow
//               {...TransitionProps}
//             >
//               <Paper>
//                 <ClickAwayListener onClickAway={this.handleClose}>
//                   <MenuList autoFocusItem={Boolean(anchorEl)}>
//                       {this.props.listData.map((item) => {
//                         return (
//                             <MenuItem onClick={() => this.props.handleTarget(item?.url)} className='dropdownList' >
//                               {item?.icon ? <ListItemIcon><img src={item.icon}/> </ListItemIcon>: ""}
//                               <ListItemText>{item?.title ? item.title : item}</ListItemText>
//                             </MenuItem>
//                         )
//                       })
//                       }
//                   </MenuList>
//                 </ClickAwayListener>
//               </Paper>
//             </Grow>
//           )}
//         </Popper>
//       </DropDownStyling>
//     )
//   }
// }