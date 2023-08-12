var pipoca = '/popcorn.gif'
var googleLogo = '/googlelogo.png'
import Card from '../components/Card';
import BestUser from '../components/BestUser'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import './Home.css'

const Home = () => {
    const data = [
        {
            title:'o melhor anime',
            about:'one piece',
            src:'https://i.ytimg.com/vi/-tWyFMk6q4A/maxresdefault.jpg',
            stars:2,
            user:{name:'user001',src:'https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png'}
        },
        {
            title:'subestimado?!',
            about:'oppenhaimer',
            src:'https://i.ytimg.com/vi/zDNrOhopaXY/maxresdefault.jpg',
            stars:1,
            user:{name:'pessoa',src:'https://static.todamateria.com.br/upload/fe/rn/fernandopessoabiografia.jpg'}
        },
        {
            title:'filme horrível',
            about:'death note live action',
            src:'https://podpop.com.br/PodPOP/wp-content/uploads/2018/12/background-100.png',
            stars:5,
            user:{name:'thalis',src:'https://static.todamateria.com.br/upload/fe/rn/fernandopessoabiografia.jpg'}
        }
    ]
    const bestUsers = [
        {name:'Thalis T.',src:'https://static.todamateria.com.br/upload/fe/rn/fernandopessoabiografia.jpg',trophy:1,followers:12030,posts:492},
        {name:'Thalis T.',src:'https://static.todamateria.com.br/upload/fe/rn/fernandopessoabiografia.jpg',trophy:2,followers:5090,posts:380},
        {name:'Thalis T.',src:'https://static.todamateria.com.br/upload/fe/rn/fernandopessoabiografia.jpg',trophy:3,followers:847,posts:319},
        {name:'Thalis T.',src:'https://static.todamateria.com.br/upload/fe/rn/fernandopessoabiografia.jpg',trophy:0,followers:450,posts:262},
        {name:'Thalis T.',src:'https://static.todamateria.com.br/upload/fe/rn/fernandopessoabiografia.jpg',trophy:0,followers:190,posts:135}
    ]

    const navigate = useNavigate()

    useEffect(()=>{},[])

    return(
        <div>
            <div className="bg-primary w-full h-[72px] fixed rounded-br-[50px] shadow-2xl shadow-black drop-shadow-xl z-10 flex justify-between items-center">
                <p className='text-2xl font-semibold ml-20'>Criticando(Logo)</p>
                <p className='mr-20'>info</p>
            </div>
            {/* <div className='w-screen h-screen flex items-center fixed z-10 pr-4'>
                <div className='w-12 h-12 bg-black/50 ml-auto rounded-l-2xl px-2 flex items-center justify-center text-2xl text-font'>
                    <AiOutlineLeft/>
                </div>
                <div className='w-1/4 h-screen bg-black/80'></div>
            </div> */}
            <div className="z-0 max-h-screen w-screen backdrop-blur-[2px]">
                <div id="bg" className="w-screen h-screen">
                    <div id="gradient" className="w-screen h-screen bg-primary/50 backdrop-blur-sm flex items-center justify-center">
                        <div className="flex items-center gap-20 flex-wrap justify-center px-10">
                            <div className='flex flex-col h-[230px] justify-between'>
                                <h1 className='text-8xl font-medium'>Bem vindo ao <br></br>Criticando!</h1>
                                <p className='font-normal'>A maior plataforma de críticas a obras cinematográficas do Brasil!</p>
                            </div>
                            <div className='h-[230px] w-80 bg-black/50 py-4 flex flex-col items-center justify-evenly border-black/40 border-[1px] rounded-3xl backdrop-blur-md'>
                                <h1 className='text-2xl px-8 text-center font-medium'>Venha fazer parte dessa comunidade!</h1>
                                <p className='text-sm px-8 text-center font-light mb-2'>
                                    Para utilizar a plataforma é necessário fazer login 
                                    com a sua conta do google.
                                </p>
                                <div onClick={()=>navigate('/inicio')} className='flex flex-row justify-evenly items-center p-1 w-[200px] rounded-2xl shadow-md cursor-pointer bg-primary/60 text-font transition-all hover:w-3/4 shadow-black hover:shadow-white/30 hover:bg-font hover:text-black'>
                                    <img src={googleLogo} alt="google logo" className='h-6'/>
                                    <p className='text-xl font-bold'>Logar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <p className='w-screen text-2xl px-12 text-center'>
                    Você já se encontrou na situação de não coseguir escolher filmes ou <br></br>séries diante de diversas opções que há em plataformas de streaming?
                </p>
                <div id="gradient2" className='flex rounded-3xl border-black/50 border-[1px] m-20 justify-center'>
                    <div className='m-4 flex flex-col justify-center gap-4 max-w-[800px]'>
                        <p className='text-2xl text-center'>Se a resposta for sim, o Criticando foi feito para você!</p>
                        <p>Veja quais são as obras mais aclamadas em nossa plataforma, assim ficará muito mais fácil fazer sua escolha! Há ainda administradores responsáveis por manter um ambiente sem spoilers ou desrespeito por parte de outros usuários, tornando nossa comunidade um ambiente saudável e seguro para expor sua respeitosa opinião.</p>
                    </div>
                    <div>
                        <img src={pipoca} alt="" className='max-w-[200px] m-4'/>
                    </div>
                </div>
            </div>
            <div className='py-52 flex items-center justify-center'>
                <img className='max-h-full m-20 absolute z-0 opacity-5 mix-blend-color-dodge' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/52e52df7-d399-41df-bc7e-7bbb5603fc7f/d5zrg02-37af3963-400c-4753-b00b-97c098f24a9a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyZTUyZGY3LWQzOTktNDFkZi1iYzdlLTdiYmI1NjAzZmM3ZlwvZDV6cmcwMi0zN2FmMzk2My00MDBjLTQ3NTMtYjAwYi05N2MwOThmMjRhOWEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Hov0_W2IVnfOyK450qaaWmtSUZ-iynV3OZ8zXGfzr20" alt="" />  
                <p className='text-2xl text-center z-10 mx-10'>
                    Conheça um pouco do conteúdo produzido aqui...
                </p>
            </div>
            <p className='text-2xl text-center mb-10 mt-24'>Melhores postagens</p>
            <div className='flex flex-wrap justify-center gap-10 mt-16'>
                {data.map((each)=>{
                    return(
                        <Card
                            key={each.title}
                            title={each.title}
                            about={each.about}
                            src={each.src}
                            user={each.user}
                            stars={each.stars}
                        ></Card>
                    )
                })}
            </div>
            <p className='text-2xl text-center mb-10 mt-24'>Usuários mais conhecidos</p>
            <div className='m-16 flex justify-center gap-4 flex-col'>
                {bestUsers &&
                    bestUsers.map((user)=>{
                        return(
                            <BestUser
                                key={user.followers}
                                name={user.name}
                                src={user.src}
                                trophy={user.trophy}
                                followers={user.followers}
                                posts={user.posts}
                                data={bestUsers}
                            />
                        )
                    })
                }
            </div>
            <div className='flex items-center justify-center gap-10 py-40'>
                <div className='text-center flex flex-col gap-2'>
                    <p className='text-md'>cadastre-se ou faça login com sua conta do google</p>
                    <p className='text-4xl font-semibold'>Entre clicando ao lado</p>
                </div>
                <div className='flex items-center justify-center transition-colors bg-black/60 rounded-full p-4 shadow-md cursor-pointer shadow-black hover:shadow-white/30 hover:bg-font hover:text-black'>
                    <img src={googleLogo} alt="google logo" className='h-12'/>
                </div>
            </div>
            <div className='mt-20 w-screen flex justify-around py-10'>
                <div className='flex flex-col items-center'>
                    <p className='text-xl mb-8'>Informações</p>
                    <p className='text-md underline'>
                        Criticando Company<br></br>prestar serviços<br></br>desenvolvedor
                    </p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-xl mb-8'>Contatos</p>
                    <p className='text-md'>
                        criticando@suport.com<br></br>(00) 00000-0000
                    </p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-xl mb-8'>Colaboradores</p>
                    <p className='text-md'></p>
                </div>
            </div>
            <div className='w-full h-8 bg-black/80 flex justify-end items-center pr-10 rounded-tl-full'>
                <p className='w-fit text-sm'>Copyright © thalis Trisch</p>
            </div>
        </div>
    )
}

export default Home;