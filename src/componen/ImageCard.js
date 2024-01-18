import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import DetailProject from "../componen/DetailProject";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ImageCard = ({ itemData, mode }) => {
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const handleClick = (e) => {
    setOpen(true);
    setData(e);
  };

  const getCols = () => {
    if (isMobile) {
      return 1;
    }
    return 2;
  };

  return (
    <ImageList
      gap={30}
      cols={getCols()}
      className=' w-full  xxl:w-[1400px] mb-10 md:mb-16  '
    >
      {itemData?.map((item) => (
        <ImageListItem
          key={item?.img}
          onClick={(e) => handleClick(item)}
          sx={{
            position: "relative",
            "&:hover .image-overlay": {
              opacity: 1,
            },
          }}
        >
          <div>
            <img
              className=' rounded-lg md:rounded-2xl border border-slate-200 shadow shadow-slate-200 h-[200px] md:h-[400px] md:w-[700px]  xxl:h-[400px] w-[400px] xxl:w-[700px]'
              src={item?.img}
              alt={item?.title}
              loading='lazy'
            />
          </div>

          <div className='image-overlay opacity-0 group hover:opacity-100'>
            <ImageListItemBar
              className=' rounded-b-lg md:rounded-b-2xl h-9 md:h-24  '
              title={item?.title}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  size='small'
                  gap='2px'
                >
                  <div className='border border-slate-200 rounded-md md:rounded-lg px-1 md:px-2 text-[10px] mr-1 md:text-sm md:mr-2'>
                    {item?.tech?.slice(0, 1)}
                  </div>
                  <div className='border border-slate-200 rounded-md md:rounded-lg px-1 md:px-2 text-[10px] mr-1 md:text-sm  md:mr-2'>
                    {item?.tech?.slice(1, 2)}
                  </div>
                  <div className='border border-slate-200 rounded-md md:rounded-lg px-1 md:px-2 text-[10px] mr-1 md:text-sm  md:mr-2'>
                    {item?.tech?.slice(2, 3)}
                  </div>
                </IconButton>
              }
            />
          </div>
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
