import NavigateBtn from "../../components/navigateBtn";
import bankImage from "../../assets/bank-image.jpg";
import RightArrow from "../../components/rightArrrow";
import ActionAreaCard from "../../components/homePageCard";
import handShakeImg from "../../assets/handshake-customer-investor-hand-successful-business-people-shake-hand-after-success-negotiate-contract-partnership-cooperation-concept_28629-184.avif";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <header className="flex items-center justify-between w-full h-15 shadow-md">
        <div className="w-1/2 pl-6 flex">
          <h1 className="text-[22px] font-bold text-[#149949]">ComplaintApp</h1>
        </div>
        <div className="w-1/2 p-0 hidden sm:block">
          <div className="h-10 pl-6 flex gap-3 justify-end pr-6">
            <NavigateBtn
              variant="contained"
              text="SignUp"
              bgColor="#149949"
              bgHover="#0d853d"
              path="/signup"
            />
            <NavigateBtn
              variant="outlined"
              text="LogIn"
              bgColor=""
              bgHover="#aed6be"
              color="#149949"
              borderColor="#149949"
              colorHover="#149949"
              path="/login"
            />
          </div>
        </div>
      </header>

      <main>
        {/* section 1 */}
        <div className="m-5 md:flex gap-2">
          <div className="md:w-2/3 h-110 md:h-100 md:items-baseline p-5 flex flex-col gap-7 align-middle items-center justify-center">
            <h1 className="sm:text-[40px] text-[30px] font-bold text-[#149949]">
              {" "}
              <RightArrow /> Get Started
            </h1>

            <h1 className="pl-5 md:w-2/3 font-medium text-center md:text-start">
              Welcome — a simple and reliable platform to register, track, and
              resolve bank-related complaints efficiently. <br /> Whether your
              issue is about unauthorized transactions, delayed refunds, poor
              service, account problems, or digital banking errors, you’re in
              the right place.
            </h1>

            <div className="h-10 flex pl-5 gap-3 justify-end pr-6">
              <NavigateBtn
                variant="contained"
                text="Sign-Up"
                bgColor="#149949"
                bgHover="#0d853d"
                path="/signup"
                radius="10px"
                width="100px"
                height="35px"
              />
              <NavigateBtn
                variant="outlined"
                text="Sign-In"
                bgColor=""
                bgHover="#aed6be"
                color="#149949"
                borderColor="#149949"
                colorHover="#149949"
                path="/login"
                radius="10px"
                width="100px"
                height="35px"
              />
            </div>
          </div>

          <div className="md:w-1/3 h-60 md:h-100 md:p-5 flex justify-center items-center">
            <img
              src={bankImage}
              alt=""
              className="bg-amber-200 w-full sm:w-1/2 md:w-full h-50 md:h-50"
            />
          </div>
        </div>

        {/* section 2 */}
        <div className="w-full h-70 relative">
          <img
            src={handShakeImg}
            alt=""
            className="w-full h-full object-cover align-middle relative z-9"
          />

          <div className="mask-t-from-10% mask-t-to-50% absolute top-0 left-0 bg-[#149949] h-full w-full flex items-start z-9"></div>
          <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center z-999">
            <h1 className="text-3xl md:text-5xl font-bold text-[#0d0e0dc5]">
              Trusted Banking
            </h1>
          </div>
        </div>

        {/* section 3 */}
        <div className="w-full p-10 mh-100 flex flex-col gap-5 items-center justify-center">
          <h1 className="text-5xl font-bold text-[#149949]">About</h1>
          <h1 className="text-center w-60 text-[18px] sm:w-100 sm:text-[20px] md:w-200">
            Our banking app is built to make financial services simpler, safer,
            and more transparent for everyone. We focus on solving real problems
            faced by everyday users — delayed services, unclear charges,
            unresolved complaints, and lack of proper support. Instead of
            complicated systems and endless waiting, we provide a clear,
            structured, and reliable platform to manage banking interactions
            efficiently. Our goal is simple: Give users control over their
            financial communication Ensure clarity in complaints, requests, and
            records Promote accountability and proper follow-up We believe
            banking should work the way it always should have — honest, secure,
            and user-first. Technology is just a tool; trust is the foundation.
            Whether you’re tracking an issue, submitting a complaint, or
            managing important financial information, our app is designed to be
            straightforward, dependable, and easy to use. We’re committed to:
            Data security and privacy Clear processes and documentation Reliable
            support and continuous improvement Because when it comes to money,
            there’s no room for confusion.
          </h1>
        </div>

        {/* section 4 */}
        <div className="w-full pt-5 pb-5 mh-100 flex flex-wrap items-center justify-center gap-20 ">
          <ActionAreaCard icon={<AssuredWorkloadIcon />} title="Relaibale" />
          <ActionAreaCard icon={<AttachFileIcon />} title="Secure" />
          <ActionAreaCard icon={<CardMembershipIcon />} title="Authorized" />
          <ActionAreaCard icon={<AppRegistrationIcon />} title="Complaints" />
        </div>
      </main>

      <footer>
        <div className="min-h-40 w-full flex flex-col-reverse sm:flex-row gap-5 bg-[#149949] p-8">
          <div className="flex flex-col sm:flex-row w-full sm:w-1/2 gap-5 items-center">
            <TextField
              label="Your response"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "transparent",
                  color: "white",
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white",
                },
              }}
            />
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                backgroundColor: "transparent",
                width: 80,
                height: 40,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "white",
                },
              }}
            >
              Submit
            </Button>
          </div>

          <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-20 w-full sm:w-1/2 min-h-20 gap-5 p-5">
            <Link
              to="/login"
              className="text-white text-[20px] hover:text-[#a1e59e] hover:text-[21px] transition-all duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-white text-[20px]  hover:text-[#a1e59e] hover:text-[21px] transition-all duration-200"
            >
              Signup
            </Link>
            <Link
              to="/contact"
              className="text-white text-[20px]  hover:text-[#a1e59e] hover:text-[21px] transition-all duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="w-full min-h-15 flex items-center justify-center bg-[#149949] text-white border-t p-5">
          <h1 className="w-70 sm:w-1/2 text-center">
            Privacy Policy Terms and Condition Copyright Hiringmine 2026. All
            Rights Reserved
          </h1>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
