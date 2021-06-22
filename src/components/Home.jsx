import React from 'react'
import './Home.css'
import kuka from '../assets/kuka.png'
import Standford from '../assets/standford.png'
import robot from '../assets/robot.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5}}
            exit={{opacity:0}}
        >
             <div className="hero">
                <div className="hero__header">
                <h2>Projeto de<span style={{color:"rgb(41, 231, 214)"}}> Robótica</span></h2>
                <h4>Trabalho realizado</h4>
                <h3>Ricardo Oliveira, Filipe Mota, João Cristo, Miguel Silva, Guilherme Oliveira</h3>  
                </div>
                <div className="hero__bottom">
                <motion.div
                animate={{rotate:20}}
                className="hero__left">
                    <motion.img
                    animate={{
                    rotate: [0, 0, 15, 15, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    src={kuka} className="robot__kuka" />
                </motion.div>
                <motion.div
                animate={{rotate:-20}}
                className="hero__right">
                <motion.img
                animate={{
                    rotate: [0, 0, -15, -15, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{ repeat: Infinity, duration: 4 }}
                src={Standford} className="robot__standford" />
                </motion.div>
                </div>
                
                
                <div className="robotcontainer">
                <motion.img initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.5}} src={robot} className="robot" />
                </div>
                <div className="tutorial1">
                
                <div className="butao_container">
                <Link to="Kuka">
                <motion.button
                whileHover={{scale:1.1, cursor:'pointer'}}
                onTap={{scale:0.8}}
                className="kuka__button">Robot Kuka</motion.button>
                </Link>
                <Link to="Standford">
                <motion.button
                whileHover={{scale:1.1,cursor:'pointer'}}
                onTap={{scale:0.8}}
                className="standford__button">Robot Standford</motion.button>   
                </Link>
                </div>
            </div>
            </div>
        </motion.div>
    )
}
