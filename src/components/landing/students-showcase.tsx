import { CheckIcon, SecurityCheckIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StudentShowcase() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:gap-6">
      {/* Col 1 */}
      <div className="flex gap-3 sm:min-w-0 sm:shrink sm:basis-42 sm:flex-col sm:gap-4 lg:gap-6">
        <StudentCard
          name="Riya"
          role="Business Analyst"
          company="Deloitte"
          image="./students/student-1.png"
        />
        <StudentCard
          name="Ananya"
          role="Consulting Analyst"
          company="Deloitte"
          image="./students/student-2.png"
        />
      </div>

      {/* Col 2 */}
      <div className="max-sm:hidden">
        <StudentCard
          name="Aarav"
          role="Data Analyst"
          company="American Express"
          image="./students/student-3.png"
          isLarge
        />
      </div>

      {/* Col 3 */}
      <div className="flex gap-3 sm:min-w-0 sm:shrink sm:basis-42 sm:flex-col sm:gap-4 lg:gap-6">
        <StudentCard
          name="Kabir"
          role="Risk Analyst"
          company="KPMG"
          image="./students/student-4.png"
        />
        <StudentCard
          name="Neel"
          role="Strategy Analyst"
          company="ZS Associates"
          image="./students/student-5.png"
        />
      </div>
    </div>
  );
}

type StudentCardProps = {
  name: string;
  role: string;
  company: string;
  image: string;
  imageClassName?: string;
  cardClassName?: string;
  isLarge?: boolean;
};

function StudentCard({
  name,
  role,
  company,
  image,
  imageClassName,
  cardClassName,
  isLarge = false,
}: StudentCardProps) {
  return (
    <Card
      className={cn(
        "relative shadow-xl transition-transform duration-300 ease-in-out hover:scale-101",
        isLarge
          ? "p-2! [--card-spacing:--spacing(3)] sm:max-w-3xs"
          : "w-full max-w-42 shrink overflow-visible p-1.5! [--card-spacing:--spacing(2)]",
        cardClassName,
      )}
    >
      <img
        src={image}
        alt={`${name} - ${role}`}
        className={cn(
          "rounded-lg object-cover",
          isLarge ? "sm:h-80" : "bg-accent h-36 object-top",
          imageClassName,
        )}
      />
      {isLarge && (
        <div className="dark:text-background absolute top-4 right-4 flex size-14 flex-col items-center justify-center gap-1 rounded-full bg-white p-2 text-center text-[0.5125rem]/[1] font-medium">
          <HugeiconsIcon
            icon={SecurityCheckIcon}
            className="text-background fill-cc-sage-900 dark:text-foreground size-5 shrink-0"
          />
          Verified Result
        </div>
      )}
      <CardHeader>
        <CardTitle
          className={cn(
            "text-sm sm:text-base",
            isLarge && "mt-2 text-lg sm:text-2xl",
          )}
        >
          {name}
        </CardTitle>
        <CardDescription
          className={cn("text-cc-sage-900 font-medium", !isLarge && "text-xs")}
        >
          {role}
        </CardDescription>
      </CardHeader>
      <CardFooter
        className={cn(
          "mt-auto border-none bg-transparent",
          isLarge ? "pt-2" : "pt-0",
        )}
      >
        <div className="flex items-center gap-2">
          <div className="bg-cc-sage-900 rounded-full p-1">
            <HugeiconsIcon
              icon={CheckIcon}
              strokeWidth={isLarge ? 2 : 2.5}
              className={cn(
                "text-background dark:text-foreground",
                isLarge ? "size-3" : "size-2",
              )}
            />
          </div>
          <p className={cn(!isLarge && "text-xs")}>
            Placed at <span className="font-semibold">{company}</span>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
