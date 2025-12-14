import AnimatedDrawer from "@/components/AnimatedDrawer";
import CardWidthAnimation from "@/components/CardWidthAnimation";
import FramerMotionBasics from "@/components/FramerMotionBasics";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <FramerMotionBasics />
    </div>
  );
}
