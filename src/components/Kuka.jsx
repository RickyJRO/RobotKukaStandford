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
import tabela1 from '../assets/KukaTables/tabela1.jpg'
import tabela2 from '../assets/KukaTables/tabela2.jpg'
import tabela3 from '../assets/KukaTables/tabela3.jpg'


import KukaGif from '../assets/Kuka Animations/KukaGifGrande.gif'
import { IoArrowRedoSharp } from "react-icons/io5";
import { IoArrowUndoSharp } from "react-icons/io5";
export default function Kuka() {
    const [page,setPage]= useState(0);

    const changePageRight = () => {
        if(page==0){
            setPage(1)
        }else if(page==1){
            setPage(2)
        }else if(page==2){
            setPage(3)
        }else if(page==3){
            setPage(4)
        }else{
            setPage(0)
        }
    }
    const changePageLeft = () => {
        if(page==0){
            setPage(4)
        }else if(page==1){
            setPage(0)
        }else if(page==2){
            setPage(1)
        }else if(page==3){
            setPage(2)
        }else{
            setPage(3)
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
                <h2>Projeto de<span style={{color:"rgb(41, 231, 214)"}}> Rob??tica</span></h2>
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
                <motion.h2 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}} exit={{opacity:0}}>A obten????o destas poses ?? feita trav??s do comando KR5.plot( vari??vel ), sendo o que as distingue as os ??ngulos de cada junta</motion.h2>
                <motion.div
                initial={{y:-2000}}
                animate={{y:0}}
                exit={{y:-2000}}
                transition={{duration:1}}
                className="kukaposes__top">
                    <motion.div
                    whileHover={{scale:1.5}}
                    className="kukaposes_card">
                    <p>Pose qi = [0 0 0 0 0 0]
                    </p>
                    <img src={KukaPos1} className="kukapos_img"/>
                    </motion.div>
                    <motion.div
                    whileHover={{scale:1.5}} className="kukaposes_card">
                    <p>Pose qk1 = [ pi/2 pi/2 0 0 0 0 ]</p>
                    <img src={KukaPos2} className="kukapos_img"/>
                    </motion.div>
                    <motion.div
                    whileHover={{scale:1.5}} className="kukaposes_card">
                    <p>Pose qk2 = [ pi/2 pi/2 -pi 0 0 0 ]</p>
                    <img src={KukaPos3} className="kukapos_img"/>
                    </motion.div>
                </motion.div>
                <motion.div
                initial={{y:2000}}
                animate={{y:0}}
                exit={{y:2000}}
                transition={{duration:1}}
                className="kukaposes__bottom">
                    <motion.div
                    whileHover={{scale:1.5}} className="kukaposes_card">
                    <p>Pose qk3 = [ pi/2 pi/2 -pi 0 pi/2 0 ]</p>
                    <img src={KukaPos4} className="kukapos_img"/>
                    </motion.div>
                    <motion.div
                    whileHover={{scale:1.5}} className="kukaposes_card">
                    <p>Pose qk4 = [ pi/2 pi/1.5 -pi 0 pi/2 0 ]</p>
                    <img src={KukaPos5} className="kukapos_img"/>
                    </motion.div>
                    <motion.div
                    whileHover={{scale:1.5}} className="kukaposes_card">
                    <p>Pose qf = [ pi/2 pi/-4 -pi 0 pi/2 0 ]</p>
                    <img src={KukaPos6} className="kukapos_img"/>
                    </motion.div>
                    <motion.div
                    whileHover={{scale:1.5}} className="kukaposes_card">
                    <p>Pose obtida pela fun????o ikine</p>
                    <img src={KukaPos7} className="kukapos_img"/>
                    </motion.div>
                </motion.div>
                </motion.div>
            }
            {page==1 &&
            <div>
                <motion.div
                className="kukagifs">
                <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}} exit={{opacity:0}}>Anima????es</motion.h1>
                    <motion.div
                     initial={{y:-2000}}
                     animate={{y:0}}
                     exit={{y:-2000}}
                     transition={{duration:1}}
                    className="kukagifs__top">
                         <motion.div
                        whileHover={{scale:1.5}} className="kukagifs__card">
                        <p>Transi????o da vari??vel q1 para qk1</p>
                        <img src={KukaAnimation1} className="kukagifs_img"/>
                        </motion.div>
                    
                        <motion.div
                    whileHover={{scale:1.5}} className="kukagifs__card">
                        <p>Transi????o da vari??vel qk1 para qk2</p>
                        <img src={KukaAnimation2} className="kukagifs_img"/>
                        </motion.div>
                        <motion.div
                    whileHover={{scale:1.5}} className="kukagifs__card">
                        <p>Transi????o da vari??vel qk2 para qk3</p>
                        <img src={KukaAnimation3} className="kukagifs_img"/>
                        </motion.div>
                    </motion.div>
                    <motion.div
                    initial={{x:2000}}
                    animate={{x:0}}
                    exit={{x:2000}}
                    transition={{duration:1}}
                    className="kukagifs__bottom">
                         <motion.div
                    whileHover={{scale:1.5}} className="kukagifs__card">
                        <p>Transi????o da vari??vel qk3 para qk4</p>
                        <img src={KukaAnimation4} className="kukagifs_img"/>
                        </motion.div>
                        <motion.div
                    whileHover={{scale:1.5}} className="kukagifs__card">
                        <p>Transi????o da vari??vel qk4 para qf</p>
                        <img src={KukaAnimation5} className="kukagifs_img"/>
                        </motion.div>
                    </motion.div>
                </motion.div>
                
            </div>
            }
            {page==2 &&
            <>
            <div className="interfacegrafica__kuka">
            <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}} exit={{opacity:0}}>Interface Gr??fica</motion.h1>
            <p>Esta interface gr??fica ?? conseguida atrav??s da fun????o teach e com isto podemos alterar as posi????es das juntas do rob?? de forma mais acess??vel</p>
            <motion.div
            initial={{y:500,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:1}}
            exit={{y:500}}
            className="gifkuka__card">
                <div className="gifkuka">
                    <img src={KukaGif} className="kuka__gif"/>
                </div>
            
            </motion.div>
            </div>
            </>}
            {page==3 &&
            <>
            <div className="kukatabelas">
            <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}} exit={{opacity:0}}>Par??metros de Denavit-Hartenberg, Cinem??tica Inversa</motion.h1>
            <motion.div
            initial={{y:500,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:1}}
            className="kukatabelas__container">
            <div className="kukatabelas__top">
            <img src={tabela1} />
            <p className="kukatabelas__topp">Os par??metros de Denavit???Hartenberg (tamb??m chamados de par??metros DH) s??o quatro par??metros associados a uma conven????o para fixar sistemas de refer??ncia aos elos de uma cadeia cinem??tica espacial, ou manipulador rob??tico.<br></br><br></br>
            Os quatro par??metros s??o:<br></br>
            <strong>theta:</strong>??ngulo em torno do z anterior, do x anterior at?? o x.<br></br>
            <strong>d</strong>: dist??ncia ao longo do z anterior at?? a normal comum.<br></br>
            <strong>a</strong>: comprimento da normal comum. No caso de uma junta rotacional, este ?? o raio ao redor do z anterior.<br></br>
            <strong>alpha</strong>: ??ngulo em torno da normal comum, do z anterior ao z novo<br></br><br></br>
            Na tabela podemos ver que todas as nossas juntas s??o de rota????o e confirmamos isto pois no theta todas as juntas t??m <strong>q</strong> em vez de um valor. Caso houvesse uma junta prism??tica ou seja de transla????o aparecia o <strong>q</strong> na coluna <strong>d</strong>.<br></br>
            Na coluna <strong>a</strong> temos os valores do raio ao redor do z anterior. N??o existe valor de comprimento pois n??o temos juntas prism??ticas.<br></br>
            Por ??ltimo na coluna <strong>alpha</strong> est??o os valores dos angulos em torno da normal comum, do z anterior ao z novo.<br></br>
            
            </p>
            <hr></hr>
            </div>
            <div className="kukatabelas__bot">
               
            <img src={tabela2} />
            <p className="kukatabelas__bott">Esta matriz foi conseguida atrav??s da fun????o <strong>fkine</strong> da pose <strong>qf</strong>. O output ?? uma matriz (4x4) e representa a transforma????o homog??nea da pose <strong>qf</strong>.<br></br>
               </p>
               <hr></hr>
            <img src={tabela3} />
                <p className="kukatabelas__bott"> Estas coordenadas foram conseguidas atrav??s da fun????o <strong>ikine</strong> da transforma????o homog??nea feita anteriormente. O output desta fun????o s??o um conjunto de coordenadas das juntas (1xN) que corresponde ?? pose do efetor final.<br></br>
                Tamb??m conseguimos ver que esta fun????o demorou 0.033555 segundos a realizar e isto ?? conseguido atrav??s das fun????es <strong>tic e toc</strong>. A fun????o <strong>tic</strong> come??a um cron??metro e o <strong>toc</strong> para o cronometro e calcula o tempo que demorou a fazer a fun????o foi pedida.<br></br></p>
                        </div>
            </motion.div>
            </div>
           
            </>
            }
            {page==4 &&
            <>
            <div className="kukacodigo">
            <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} exit={{opacity:0}}>C??digo</motion.h1>
            <motion.div
            initial={{y:1000}}
            animate={{y:0}}
            exit={{y:1000}}
            transition={{duration:1}}
            className="kukacodigo_card">
                <div className="kukacodigo_text">
                    <p>
                        <span style={{color:'green'}}>
                        %            theta    d           a       alpha<br></br>
                        </span>
                        links = [<br></br>
                                Link([0        0.4         0.18    pi/2])<br></br>
                                Link([0        0.135       0.60    pi])<br></br>
                                Link([0        0.135       0.12   -pi/2])<br></br>
                                Link([0        0.62        0       pi/2])<br></br>
                                Link([0        0           0      -pi/2])<br></br>
                                Link([0        0           0       0])<br></br>
                        ];<br></br>
                        <br></br>
                        <span style={{color:'green'}}>
                        %theta = ??ngulo da articula????o<br></br>
                        %d = offset do link da posi????o inicial<br></br>
                        %a = length do link<br></br>
                        %alpha = orienta????o do link (em radianos)<br></br>
                        </span>
                        <br></br>
                        <span style={{color:'green'}}>
                        %Uma class que representa um arm-type robot. Os argumentos que leva s??o os<br></br>
                        %nossos links criados em cima e definir o nome do rob?? como 'Kura KR5'<br></br>
                        </span>
                        KR5=SerialLink(links, 'name', 'Kuka KR5');<br></br>
                        <br></br>
                        <span style={{color:'green'}}>
                        %posi????es do nosso rob??<br></br>
                        </span>
                        qi = [0 0 0 0 0 0];<br></br>
                        qk1=[pi/2 pi/2 0 0 0 0];<br></br>
                        qk2=[pi/2 pi/2 -pi 0 0 0];<br></br>
                        qk3=[pi/2 pi/2 -pi 0 pi/2 0];<br></br>
                        qk4=[pi/2 pi/1.5 -pi 0 pi/2 0];<br></br>
                        qf = [pi/2 pi/-4 -pi 0 pi/2 0];<br></br>
                        <br></br>
                        <span style={{color:'green'}}>
                        %anima????o entre duas posi????es e o tempo de anima????o<br></br>
                        </span>
                        qa1 = jtraj(qi,qk1,50);<br></br>
                        qa2 = jtraj(qk1,qk2,50);<br></br>
                        qa3 = jtraj(qk2,qk3,50);<br></br>
                        qa4 = jtraj(qk3,qk4,50);<br></br>
                        qa5 = jtraj(qk4,qf,50);<br></br>
                        <br></br>
                        <span style={{color:'green'}}>
                        %ir buscar a transforma????o homog??nea que representa a pose<br></br>
                        </span>
                        T = KR5.fkine(qf);<br></br>
                        <br></br>
                        <span style={{color:'green'}}>
                        %Aqui temos as coordenadas das juntas(1xN) correspondentes ?? pose end-factor do robo KR5 <br></br>
                        </span>
                        q = KR5.ikine(T, [1 1 1 0 0 1]);<br></br>
                        <br></br>
                        <span style={{color:'green'}}>
                        %A fun????o tic e toc serve para mostrar o intervalo de tempo <br></br>
                        %que demora a fazer um determinado calculo.<br></br>
                        </span>
                        
                        tic; KR5.ikine(T, [1 1 1 0 0 1]); toc<br></br>
</p>
                </div>
            </motion.div>
            </div>
            </>}
        </motion.div>
    )
}
