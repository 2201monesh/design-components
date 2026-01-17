"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";

const companies = [
  {
    id: 1,
    name: "OpenAI",
    email: "contact@openai.com",
    logo: "/openai.png",
  },
  {
    id: 2,
    name: "Google",
    email: "support@google.com",
    logo: "/google-color.png",
  },
  {
    id: 3,
    name: "Cursor",
    email: "hello@cursor.com",
    logo: "/cursor.png",
  },
  {
    id: 4,
    name: "AWS",
    email: "info@aws.com",
    logo: "/aws-color.png",
  },
  {
    id: 5,
    name: "Apple",
    email: "support@apple.com",
    logo: "/apple.png",
  },
  {
    id: 6,
    name: "Microsoft",
    email: "support@microsoft.com",
    logo: "/microsoft-color.png",
  },
  {
    id: 7,
    name: "Meta",
    email: "support@meta.com",
    logo: "/meta-color.png",
  },
  {
    id: 8,
    name: "Perplexity",
    email: "info@perplexity.com",
    logo: "/perplexity-color.png",
  },
  {
    id: 9,
    name: "Grok",
    email: "tech@grok.com",
    logo: "/grok.png",
  },
  {
    id: 10,
    name: "Eleven Labs",
    email: "support@elevenlabs.com",
    logo: "/elevenlabs.png",
  },
  {
    id: 11,
    name: "Figma",
    email: "help@figma.com",
    logo: "/figma-color.png",
  },
  {
    id: 12,
    name: "Github",
    email: "support@github.com",
    logo: "/github.png",
  },
  {
    id: 13,
    name: "Greptile",
    email: "info@greptile.com",
    logo: "/greptile-color.png",
  },
  {
    id: 14,
    name: "Lovable",
    email: "tech@lovable.com",
    logo: "/lovable-color.png",
  },
  {
    id: 15,
    name: "Notion",
    email: "support@notion.com",
    logo: "/notion.png",
  },
  {
    id: 16,
    name: "V0",
    email: "info@vercel.com",
    logo: "/v0.png",
  },
];

type View = "closed" | "list" | "add";

const ComboBox = () => {
  const [view, setView] = useState<View>("closed");
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setView("closed");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      style={{ fontFamily: "var(--font-geist-sans)" }}
      className="flex items-start justify-center w-full h-full bg-[#f6f6f6]"
    >
      <div
        ref={wrapperRef}
        className="flex flex-col items-center justify-start w-full h-full border"
      >
        <input
          type="text"
          onFocus={() => setView("list")}
          className="outline-neutral-300 w-[25%] px-4 py-2 shadow-sm rounded-lg bg-white mt-22"
          placeholder="Search companies..."
        />
        {view == "list" && (
          <motion.div
            initial={false}
            animate={{
              height: view === "list" ? 320 : view === "add" ? 144 : 0,
              opacity: view === "closed" ? 0 : 1,
            }}
            transition={{
              duration: 0.22,
              ease: [0.32, 0.72, 0, 1], // iOS-like
            }}
            className="w-[25%] h-100 border rounded-lg border-neutral-200 bg-white shadow-sm mt-1.5"
          >
            <div className="w-full h-[88%] overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {companies.map((company) => (
                <CompanyInfo
                  key={company.id}
                  name={company.name}
                  email={company.email}
                  logo={company.logo}
                />
              ))}
            </div>
            <div
              onClick={() => setView("add")}
              className="w-full h-[12%] bg-[#f6f6f6] rounded-b-lg border-t border-t-neutral-200 flex items-center justify-start px-4 cursor-pointer"
            >
              <span className="mr-2 w-5 h-5 rounded-full border flex items-center justify-center">
                <span className="mb-0.5 mr-[0.4px]">+</span>
              </span>
              <span className="text-sm">Create company</span>
            </div>
          </motion.div>
        )}

        {view == "add" && (
          <div className="w-[25%] h-36 bg-white border mt-1.5 rounded-lg border-neutral-200 shadow-sm">
            <div className="w-full bg-[#f6f6f6] h-12 rounded-t-lg flex items-center justify-between px-4">
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={() => setView("list")}
              >
                <span className="mr-6">
                  <IoIosArrowBack
                    className="text-neutral-500 mt-0.5 cursor-pointer"
                    size={18}
                  />
                </span>
                <span className="text-sm">Add a company</span>
              </div>
              <div className="px-2.5 py-0.5 border text-sm rounded-sm bg-[#00751f] text-white cursor-pointer">
                Add
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComboBox;

type CompanyInfoProps = {
  name: string;
  email: string;
  logo: React.ReactNode;
};

const CompanyInfo = ({ name, email, logo }: CompanyInfoProps) => {
  return (
    <div className="w-full px-4 py-1.5 flex items-center justify-between hover:bg-[#f6f6f6]">
      <div className="flex items-center justify-center">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-black mr-2">
          <img className="w-4 h-4 bg-cover" src={logo} alt="img" />
        </div>
        <span className="text-sm">{name}</span>
      </div>
      <div className="text-neutral-500 text-sm">{email}</div>
    </div>
  );
};
