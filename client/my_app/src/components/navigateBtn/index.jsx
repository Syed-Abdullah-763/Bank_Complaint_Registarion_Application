import Button from "@mui/material/Button";
import { Navigate, useNavigate } from "react-router-dom";

const NavigateBtn = ({
  variant,
  text,
  color,
  bgColor,
  borderColor,
  bgHover,
  colorHover,
  path,
  radius,
  width,
  height,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        variant={variant}
        className="rounded-lg text-[20px]"
        sx={{
          textTransform: "none",
          backgroundColor: bgColor,
          color: color,
          borderColor: borderColor,
          borderRadius: radius,
          width: width,
          height: height,
          "&:hover": {
            color: colorHover,
            backgroundColor: bgHover,
          },
        }}
        onClick={() => {
          navigate(path);
        }}
      >
        {text}
      </Button>
    </>
  );
};

export default NavigateBtn;
