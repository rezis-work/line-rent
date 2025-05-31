"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <Image
        src={"/landing-splash.jpg"}
        alt="rental platform hero section"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full"
      >
        <div className="max-w-4xl mx-auto px-16 sm:px-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Start your journey to finding your perfect rental apartment
          </h1>
          <p className="text-xl text-white mb-8">
            Explore a wide range of properties with detailed information and
          </p>

          <div className="flex justify-center">
            <Input
              type="text"
              value="search query"
              onChange={() => {}}
              placeholder="Search by city, neighborhood, or property name"
              className="w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12"
            />
            <Button
              onClick={() => {}}
              className="bg-(--secondary-500) rounded-none rounded-r-lg border-none h-12 cursor-pointer hover:bg-(--secondary-600) transition-colors duration-300"
            >
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
