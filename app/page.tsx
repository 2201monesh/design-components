import AnimatedDrawer from "@/components/AnimatedDrawer";
import CardWidthAnimation from "@/components/CardWidthAnimation";
import FramerMotionBasics from "@/components/FramerMotionBasics";
import NavBarAnimation from "@/components/NavBarAnimation";
import TextGlitterAnimation from "@/components/TextGlitterAnimation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {/* <FramerMotionBasics /> */}
      {/* <NavBarAnimation /> */}
      <TextGlitterAnimation />
    </div>
  );
}
