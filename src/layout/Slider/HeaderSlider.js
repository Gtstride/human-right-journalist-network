import { Image, Box, Button, HStack, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }) => {
  return (
    <Box mt={"-50px"}>
      <Box>
        <Carousel infiniteLoop showThumbs={false} autoPlay={true}>
          {slides.map((slide, index) => {
            return (
              <Image
                key={index}
                src={slide.image}
                height="550px"
                width="800px"
              />
            );
          })}
        </Carousel>
      </Box>
    </Box>
  );
};

export default ImageSlider;
