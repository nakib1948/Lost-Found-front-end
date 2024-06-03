"use client";
import React from "react";
import gl1 from "@/assets/Gallery/gl1.jpg";
import gl2 from "@/assets/Gallery/gl2.jpg";
import gl3 from "@/assets/Gallery/gl3.jpg";
import gl4 from "@/assets/Gallery/gl4.jpg";
import gl5 from "@/assets/Gallery/gl5.jpg";
import gl6 from "@/assets/Gallery/gl6.jpg";
import gl7 from "@/assets/Gallery/gl7.jpg";
import gl8 from "@/assets/Gallery/gl8.jpg";
import gl9 from "@/assets/Gallery/gl9.jpg";
import gl11 from "@/assets/Gallery/gl11.jpg";
//import gl12 from "@/assets/Gallery/gl12.jpg";
import HeaderSection from "@/Components/HeaderSection/HeaderSection";
import { motion } from "framer-motion";
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const images = [
  { src: "https://i.ibb.co/8gMVBVF/gl1.jpg", alt: "Image 1" },
  { src: "https://i.ibb.co/N1RJLvj/gl2.jpg", alt: "Image 2" },
  { src: "https://i.ibb.co/vXPjSqp/gl3.jpg", alt: "Image 3" },
  { src: "https://i.ibb.co/Dfpp9Nv/gl4.jpg", alt: "Image 4" },
  { src: "https://i.ibb.co/2MzYWZ7/gl5.jpg", alt: "Image 5" },
  { src: "https://i.ibb.co/SK8Hjgw/gl6.jpg", alt: "Image 6" },
  { src: "https://i.ibb.co/fFkf9Ff/gl7.jpg", alt: "Image 7" },
  { src: "https://i.ibb.co/Tk7sW7H/lostItem.jpg", alt: "Image 8" },
  { src: "https://i.ibb.co/WprcjLW/gl9.jpg", alt: "Image 9" },
  { src: "https://i.ibb.co/yRqPkV4/gl11.jpg", alt: "Image 11" },
  //{ src: gl12, alt: "Image 12" },
];

const Gallery: React.FC = () => {
  return (
    <Box mt={5}>
      <HeaderSection
        title="Heartwarming Reunions"
        subTitle="Explore the moments of joy when lost items were reunited with their rightful owners. These heartwarming stories are a testament to the power of community and kindness."
      />
      <Box mx={{ xs: 2, sm: 3, md: 5 }} my={5}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {images.map((item, index) => (
            <div key={index}>
              <img
                srcSet={`${item.src}?w=162&auto=format&dpr=2 2x`}
                src={`${item.src}?w=162&auto=format`}
                alt={item.alt}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </Masonry>
      </Box>
    </Box>
  );
};

export default Gallery;
