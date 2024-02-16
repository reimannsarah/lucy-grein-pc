import { imageUrls } from "../../assets/imgs/imageUrls"
import { pageStrings } from "../../assets/text/pageStrings"

const Values = () => {
  return (
    <div className="bg-background my-56 mx-44 p-20 rounded-lg shadow-lg font-body">
      <div>
        <div>
          <h1>{pageStrings.values.title}</h1>
          <p>{pageStrings.values.p1}</p>
        </div>
        <img src={imageUrls.beach} alt="" />
      </div>
    </div>
  )
}

export default Values