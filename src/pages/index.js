import React from 'react'
import styled from 'styled-components'
import Layout from '../layouts'
import SEO from '../components/seo'
// import Ticker from '../components/ticker'
import BG from '../components/bg'
import { useDarkMode } from '../contexts/Application'
import { CardBGImage, CardNoise } from '../components/utils'

const BGCard = styled.span`
  width: 100vw;
  height: 100vh;
  user-select: none;
  position: fixed;
  left: 0vw;
  top: 0vh;
  background: ${({ theme }) => theme.heroBG};
  opacity: 0.6;
  @media (max-width: 960px) {
  width: 100vw;
    height: 100vh;
    max-width: 1150px;
    max-height: 720px;
  }
  @media (min-width: 1441px) {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    max-height: 720px;
    left: 120px;
    margin: 0 auto;
    position: absolute;
  }
`

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 4rem;
  @media (max-width: 375px) {
    margin-bottom: 2rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  @media (min-width: 1441px) {
    margin-top: 5rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  will-change: transform;

  @media (max-width: 960px) {
    margin: 0rem 0 1rem 0;
  }
`

const StyledBodyTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 72px;
  margin: 4rem 0 3rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1000px;
  letter-spacing: -0.05em;
  font-family: 'monospace', 'Times New Roman', serif;
  @media (max-width: 1024px) {
    margin: 2rem 0 3rem 0;
  }

  @media (max-width: 960px) {
    width: 100%;
    font-size: 3rem;
    line-height: 3.5rem;
    margin: 2rem 0 2rem 0;
    max-width: 600px;
  }
  @media (max-width: 375px) {
    width: 100%;
    font-size: 2.5rem;
    line-height: 3rem;
    margin: 2rem 0 2rem 0;
    font-weight: 400;
  }
`

const IndexPage = props => {
  const isDark = useDarkMode()

  return (
    <Layout path={props.location.pathname} nofooter={true}>
      <BGCard>
        <CardBGImage isDark={isDark} />
        <CardNoise />
      </BGCard>
      {/* <Ticker /> */}
      <BG />
      <SEO
        title=""
        path={props.location.pathname}
        description={'A fully decentralized protocol for automated liquidity provision on Ethereum'}
      />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>
          KwikSwap is a decentralised protocol on the Ethereum network. Users can swap, create markets, add liquidity &amp; stake.
          </StyledBodyTitle>
        </StyledTitle>
      </StyledBody>
    </Layout>
  )
}

export default IndexPage
