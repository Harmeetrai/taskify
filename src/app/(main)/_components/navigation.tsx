"use client"

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/clerk-react";
import { User } from "lucide-react";
import { ElementRef, useRef, useState } from "react";
import { BsLayoutSidebar } from "react-icons/bs";

export const Navigation = () => {
    const sidebarRef = useRef<ElementRef<"aside">>(null);
    const navbarRef = useRef<ElementRef<"div">>(null);

    const [isResetting, setIsResetting] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const collapse = () => {
        if (sidebarRef.current && navbarRef.current) {
          setIsCollapsed(true);
          setIsResetting(true);
    
          sidebarRef.current.style.width = "0";
          navbarRef.current.style.setProperty("left", "0");
          navbarRef.current.style.setProperty("width", "100%");
    
          setTimeout(() => setIsResetting(false), 300);
        }
      };
    
    
    return (
        <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col dark:bg-[#1F1F1F] dark:text-white",
          isResetting && "transition-all ease-in-out duration-300",
        )}>
        <div className="flex items-center justify-between p-4">
            <UserButton/>
            <div
          role="botton"
          onClick={collapse}
          className={cn(
            "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
        
          )}
        >
          <BsLayoutSidebar className="h-6 w-6" />
        </div>
        </div>
        </aside>
    );
}
