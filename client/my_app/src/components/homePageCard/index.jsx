import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import styles from "./HomePageCard.module.css";

export default function ActionAreaCard({ icon, title }) {
  return (
    <Card sx={{ width: 200, height: 250 }}>
      <CardActionArea>
        <div
          className={`${styles.iconDiv} mask-b-from-10% mask-b-to-95% h-40 flex items-center justify-center`}
        >
          {icon}
        </div>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-center text-[#149949]"
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
