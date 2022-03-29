import Loading from "../../../components/Other/Loading"
import Metadata from "../../../components/Other/Metadata"
import Main from "../../../components/tokenId/Main"
import { useRouter } from "next/router"
import { Suspense } from "react"

const Token = () => {
  const router = useRouter()
  return (
    <div>
      <Metadata
        title={`LUV NFT 📺 |  - #${router.query?.tokenId}`}
        description={`LUV NFT 📺 | NFT Video - - #${router.query?.tokenId}`}
        url={`https://video.luvnft.com${router.asPath}`}
      />
      <Suspense fallback={<Loading />}>
        <Main contract={router.query?.contract} tokenId={router.query?.tokenId} />
      </Suspense>
    </div>
  )
}

export default Token
