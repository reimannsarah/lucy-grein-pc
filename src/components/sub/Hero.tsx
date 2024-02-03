import { imageUrls } from "../../assets/imgs/imageUrls"

const Hero = () => {
  return (
    <div>
      <img src={imageUrls.hero} alt="" className="w-full shadow-md rounded-lg"/>
    </div>
  )
}

export default Hero