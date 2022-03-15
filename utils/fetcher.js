import Moralis from "moralis"
import { NFT_ABI } from "../utils/ABIS"

const fetcher = async ({ args }) => {
  const { tokenUri, nftContract, tokenId } = args
  let data = tokenUri
  if (data === undefined) {
    data = await Moralis.Web3.executeFunction({
      abi: NFT_ABI,
      contractAddress: nftContract,
      functionName: "tokenURI",
      params: {
        tokenId: tokenId,
      },
    })
  }
  if (!data) throw new Error("Unable to get token uri")
  return fetch("/api/metadata", {
    method: "POST",
    body: JSON.stringify({
      tokenURI: data,
    }),
  }).then(async (res) => {
    if (!res) throw new Error("Couldn't get data")
    const data = await res.json()
    return data
  })
}

export const revalidateOptions = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
}

export const getFetcher = async (url) => {
  const res = await fetch(url)
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.")
    // Attach extra info to the error object.
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  return await res.json()
}

export const getNFTsForUser = async ({ args }) => {
  const { chain, address } = args
  const data = await Moralis.Web3API.account.getNFTs({
    address: address,
    chain: chain,
  })

  if (!data) {
    const error = new Error("An error occurred while fetching the data.")
    throw error
  }
  return data
}

export default fetcher
