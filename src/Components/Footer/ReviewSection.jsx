import { Link } from "react-router-dom";

const ReviewSection = () => {
  return (
    <>
      <div className="parent px-12">
        <span className="text-[#30A79F] text-[20px] lg:text-lg font-semibold mb-4">Review</span>
        <ul className="">
          <li className="mb-0 text-[#464646] text-base  ">Terms of Service</li>
          <li className="mb-0 text-[#464646] text-base  ">Privace Policy</li>
          <li className="mb-0 text-[#464646] text-base  capitalize hover:text-warning">
            <Link to="/our-team">our team</Link>
          </li>
        </ul>{" "}
      </div>
    </>
  );
};

export default ReviewSection;
