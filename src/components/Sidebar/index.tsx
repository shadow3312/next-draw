"use client";

import React, { useEffect } from "react";
import styles from "./index.module.css";
import Heading from "../Typography/Heading";
import InlineColorPicker from "../Color/InlineColorPicker";
import { COLORS } from "@/constants";
import { useRecoilState } from "recoil";
import { selectedColorAtom, selectedStrokeWidthAtom } from "@/state/atoms";
import StrokeList from "../Box/StrokeList";

export default function Sidebar() {
  const [selectedColor, setSelectedColor] = useRecoilState(selectedColorAtom);
  const [selectedStrokeWidth, setSelectedStrokeWidth] = useRecoilState(
    selectedStrokeWidthAtom
  );

  const handleColorChange = (colorValue: string) => {
    setSelectedColor(colorValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Heading text="Stroke color" />
        <InlineColorPicker
          color={selectedColor}
          updateColor={handleColorChange}
        />
      </div>
      <div className={styles.item}>
        <Heading text="Stroke width" />
        <StrokeList
          strokeWidth={selectedStrokeWidth}
          onSelectStrokeWidth={setSelectedStrokeWidth}
        />
      </div>
    </div>
  );
}
