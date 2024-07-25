import React, { useState } from "react";
import {
  ImageList,
  ImageListItem,
  Modal,
  Box,
  IconButton,
} from "@mui/material";
import { IoIosClose } from "react-icons/io";
import { FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <ImageList cols={3} gap={8}>
        {images.map((item, index) => (
          <ImageListItem
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(0)}
            onClick={() => handleOpen(index)}
            style={{ position: "relative" }}
          >
            <img src={item} alt={`image-${index}`} />
            {hoverIndex === index && (
              <IconButton
                onClick={() => handleOpen(index)}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                }}
              >
                <FaExpand />
              </IconButton>
            )}
          </ImageListItem>
        ))}
      </ImageList>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "80%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            sx={{ position: "absolute", top: 16, right: 16 }}
            onClick={handleClose}
          >
            <IoIosClose />
          </IconButton>
          <IconButton onClick={handlePrev}>
            <FaChevronLeft />
          </IconButton>
          <img
            src={images[currentIndex]}
            alt={images[currentIndex]}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
          <IconButton onClick={handleNext}>
            <FaChevronRight />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
};

export default Gallery;
