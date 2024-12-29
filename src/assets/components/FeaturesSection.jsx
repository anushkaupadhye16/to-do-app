import { RiTelegram2Line } from "react-icons/ri";
import { MdOutlineVibration } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaTasks } from "react-icons/fa";

const features = [
  {
    icon: <MdOutlineVibration className="featureIcon" />,
    title: "User-Friendly Interface",
    description:
      "Our platform offers seamless task management to boost your efficiency.",
  },
  {
    icon: <RiTelegram2Line className="featureIcon" />,
    title: "Collaborate & Share Effortlessly",
    description:
      "Invite team members to work together and achieve your goals faster.",
  },
  {
    icon: <HiOutlineLightBulb className="featureIcon" />,
    title: "Effortless Collaboration",
    description:
      "Invite team members to work together and achieve your goals faster.",
  },
  {
    icon: <FaTasks className="featureIcon" />,
    title: "Seamless Access",
    description: "Stay connected and manage your tasks on the go with ease.",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="py-5">
      <div className="container text-center">
        <h2 className="mb-4">
          Transform Your Productivity with Our <br /> Innovative To-Do List
          Features
        </h2>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card shadow-sm">
                <div className="card-body">
                  {" "}
                  {feature.icon}
                  <h5 className="card-title"> {feature.title}</h5>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
