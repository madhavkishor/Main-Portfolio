"use client";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function AnimationLottie({ animationPath, className }) {
  return (
    <div className={className}>
      <Lottie animationData={animationPath} loop={true} />
    </div>
  );
}
