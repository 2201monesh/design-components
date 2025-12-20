"use client";

import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import "./icon.css";

const COLS = 25;
const ROWS = 10;
const TOTAL = COLS * ROWS;
const FADE_DELAY = 400;

export default function IconChainAnimation() {
  const [activeSet, setActiveSet] = useState<Set<number>>(new Set());
  const [rotatingSet, setRotatingSet] = useState<Set<number>>(new Set());
  const timeouts = useRef<Map<number, NodeJS.Timeout>>(new Map());

  const activate = (index: number) => {
    // cancel pending removal
    const t = timeouts.current.get(index);
    if (t) {
      clearTimeout(t);
      timeouts.current.delete(index);
    }

    setActiveSet((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });

    // trigger rotation ONCE
    setRotatingSet((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });

    // remove rotation class after animation ends
    setTimeout(() => {
      setRotatingSet((prev) => {
        const next = new Set(prev);
        next.delete(index);
        return next;
      });
    }, 400);
  };

  const deactivate = (index: number) => {
    const timeout = setTimeout(() => {
      setActiveSet((prev) => {
        const next = new Set(prev);
        next.delete(index);
        return next;
      });
      timeouts.current.delete(index);
    }, FADE_DELAY);

    timeouts.current.set(index, timeout);
  };

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="flex flex-col w-1/2 min-h-screen items-center justify-center dark:bg-black">
          <p className="text-3xl w-3/5 mb-4 italic tracking-tight">hey,</p>

          <div
            className="w-3/5 grid gap-1 rounded-xl bg-white cursor-pointer"
            style={{
              gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
            }}
          >
            {Array.from({ length: TOTAL }).map((_, index) => {
              const isActive = activeSet.has(index);
              const isRotating = rotatingSet.has(index);

              return (
                <div
                  key={index}
                  onMouseEnter={() => activate(index)}
                  onMouseLeave={() => deactivate(index)}
                  className="flex items-center justify-center"
                >
                  <Plus
                    className={`
                      h-4.5 w-4.5
                      transition-all duration-300 ease-out
                      ${isActive ? "text-black scale-110" : "text-neutral-400"}
                      ${isRotating ? "spin-once" : ""}
                    `}
                    strokeWidth={5}
                  />
                </div>
              );
            })}
          </div>

          {/* <p className="w-3/5 mt-4 text-xl">
            We help <span>founders</span> launch their sites in 2 <br />
            weeks from <span>copy</span>, <span>brand</span>, <span>tagline</span>, <span>research</span>, <br />
            <span>visuals</span> all done by us.
          </p>

          <p className="w-3/5 mt-4">speed and building premium site is our superpower</p> */}
          <p className="w-3/5 mt-4 text-xl">
            designers actually can change the world for the better by making the{" "}
            <span className="text-[#2b7fff]">complicated</span>{" "}
            <span className="text-[#fb2c36]">simple</span> and{" "}
            <span className="text-[#00cc6d]">finding</span>{" "}
            <span className="text-[#fdca18]">beauty</span> in truth
          </p>
          <div className="flex gap-2 mt-6 w-3/5">
            <button className="shadow bg-black w-30 h-8 text-white rounded-lg px-2 py-1 min-w-24 cursor-pointer transition-transform duration-150 ease-out active:scale-[0.97]">
              Login
            </button>
            <button className="shadow-sm w-30 h-8 border border-neutral-300 rounded-lg px-2 py-1 min-w-24 cursor-pointer transition-transform duration-150 ease-out active:scale-[0.97]">
              Start
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
