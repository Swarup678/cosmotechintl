"use client";
import React from "react";
import { Button } from "../ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-[rgb(20,88,116)] hover:bg-[rgb(15,60,80)]"
      >
        Explore Services
      </Button>
    </div>
  );
}
