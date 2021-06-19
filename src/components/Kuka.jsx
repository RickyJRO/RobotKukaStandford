import React,{useState} from 'react'
import './Kuka.css'
import { Link } from 'react-router-dom' 
import { motion } from 'framer-motion'
import KukaPos1 from '../assets/Kuka Positions/Kuka Pos 1.jpg'
import KukaPos2 from '../assets/Kuka Positions/Kuka Pos 2.jpg'
import KukaPos3 from '../assets/Kuka Positions/Kuka Pos 3.jpg'
import KukaPos4 from '../assets/Kuka Positions/Kuka Pos 4.jpg'
import KukaPos5 from '../assets/Kuka Positions/Kuka Pos 5.jpg'
import KukaPos6 from '../assets/Kuka Positions/Kuka Pos 6.jpg'
import KukaPos7 from '../assets/Kuka Positions/kukapos7.jpg'
import KukaAnimation1 from '../assets/Kuka Animations/Kuka Animation 1.gif'
import KukaAnimation2 from '../assets/Kuka Animations/Kuka Animation 2.gif'
import KukaAnimation3 from '../assets/Kuka Animations/Kuka Animation 3.gif'
import KukaAnimation4 from '../assets/Kuka Animations/Kuka Animation 4.gif'
import KukaAnimation5 from '../assets/Kuka Animations/Kuka Animation 5.gif'

import { IoArrowRedoSharp } from "react-icons/io5";
import { IoArrowUndoSharp } from "react-icons/io5";
export default function Kuka() {
    const [page,setPage]= useState(0);

    const changePageRight = () => {
        if(page==0){
            setPage(1)
        }else if(page==1){
            setPage(2)
        }else{
            setPage(0)
        }
    }
    const changePageLeft = () => {
        if(page==0){
            setPage(2)
        }else if(page==1){
            setPage(0)
        }else{
            setPage(1)
        }
    }
    return (
        <motion.div className="kuka">
            <div className="kuka__header">
                <motion.div
                initial={{x:-500, opacity:0}}
                animate={{x:0,opacity:1}}
                exit={{x:-500}}
                transition={{duration:0.35}}
                 className="kukaheader__left">
                <h2>Projeto de<span style={{color:"rgb(41, 231, 214)"}}> Robótica</span></h2>
                </motion.div>
                <motion.div
                initial={{y:-500, opacity:0}}
                animate={{y:0,opacity:1}}
                exit={{y:-500}}
                transition={{duration:0.35,delay:0.3}}
                className="kukaheader__right">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <p className="links">Inicio</p>
                    </Link>
                    <Link to="Standford" style={{ textDecoration: 'none' }}>
                        <p className="links">Standford</p>
                    </Link>
                </motion.div>
            </div>
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration:1,delay:1}}
                className="arrows">
                <motion.div
                animate={{x:[0,0,30,0,0,30,0]}}
                transition={{repeat:Infinity,duration:4}}
                className="arrowleft" onClick={()=> changePageLeft()}>
                <IoArrowUndoSharp className="arrow__left"/>
                </motion.div>
                <motion.div
                animate={{x:[0,0,-30,0,0,-30,0]}}
                transition={{repeat:Infinity,duration:4}}
                className="arrowright" onClick={()=> changePageRight()}> 
                    <IoArrowRedoSharp className="arrow__right"/>
                </motion.div> 
                </motion.div> 
            {page==0 && 
            <motion.div
            exit={{x:-2000}}
            transition={{duration:1}}
            className="kukaposes">
                <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}} exit={{opacity:0}}>Poses</motion.h1>
                <motion.div
                initial={{x:-2000}}
                animate={{x:0}}
                exit={{x:-2000}}
                transition={{duration:1}}
                className="kukaposes__top">
                    <img src={KukaPos1} className="kukapos_img"/>
                    <img src={KukaPos2} className="kukapos_img"/>
                    <img src={KukaPos3} className="kukapos_img"/>
                </motion.div>
                <motion.div
                initial={{x:2000}}
                animate={{x:0}}
                exit={{x:2000}}
                transition={{duration:1}}
                className="kukaposes__bottom">
                    <img src={KukaPos4} className="kukapos_img"/>
                    <img src={KukaPos5} className="kukapos_img"/>
                    <img src={KukaPos6} className="kukapos_img"/>
                    <img src={KukaPos7} className="kukapos_img"/>
                </motion.div>
                </motion.div>
            }
            {page==1 &&
            <div>
                <motion.div
                className="kukagifs">
                <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}} exit={{opacity:0}}>Animações</motion.h1>
                    <motion.div
                     initial={{x:-2000}}
                     animate={{x:0}}
                     exit={{x:-2000}}
                     transition={{duration:1}}
                    className="kukagifs__top">
                    <img src={KukaAnimation1} className="kukapos_img"/>
                    <img src={KukaAnimation2} className="kukapos_img"/>
                    <img src={KukaAnimation3} className="kukapos_img"/>
                    </motion.div>
                    <motion.div
                    initial={{x:2000}}
                    animate={{x:0}}
                    exit={{x:2000}}
                    transition={{duration:1}}
                    className="kukagifs__bottom">
                    <img src={KukaAnimation4} className="kukapos_img"/>
                    <img src={KukaAnimation5} className="kukapos_img"/>
                    </motion.div>
                </motion.div>
                
            </div>
            }
        </motion.div>
    )
}
