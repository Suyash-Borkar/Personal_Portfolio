import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

export const Tooltip = ({ children, label }) => (
  <TooltipPrimitive.Provider delayDuration={200}>
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side="top"
          className={cn(
            "px-3 py-1 rounded-md text-sm text-white bg-black/80 shadow-sm",
            "animate-fade-in z-50"
          )}
        >
          {label}
          <TooltipPrimitive.Arrow className="fill-black/80" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
);
