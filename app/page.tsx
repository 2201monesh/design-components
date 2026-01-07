import AnimatedDrawer from "@/components/AnimatedDrawer";
import CardTiltAnimation from "@/components/CardTiltAnimation";
import CardWidthAnimation from "@/components/CardWidthAnimation";
import DragAndDropCards from "@/components/DragAndDropCards";
import DraggableSlides from "@/components/DraggableSlides";
import FloatingHoverCard from "@/components/FloatingHoverCard";
import FolderCardAnimation from "@/components/FolderCardAnimation";
import FramerMotionBasics from "@/components/FramerMotionBasics";
import IconChainAnimation from "@/components/IconChainAnimation";
import LinkSharingCard from "@/components/LinkSharingCard";
import NavBarAnimation from "@/components/NavBarAnimation";
import SlackCard from "@/components/SlackCard";
import TextGlitterAnimation from "@/components/TextGlitterAnimation";
import WorkspaceCardComponent from "@/components/WorkspaceCardComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {/* <FramerMotionBasics /> */}
      {/* <NavBarAnimation /> */}
      {/* <TextGlitterAnimation /> */}
      {/* <CardTiltAnimation /> */}
      {/* <IconChainAnimation /> */}
      {/* <FloatingHoverCard /> */}
      {/* <DragAndDropCards /> */}
      {/* <SlackCard /> */}
      {/* <WorkspaceCardComponent /> */}
      {/* <DraggableSlides /> */}
      <LinkSharingCard />
    </div>
  );
}
