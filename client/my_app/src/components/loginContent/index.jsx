import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import image from "../../assets/child.png";

export default function LoginContent() {
  return (
    <Card className="w-full h-full">
      <CardActionArea className="h-full">
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
          className="h-full"
        />
      </CardActionArea>
    </Card>
  );
}
