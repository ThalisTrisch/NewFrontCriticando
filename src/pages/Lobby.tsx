import Card from '../components/Card';
import {AiOutlineLeft} from 'react-icons/ai' 
import './Home.css'
import { useEffect } from 'react';
import ButtonsLayout from '../components/ButtonsLayout';


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

    useEffect(()=>{},[])

    return(
        <div>
            <div className="bg-primary w-full h-[72px] fixed rounded-br-[50px] shadow-2xl shadow-black/60 drop-shadow-xl z-10 flex justify-between items-center">
                <p className='text-2xl font-semibold ml-10'>Criticando(Logo)</p>
                <p className='mr-10'>info</p>
            </div>
            <div className='w-screen h-screen flex items-center fixed z-10'>
                <div className='w-16 h-12  ml-auto rounded-l-2xl pl-2 flex items-center bg-black/50 cursor-pointer hover:w-20 transition-all'>
                    <AiOutlineLeft className='text-2xl'/>
                </div>
                {/* <div className='w-1/4 h-screen bg-black/80'></div> */}
            </div>
            <div className='w-screen pt-24 pb-12 flex flex-row '>
                <ButtonsLayout/>
            </div>
            <div className='min-h-full flex flex-wrap justify-center gap-10'>
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
            <div className='w-full h-8 bg-black/80 flex justify-end items-center pr-10 rounded-tl-full'>
                <p className='w-fit text-sm'>Copyright © thalis Trisch</p>
            </div>
        </div>
    )
}

export default Home;