import React from 'react'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'

const IndexPage = props => {

  return (
    <Layout path={props.location.pathname}>
      {/* <Ticker /> */}
      <BG />
      <SEO
        title="Home"
        path={props.location.pathname}
        description={'A fully decentralized protocol for automated liquidity provision on Ethereum'}
      />
    </Layout>
  )
}

export default IndexPage