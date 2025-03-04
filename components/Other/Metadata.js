import Head from "next/head"
import React from "react"

const Metadata = ({ image, title, description, keywords, url }) => {
  return (
    <Head>
      <title>{title || "LUV NFT ESTATE | NFT Estate Marketplace"}</title>
      <meta
        name='title'
        property='og:title'
        content={title || "LUV NFT ESTATE | NFT Estate Marketplace"}
      />
      <meta
        name='image'
        property='og:image'
        content={image || "https://img001.prntscr.com/file/img001/2NPVnElvSkOTmkZODKueCA.png"}
      />
      <meta
        name='description'
        property='og:description'
        content={
          description ||
          "NFT Marketplace and Launchpad built with Moralis. Uses a smart contract deployed on the ROPSTEN testnet. Trade NFTs"
        }
      />
      <meta
        name='image'
        property='og:image:secure_url'
        content={image || "https://img001.prntscr.com/file/img001/2NPVnElvSkOTmkZODKueCA.png"}
      />
      <meta name='url' property='og:url' content={url || "https://estate.luvnft.com/"} />
      <meta name='robots' content='index, follow' />
      <meta
        name='keywords'
        content={keywords || "NFT, Virtual real estate, NFT Property, Virtual Estate Marketplace, Metaverse virtual estate "}
      />
      {/* FACEBOOK */}
      <meta property='og:url' content={url || "https://estate.luvnft.com"} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title || "LUV NFT ESTATE | NFT Estate Marketplace"} />
      <meta
        property='og:description'
        content={
          description ||
          "NFT Marketplace and Launchpad built with Moralis. Uses a smart contract deployed on the ROPSTEN testnet. Trade NFTs"
        }
      />
      <meta
        property='og:image'
        content={image || "https://img001.prntscr.com/file/img001/2NPVnElvSkOTmkZODKueCA.png"}
      />
      {/* TWITTER */}
      <meta
        name='twitter:card'
        content={image || "https://img001.prntscr.com/file/img001/2NPVnElvSkOTmkZODKueCA.png"}
      />
      <meta property='twitter:domain' content='nft-moralis.vercel.app' />
      <meta property='twitter:url' content={url || "https://estate.luvnft.com/"} />
      <meta name='twitter:title' content={title || "LUV NFT Estate | Launchpad and Marketplace"} />
      <meta
        name='twitter:description'
        content={
          description ||
          "NFT Marketplace and Launchpad built with Moralis. Uses a smart contract deployed on the ROPSTEN testnet. Trade NFTs"
        }
      />
      <meta
        name='twitter:image'
        content={image || "https://img001.prntscr.com/file/img001/2NPVnElvSkOTmkZODKueCA.png"}
      />
    </Head>
  )
}

export default Metadata
