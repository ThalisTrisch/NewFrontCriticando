import Card from '../components/Card';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai' 
import '../css/Perfil.css'
import { useEffect,useState } from 'react';
// import LayoutSmall from '../../components/LayoutSmall';
import ButtonNavbar from '../../components/ButtonNavbar';
const CardPerfil = '/CardPerfil.png'
const Usuario = '/UsuarioDefault.png'
import CardSM from '../../components/CardSm';

const Perfil = () => {
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
        {title:"Ver Perfil",url:""},
        {title:"Postagens Salvas",url:""},
        {title:"Informações",url:""},
        {title:"Configurações",url:'',color:'blue'},
        {title:"Encerrar Sessão",url:'',color:'red'},
    ]
    const [navbar, setNavbar] = useState<Boolean>(false)

    function changeNavbar(){navbar==true?setNavbar(false):setNavbar(true)}

    useEffect(()=>{},[])

    return(
        <>
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
            <div className="bg-primary w-full h-[72px] fixed rounded-br-[50px] shadow-2xl shadow-black/60 drop-shadow-xl z-50 flex justify-center items-center">
                <p className='text-2xl font-semibold ml-10'>Criticando(Logo)</p>
            </div>
            <div className='w-full flex justify-center flex-wrap pt-6'>
                <div className='w-1/2 h-screen flex justify-center items-center'>
                    <div className='h-4/6 w-4/6 pl-24'>
                        <div className='float-right pt-4 flex'>
                            <img src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png" alt="foto do usuario" className='relative h-8 w-8 z-20 ml-4'/>
                            <img src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png" alt="foto do usuario" className=' relative h-8 w-8 z-20 ml-4'/>
                        </div>
                        <div className='absolute z-20 pt-80 pl-6 flex flex-col gap-[6px]'>
                            <p className='text-3xl'>Nome do usuario</p>
                            <p className='font-extrabold text-green'>Titulação do usuário</p>
                        </div>
                        <img src={CardPerfil} alt="moldura do perfil" className='absolute z-10 h-[404px] w-[404px]'/>
                        <img src={Usuario} alt="foto do usuario" className='absolute z-0 bg-font ml-[2px] mt-[2px] rounded-2xl h-[400px]  w-[400px]'/>
                    </div>
                </div>
                <div className='w-1/2 flex justify-center items-center pr-24'>
                    <img src={CardPerfil} alt="moldura do perfil"className=' h-[404px] z-10 w-[404px] rotate-180'/>
                    <div className='absolute z-0 bg-hardblack ml-[2px] mt-[2px] rounded-2xl h-[400px]  w-[400px]'>

                    </div>
                </div>
            </div>
            <p className='text-3xl text-center'>Suas Postagens</p>
            <div className='min-h-full flex flex-wrap justify-between gap-2 px-40 my-16'>
            {data.map((each)=>{
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
                    }
                )
            }
            </div>
            {/* <div className="bg-primary w-full h-52 fixed rounded-br-[50px] shadow-2xl shadow-black/60 drop-shadow-xl z-50 flex justify-between items-center px-10">
                <img  className="rounded-full w-32 h-32 z-50" src="https://static.vecteezy.com/ti/vetor-gratis/p3/3715527-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-vetor.jpg" alt="" />
                <div className='mr-10 flex justify-end items-center'>
                                    
                </div>
            </div> */}
            
        </>
    )
}

export default Perfil;