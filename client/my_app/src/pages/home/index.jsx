import NavigateBtn from "../../components/navigateBtn";
import bankImage from "../../assets/bank-image.jpg";
import RightArrow from "../../components/rightArrrow";

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
              text="SignIn"
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
                text="SignUp"
                bgColor="#149949"
                bgHover="#0d853d"
                path="/signup"
                radius="10px"
                width="100px"
                height="35px"
              />
              <NavigateBtn
                variant="outlined"
                text="SignIn"
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
      </main>
    </>
  );
};

export default HomePage;
