import React from 'react'
import styled from 'styled-components'
import AppWrapper from '../../../components/AppWrapper'
import AppGrid from '../../../components/AppGrid'
import GridItem from '../../../components/GridItem'
import TransactionTable from '../components/TransactionTable'
import { useGetBalance } from '../../../hooks/TransactionHook'

const StatementPage = () => {
    const {data,isLoading,error}  = useGetBalance()
    console.log(data)
  return (
    <AppWrapper>
        <AppGrid   pd='2rem 8rem' justifyContent='center' alignItems='start'>
            <GridItem size='100%'>
                <BalanceContainer mg='2rem 0rem' justifyContent='space-between' alignItems='start' rgap='1rem'>
                    <div>
                        Welcome,Chananon Chantaratin
                    </div>
                    <div>
                        Your Balance {data?.result} TOKEN
                    </div>
                </BalanceContainer>
                {/* <FilterContainer bg='#696669' height='20vh' justifyContent='center' alignItems='center'>
                    Filter
                </FilterContainer> */}
                <TransactionTable />
            </GridItem>
        </AppGrid>
    </AppWrapper>
  )
}

export default StatementPage

const BalanceContainer = styled(AppGrid)`
    @media screen and (max-width: 768px){
        justify-content:center;
    }
`

const FilterContainer = styled(AppGrid)`
    border-radius:1rem;
`

const TableContainer = styled(AppGrid)`
    margin-top:2em;
    border-radius:1rem;
`