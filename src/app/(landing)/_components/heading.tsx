"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Heroes } from "./heroes";
export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Organize your work and life. Welcome to <span>Taskify</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">Become focused, organized, and calm with taskify.</h3>
      <Button>
        Enter Taskify 
        <ArrowRight className="h-4 w-4 ml-2"/>
      </Button>
      <Heroes />
    </div>
  );
};
