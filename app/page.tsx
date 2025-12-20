import AnimatedDrawer from "@/components/AnimatedDrawer";
import CardTiltAnimation from "@/components/CardTiltAnimation";
import CardWidthAnimation from "@/components/CardWidthAnimation";
import FloatingHoverCard from "@/components/FloatingHoverCard";
import FramerMotionBasics from "@/components/FramerMotionBasics";
import IconChainAnimation from "@/components/IconChainAnimation";
import NavBarAnimation from "@/components/NavBarAnimation";
import TextGlitterAnimation from "@/components/TextGlitterAnimation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {/* <FramerMotionBasics /> */}
      {/* <NavBarAnimation /> */}
      {/* <TextGlitterAnimation /> */}
      {/* <CardTiltAnimation /> */}
      {/* <IconChainAnimation /> */}
      <FloatingHoverCard />
    </div>
  );
}
