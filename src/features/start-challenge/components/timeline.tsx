import { TIMELINE_STEPS } from "../constants";

export default function Timeline() {
  return (
    <div className="bg-background relative mx-auto flex max-w-7xl flex-col justify-between rounded-3xl p-8 px-4 sm:-mt-24 sm:w-[90%] sm:border sm:p-6">
      <h2 className="text-2xs font-medium tracking-tight uppercase sm:text-sm md:text-base">
        Your journey in this case
      </h2>

      <div className="relative mt-6 flex items-center justify-between gap-2 sm:mt-8 sm:gap-7 sm:px-4">
        {/* Horizontal line */}
        <div className="bg-cc-sage-500/75 absolute top-4 h-px w-full sm:top-6" />

        {TIMELINE_STEPS.map((item) => (
          <div
            key={item.step}
            className="bg-background z-10 flex flex-col items-center gap-4"
          >
            {/* Circle */}
            <div className="bg-cc-sage-500 ring-cc-sage-200 dark:bg-cc-sage-700 dark:ring-cc-sage-200 text-2xs md:text-md flex size-8 items-center justify-center rounded-full border font-medium text-white tabular-nums ring-2 sm:size-10 sm:font-semibold sm:ring-4 md:size-14">
              {item.step}
            </div>

            <div className="space-y-2 text-center">
              <h3 className="md:text-md text-muted-foreground sm:text-foreground text-2xs sm:text-xs sm:font-medium">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs max-md:hidden">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
