import { Routes, Route } from "react-router-dom";

import { Navigation } from "./routes/navigation/Navigation";
import { Cred ,Shop,Home, Tour, Tourdetails} from "./screens";
import { Minidrawer } from "./components/drawer/Minidrawer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
      </Route>
      <Route path="cred" element={<Cred />}></Route>
      <Route path="mui" element={<Minidrawer />}></Route>
      <Route path="tourpage" element={<Tourdetails />}></Route>
    </Routes>
  );
}

export default App;

// import React, { useState } from "react";
// import {
//     Box,
//     Button,
//     createStyles,
//     IconButton,
//     makeStyles,
//     Modal,
//     Typography
// } from "@material-ui/core";
// import Close from "@material-ui/icons/Close";
// import Dialog from '@material-ui/core/Dialog';
// import { threadId } from "worker_threads";
// const useStyles = makeStyles(theme =>
//     createStyles({
//         paper: {
//             backgroundColor: theme.palette.background.paper,
//             borderRadius: "40px",
//             padding: theme.spacing(3, 3, 3),
//             textAlign: "center",
//             width: '550px',
//             "& h1": {
//                 fontSize: "40px",
//                 color: "#700010",
//                 marginBottom: "5px",
//                 paddingBottom: "12px",
//                 fontFamily: "Roboto, Helvetica, Arial, sans-serif"
//             }
//         },
//         dialogContent :{
//         "& .MuiDialog-paper":{
//             borderRadius: "40px",
//         },
//         "& .MuiDialog-paperScrollPaper":{
//             maxHeight:'auto',
//         }
//         },
//         root: {
//             width: "450px",
//             margin: "auto"
//         },
//         selectValue : {
//             display:"flex",
//             gap:"12px"
//         },
//         success: {
//             // width: "300px",
//             margin: "auto"
//         },
//         successIcon: {
//             fontSize: "50px",
//             color: "#a60018",
//             marginBottom: "25px"
//         },
//         successContent: {
//             fontSize: "26px",
//             fontWeight: 700,
//             color: "#700010"
//         },
//         copycodeicon: {
//             width: "15px"
//         },
//         selectordiv: {
//             // color: "red",
//             // paddingTop: "4rem"
//         },
//         selectorQuantityText: {
//             fontSize: "20px !important"
//         },
//         selectorhead: {
//             // color: "blue"
//             display: "flex",
//             justifyContent: "space-evenly"
//         },
//         selector: {
//             background:"none",
//             border: "none"
//         },
//         selectorQuantity: {
//             display: "flex",
//             // justifyContent: "space-evenly",
//             padding: "32px",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "117px",
//         },
//         selectorTag: {
//             fontSize: "20px !important"
//         },
//         quantitybtn: {
//              borderRadius: "50%",
//              backgroundColor: "#a6001915",
//              padding:"7px",
//              cursor:"pointer",
//              width:"21px",
//         },

//         quanValue:{
//             fontSize:"18px"
//         },

//         item:{
//             background:"#a6001915",
//         },

//         successbtn: {
//             border: "1px solid #a60018",
//             borderRadius: "30px",
//             padding: " 14px 55px",
//             textDecoration: "none",
//             textTransform: "capitalize",
//             color: "#fff",
//             margin: "20px auto 20px",
//             fontWeight: "bold",
//             backgroundColor: "#a60018",
//             boxShadow: "0px 10px 20px #a6001942 !important",
//             "&:hover": {
//                 backgroundColor: "#a60018"
//             }
//         },
//         iconClose: {
//             position: "relative",
//             top: "10px",
//             left: "46%",
//             backgroundColor: "#a6001915",
//             "& svg ": {
//                 color: "#a60018",
//                 fontSize: "14px"
//             }
//         },
//         congratesContent: {
//             color: "#808080",
//             fontSize: "14px",
//             width: "70%",
//             margin: "auto",
//             padding: "5px 0 5px"
//         },
//         celebrateicon: {
//             width: "60px",
//             height: "50px"
//         },
//         clickcode: {
//             cursor: "pointer"
//         },
//         celebratecontent: {
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "15px"
//         },
//         continue: {
//             border: "1px solid #a60018",
//             borderRadius: "30px",
//             padding: " 10px 55px",
//             textDecoration: "none",
//             textTransform: "capitalize",
//             color: "#fff",
//             margin: "20px auto 20px",
//             fontWeight: "bold",
//             backgroundColor: "#a60018",
//             boxShadow: "0px 10px 20px #a6001942 !important",
//             width: "60%",
//             "&:hover": {
//                 backgroundColor: "#a60018"
//             }
//         },
//         link: {
//             width: "100%",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontSize: "14px",
//             color: "#808080",
//             marginTop: "15px",
//             marginBottom: "0",
//             "& a ": {
//                 color: "#700010",
//                 fontWeight: "600",
//                 padding: "0 5px",
//                 textDecoration: "underline",
//                 textTransform: "uppercase"
//             },
//             "& span": {
//                 color: "#700010",
//                 "& svg": {
//                     height: "18px"
//                 }
//             }
//         }
//     })
// );

// const CustomModalWeb = (props: any) => {
//     const classes = useStyles() as any;
//     console.log("props",props)
//     // const [plusValue1,setPlusValue] = useState(0);

//    const handleIncrement2 = () => {
//         console.log("incremnet clicked")
//         // setPlusValue(plusValue1+1)
//     }

//     const handleDecrement2 = () => {
//         console.log("incremnet clicked")
//         // if(plusValue1 === 0){
//         //     return
//         // }
//         // setPlusValue(plusValue1-1)
//     }

//     return (
//         <Dialog className={classes.dialogContent} onClose={props.handleClose} open={props.isModalOpen}>
//             <div className={classes.paper}>
//                 <Box>
//                     <IconButton
//                         onClick={props.handleClose}
//                         className={classes.iconClose}
//                         aria-label="close"
//                     >
//                         <Close />
//                     </IconButton>
//                 </Box>
//                 <form className={classes.success} noValidate autoComplete="off">
//                     {props.statusImage && <props.statusImage className={classes.successIcon} />}
//                     <div>
//                         <Typography variant="h1" className={classes.successContent}>
//                             {props.title}
//                         </Typography>
//                     </div>
//                     <Typography>
//                         {props.description}
//                     </Typography>
//                     <div className={classes.selectordiv}>
//                     <Typography className={classes.selectorQuantity}>
//                         <text className={classes.selectorQuantityText}>Quantity</text>
//                         <Typography className={classes.selectValue}>
//                             <p className={classes.quantitybtn} onClick={props.handleIncrement2}>+</p><p className={classes.quanValue}>{props.plusValue1}</p><p onClick={props.handleDecrement2} className={classes.quantitybtn}>-</p>
//                         </Typography>
//                     </Typography>
//                     <Typography className={classes.selectorhead}>
//                         <text className={classes.selectorTag}>Frequency</text> <select className={classes.selector}>
//                             <option className={classes.item}>Weekly</option>
//                             <option className={classes.item}>Bi-weekly</option>
//                             <option className={classes.item}>Monthly</option>
//                         </select>
//                     </Typography>
//                     </div>
//                     <Button
//                         variant="contained"
//                         className={classes.successbtn}
//                         onClick={() => {props.handleButton1(props.plusValue1)}}
//                     >
//                         {props.btnTitle}
//                     </Button>
//                 </form>
//             </div>
//         </Dialog>
//     );
// };

// export default CustomModalWeb
