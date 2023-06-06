import {
  Slider,
  SliderLabel,
  SliderControl,
  SliderThumb,
  SliderTrack,
  SliderRange,
} from "@ark-ui/solid";

export const MySlider = () => (
  <Slider>
    <SliderLabel>Label</SliderLabel>
    <SliderControl>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
    </SliderControl>
  </Slider>
);
