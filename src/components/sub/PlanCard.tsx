
interface PlanProps {
  plan: {
    title: string;
    price: string;
    description: string;
    description2?: string;
    headline: string;
    point1: string;
    point2: string;
    point3: string;
    point4?: string;
  };
}

const PlanCard = (plan: PlanProps) => {
  return (
    <div className="w-1/2 h-full px-10 text-gray">
    {/* <h1 className="mb-5 text-3xl text-white bg-pink text-center shadow-lg px-3">{plan.plan.title}</h1> */}
      <p className="my-3 text-lg">{plan.plan.price}</p>
      <p className="my-3 text-lg">{plan.plan.description}</p>
      {plan.plan.description2 && <p className="my-3">{plan.plan.description2}</p>}
      <strong><p className="text-orange my-5 text-xl text-center">{plan.plan.headline}</p></strong>
      <p className="my-3 text-lg">{plan.plan.point1}</p>
      <p className="my-3 text-lg">{plan.plan.point2}</p>
      <p className="my-3 text-lg">{plan.plan.point3}</p>
      {plan.plan.point4 && <p className="my-3">{plan.plan.point4}</p>}
    </div>
  );
};

export default PlanCard;
