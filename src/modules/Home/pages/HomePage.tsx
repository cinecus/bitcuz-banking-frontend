import React,{FC} from 'react'
import styled from 'styled-components'
import AppWrapper from '../../../components/AppWrapper'
import AppGrid from '../../../components/AppGrid'
import GridItem from '../../../components/GridItem'
import CardItem from '../../../components/CardItem'
import { Link } from 'react-router-dom'
import banking from '../../../resource/images/banking.jpg'

// import { usePhotos } from '../../../hooks/usePhotos'
// import { usePosts } from '../../../hooks/usePosts'

// import {useAppSelector} from '../../../store/store'

const HomePage= (props:any) => {
    // const {mutate,isLoading,error} = usePosts()
    // const {posts} = useAppSelector(state=>state.photo)

    // if(isLoading) return <h1>loading...</h1>
    // if(error) return <h1>error</h1>
  return (
    <AppWrapper>
        
        <AppGrid id='section1'  height='100%'  pd='2rem 8rem' minHeight='80vh' >
            <GridItem size={'40%'} pd={'1rem'}>
                <ImageContainer>
                    <img src={banking} alt='food grizzly' />
                    
                </ImageContainer>
            </GridItem>
            <GridItem size={'60%'}  pd='3rem'>
                <Title>
                    <div className="head">Bitcuz Banking Service</div>
                    <div className="body mt">Demo service Banking API  By MERN Stack</div>
                    <div className="head mt">Feature</div>
                    <ul className='mt'>
                        <li key='1'>Sign In & Sign Up</li>
                        <li key='1'>Deposit</li>
                        <li key='1'>Withdraw</li>
                        <li key='1'>Transfer</li>
                        <li key='1'>See Statement & Balance</li>
                    </ul>
                </Title>
            </GridItem>
        </AppGrid>
        {/* <AppGrid id='section3' bg='#bebebe' alignItems='start' pd='2rem 8rem' rgap='2rem' cgap='2%' justifyContent='center'>
            <GridItem size={'100%'} bg={'#767676'} pd={'1rem'}>
                <AppGrid justifyContent='center'>
                    Center Content
                </AppGrid>
            </GridItem>
            <GridItem size={'30%'} bg={'#f6f6f6'} pd={'1rem'}>
                <AppGrid justifyContent='center'>
                    Center Title
                </AppGrid>
                <AppGrid justifyContent='center'>
                    Center SubTitle
                </AppGrid>
            </GridItem>
            <GridItem size={'30%'} bg={'#f6f6f6'} pd={'1rem'}>
                <div>
                    Title
                </div>
                <div>
                    Subtitle
                </div>
            </GridItem>
            <GridItem size={'30%'} bg={'#f6f6f6'} pd={'1rem'}>
                <div>
                    Title
                </div>
                <div>
                    Subtitle
                </div>
            </GridItem>
        </AppGrid>
        <AppGrid id='section4' bg='#404040'  pd='2rem 8rem' cgap='2%' rgap='1rem'>
            <GridItem size='40%' bg='#f1f1f1'>
                <CardItem>
                    <div className='card-header'>
                        Card Header
                    </div>
                    <div className='card-body'>
                        Card Body
                    </div>
                    <div className='card-footer'>
                        Card Footer
                    </div>
                </CardItem>
            </GridItem>
            <GridItem size='58%' bg='#969696'>
                <AppGrid  alignItems='center' pd='2rem 2rem 0' justifyContent='center'>
                    <div>
                        Title
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi cum exercitationem ducimus iste eveniet aliquid ut excepturi hic alias, maxime est error ipsum porro, laboriosam minima in, quidem ipsa? Minima dolorum quo veritatis expedita facere accusantium a architecto numquam.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi cum exercitationem ducimus iste eveniet aliquid ut excepturi hic alias, maxime est error ipsum porro, laboriosam minima in, quidem ipsa? Minima dolorum quo veritatis expedita facere accusantium a architecto numquam.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi cum exercitationem ducimus iste eveniet aliquid ut excepturi hic alias, maxime est error ipsum porro, laboriosam minima in, quidem ipsa? Minima dolorum quo veritatis expedita facere accusantium a architecto numquam.
                    </div>
                </AppGrid>
            </GridItem>
        </AppGrid>
        <AppGrid id='section5' bg='#bebebe' height='200px'>
            Section5
        </AppGrid> */}
    </AppWrapper>
  )
}

export default HomePage

const ImageContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    flex-direction:column;
    .title{
        font-size:1.8rem;
        font-weight:700;
    }
    img{
        width:80%;
        height:80%;
        border-radius:50%;
        @media screen and (max-width: 768px){
            width:100%;
            height:100%;
        }
    }
   
`

const Title = styled.div`
    width:100%;
    height:100%;
    padding:2rem;
    .head{
        font-size:1.8rem;
        font-weight:600;
    }
    .body{
        font-size:1.2rem;
    }
    .mt{
        margin-top:1.5rem;
        @media screen and (max-width: 768px){
            margin-top:0.5rem;
        }
    }
    li{
        font-size:1.2rem;
    }
    @media screen and (max-width: 768px){
            display:flex;
            flex-direction:column;
            justify-content:center;
        }
`