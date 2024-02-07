import CardXL from '../../components/CardXl';
import CardLN from '../../components/CardLn';
import CardSM from '../../components/CardSm';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai' 
import '../css/Home.css'
import { useEffect,useState } from 'react';
import LayoutLarge from '../../components/LayoutLarge';
import LayoutSmall from '../../components/LayoutSmall';
import LayoutLine from '../../components/LayoutLine';
import ButtonNavbar from '../../components/ButtonNavbar';
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const data = [
        {
            id:1,
            title:'o melhor anime',
            about:'one piece',
            src:'https://i.ytimg.com/vi/-tWyFMk6q4A/maxresdefault.jpg',
            stars:2,
            user:{name:'user001',src:'https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png'}
        },
        {
            id:2,
            title:'subestimado?!',
            about:'oppenhaimer',
            src:'https://i.ytimg.com/vi/zDNrOhopaXY/maxresdefault.jpg',
            stars:1,
            user:{name:'pessoa',src:'https://static.todamateria.com.br/upload/fe/rn/fernandopessoabiografia.jpg'}
        },
        {
            id:3,
            title:'filme horrível',
            about:'death note live action',
            src:'https://podpop.com.br/PodPOP/wp-content/uploads/2018/12/background-100.png',
            stars:5,
            user:{name:'thalis',src:'https://static.todamateria.com.br/upload/fe/rn/fernandopessoabiografia.jpg'}
        },
    ]
    const buttonsNav = [
        {title:"Ver Perfil",url:"",color:'font'},
        {title:"Postagens Salvas",url:"",color:'font'},
        {title:"Informações",url:"",color:'font'},
        {title:"Configurações",url:'',color:'green'},
        {title:"Encerrar Sessão",url:'',color:'red'},
    ]
    const [layout,setLayout] = useState<String>('sm')
    const [navbar, setNavbar] = useState<Boolean>(false)
    const [perfil, setPerfil] = useState<Boolean>(false)

    function changeLayout(layout:String){
        setLayout(layout)
    }

    function changeNavbar(){navbar==true?setNavbar(false):setNavbar(true)};
    function changePerfil(){perfil==true?setPerfil(false):setPerfil(true)};

    const navigate = useNavigate()
    
    useEffect(()=>{},[])

    return(
        <div>
            <div className="bg-primary w-full h-[72px] fixed rounded-br-[50px] shadow-2xl shadow-black/60 drop-shadow-xl z-50 flex justify-between items-center">
                <p className='text-2xl font-semibold ml-10'>Criticando(Logo)</p>
                <div className='mr-10 flex justify-end items-center' onClick={changePerfil}>
                    {perfil &&
                        <div onClick={()=>navigate('/perfil')} className='w-32 h-12 border-2 border-hardblack rounded-full hover:bg-hardblack hover:text-white z-20 flex items-center'>
                            <p className='ml-4 text-sm' >Ver Perfil</p>
                        </div>
                    }
                    <img  className="rounded-full w-12 z-50 absolute" src="https://static.vecteezy.com/ti/vetor-gratis/p3/3715527-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-vetor.jpg" alt="" />                
                </div>
            </div>
                <div className={`w-screen h-screen flex items-center fixed ${navbar==true && "z-50"}`}>
                    <div className={`w-2/4 absolute h-screen max-xl:w-1/4 ${navbar==true?"z-50":"hidden"}`} onClick={changeNavbar}></div>
                    <div onClick={changeNavbar} className='w-16 h-12 ml-auto rounded-l-2xl pl-2 flex items-center bg-black/90 cursor-pointer hover:w-20 transition-all'>
                        {navbar?
                            <AiOutlineRight className='text-2xl'/>
                        :
                            <AiOutlineLeft className='text-2xl'/>
                        }
                    </div>
                    {navbar &&
                        <div className='z-50 w-2/4 h-screen bg-black/80 flex flex-col justify-center items-center gap-6 backdrop-blur-sm max-xl:w-3/4 '>
                            <h1 className='mb-10 text-4xl font-semibold underline'>Menu</h1>
                            {buttonsNav &&
                                buttonsNav.map((buttons:any)=>{
                                    return(<ButtonNavbar 
                                        title={buttons.title}
                                        color={buttons.color}
                                    />)
                                })
                            }
                        </div>
                    }
                </div>
            <div className='w-screen pt-28 pb-12 flex flex-row px-40 gap-10 z-50'>
                <div className="flex flex-row gap-4 z-10">
                    <LayoutLarge layout={layout} changeLayout={changeLayout}/>
                    <LayoutSmall layout={layout} changeLayout={changeLayout}/>
                    <LayoutLine layout={layout} changeLayout={changeLayout}/>
                </div>
                <div className="w-full flex flex-row z-20">
                    <div className='w-full h-[44px] border-4 border-hardblack bg-transparent rounded-l-xl'>
                        <input type='text' className='w-full h-[36px] bg-transparent rounded-l-xl pl-4' placeholder='pesquise por uma obra'/>
                    </div>
                    <div className='w-16 h-[44px] border-4 border-hardblack bg-hardblack rounded-r-xl flex items-center justify-center'>
                        <FaSearch className='text-xl mr-2'/>
                    </div>

                </div>
            </div>
            <div className='min-h-full flex flex-wrap justify-between gap-2 px-40'>
                {data.map((each)=>{
                    if(layout=='sm'){
                        return(
                            <CardSM
                                key={each.title}
                                title={each.title}
                                about={each.about}
                                src={each.src}
                                user={each.user}
                                stars={each.stars}
                            ></CardSM>
                        )
                    }if(layout=='xl'){
                        return(
                            <CardXL
                                key={each.title}
                                title={each.title}
                                about={each.about}
                                src={each.src}
                                user={each.user}
                                stars={each.stars}
                            ></CardXL>
                        )
                    }if(layout=='ln'){
                        return(
                            <CardLN
                                key={each.title}
                                title={each.title}
                                about={each.about}
                                src={each.src}
                                user={each.user}
                                stars={each.stars}
                            ></CardLN>
                        )
                    }
                    
                })}
            </div>
           
        </div>
    )
}

export default Home;