import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import DetailProject from "../componen/DetailProject";
import { IconButton } from "@mui/material";
import { useState } from "react";

const ImageCard = ({ itemData, mode }) => {
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleClick = (e) => {
    setOpen(true);
    setData(e);
  };

  return (
    <ImageList gap={20} sx={{ width: 900, height: 900 }}>
      <ImageListItem key="Subheader" cols={2}></ImageListItem>
      {itemData?.map((item) => (
        <ImageListItem key={item.img} onClick={(e) => handleClick(item)}>
          <img
            className="rounded-xl"
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            className="rounded-b-xl"
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                size="small"
              >
                <div className="border border-slate-200 rounded-lg px-2 text-sm">
                  React.js
                </div>
                <div className="border border-slate-200 rounded-lg px-2 text-sm">
                  Javascript
                </div>
                <div className="border border-slate-200 rounded-lg px-2 text-sm">
                  redux
                </div>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
      <DetailProject
        data={data}
        mode={mode}
        handleClose={handleClose}
        open={open}
      />
    </ImageList>
  );
};

export default ImageCard;
