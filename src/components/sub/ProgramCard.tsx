import { pageStrings } from "../../assets/text/pageStrings"

interface Plan {
  title: string
  price: string
  description: string
  description2?: string
  headline: string
  point1: string
  point2: string
  point3: string
  point4?: string
}

const ProgramCard = () => {
  return (
    <div>
      <div>
          {Object.values(pageStrings.services.plans).map((plan: Plan, index) => {
            return (
              <div key={index}>
                <h1>{plan.title}</h1>
                <p>{plan.price}</p>
                <p>{plan.description}</p>
                {plan.description2 && <p>{plan.description2}</p>}
                <p>{plan.headline}</p>
                <p>{plan.point1}</p>
                <p>{plan.point2}</p>
                <p>{plan.point3}</p>
                {plan.point4 && <p>{plan.point4}</p>}
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default ProgramCard