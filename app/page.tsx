import AnimatedDrawer from "@/components/AnimatedDrawer";
import CardTiltAnimation from "@/components/CardTiltAnimation";
import CardWidthAnimation from "@/components/CardWidthAnimation";
import ComboBox from "@/components/ComboBox";
import DragAndDropCards from "@/components/DragAndDropCards";
import DraggableSlides from "@/components/DraggableSlides";
import FeedbackPopover from "@/components/FeedbackPopover";
import FloatingHoverCard from "@/components/FloatingHoverCard";
import FolderCardAnimation from "@/components/FolderCardAnimation";
import FramerMotionBasics from "@/components/FramerMotionBasics";
import IconChainAnimation from "@/components/IconChainAnimation";
import IosSideNotch from "@/components/IosSideNotch";
import LinkSharingCard from "@/components/LinkSharingCard";
import NavBarAnimation from "@/components/NavBarAnimation";
import NotchBarAnimation from "@/components/NotchBarAnimation";
import SearchCommandWithAI from "@/components/SearchCommandWithAI";
import SlackCard from "@/components/SlackCard";
import TextGlitterAnimation from "@/components/TextGlitterAnimation";
import ThinkingCard from "@/components/ThinkingCard";
import WorkspaceCardComponent from "@/components/WorkspaceCardComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
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
      {/* <LinkSharingCard /> */}
      {/* <NotchBarAnimation /> */}
      {/* <SearchCommandWithAI /> */}
      {/* <FeedbackPopover /> */}
      {/* <IosSideNotch /> */}
      {/* <ComboBox /> */}
      <ThinkingCard />
    </div>
  );
}
