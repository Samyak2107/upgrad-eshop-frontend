import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function ProductCard({
  name,
  price,
  desc,
  imageUrl,
  itemId,
  itemCategory,
  availableQuantity,
}) {
  const { userDetails } = useSelector((state) => state.common);

  const dispatch = useDispatch();
  const [buyClicked, setBuyClicked] = React.useState(false);
  const handleBuy = (
    e,
    itemId,
    name,
    price,
    desc,
    imageUrl,
    itemCategory,
    availableQuantity
  ) => {
    e.preventDefault();
    setBuyClicked(true);
    dispatch({
      type: "SET_PRODUCT",
      payload: {
        itemId,
        name,
        price,
        desc,
        imageUrl,
        itemCategory,
        availableQuantity,
      },
    });
    navigate(`/products/${itemId}`);
  };
  const navigate = useNavigate();
  return (
    <Card sx={{ margin: "15px", maxWidth: 300 }}>
      <CardMedia sx={{ height: 180 }} image={imageUrl} title="green iguana" />
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <p style={{ margin: 0, fontSize: "21px", fontWeight: "500" }}>
            ₹ {price}
          </p>
        </div>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="contained"
          onClick={(e) =>
            handleBuy(
              e,
              itemId,
              name,
              price,
              desc,
              imageUrl,
              itemCategory,
              availableQuantity
            )
          }
        >
          Buy
        </Button>
        {/* {buyClicked && <Navigate to={`/products/${itemId}`} />} */}
        <div
          style={{
            display:
              userDetails && userDetails.userType == "admin" ? "block" : "none",
          }}
        >
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}
