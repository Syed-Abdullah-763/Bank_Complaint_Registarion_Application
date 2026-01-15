import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NavigateBtn from "../../components/navigateBtn";

const ExitHeader = () => {
  return (
    <>
      <header className="flex items-center justify-end w-full h-15 pr-5 md:pr-20">
        <NavigateBtn
          variant="contained"
          text={<ExitToAppIcon />}
          bgColor="#149949"
          bgHover="#0d853d"
          path="/"
        />
      </header>
    </>
  );
};

export default ExitHeader;
