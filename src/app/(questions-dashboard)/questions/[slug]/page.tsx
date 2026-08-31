import { notFound } from "next/navigation";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowUpRightIcon,
  CodeXmlIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import LinkButton from "@/components/link-button";
import QuestionBookmarkButton from "@/components/question-bookmark-button";
import { difficultyStyles } from "@/features/questions-dashboard/components/questions-table";
import { QUESTIONS } from "@/features/questions-dashboard/data/questions";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return QUESTIONS.map((q) => ({
    slug: q.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const question = QUESTIONS.find((q) => q.slug === slug || q.id === slug);

  if (!question) notFound();

  return {
    title: question.question,
    description: question.shortAnswer || question.explanation.slice(0, 160),
    openGraph: {
      title: question.question,
      description: question.shortAnswer || question.explanation.slice(0, 160),
    },
  };
}

export default async function QuestionDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const currentIndex = QUESTIONS.findIndex(
    (q) => q.slug === slug || q.id === slug,
  );

  if (currentIndex === -1) {
    notFound();
  }

  const question = QUESTIONS[currentIndex];
  const prevQuestion = currentIndex > 0 ? QUESTIONS[currentIndex - 1] : null;
  const nextQuestion =
    currentIndex < QUESTIONS.length - 1 ? QUESTIONS[currentIndex + 1] : null;

  return (
    <div className="mx-auto max-w-3xl space-y-10 sm:space-y-12">
      {/* Top Bar: Back Link & Quick Nav */}
      <div className="flex items-center justify-between gap-3">
        <LinkButton
          href="/questions"
          variant="secondary"
          className="text-xs sm:text-sm"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
          Dashboard
        </LinkButton>

        {/* Previous / Next shortcuts */}
        <div className="flex items-center gap-2">
          {prevQuestion && (
            <LinkButton
              href={`/questions/${prevQuestion.slug}`}
              variant="secondary"
              className="size-8 text-xs sm:h-8 sm:w-auto sm:text-sm"
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
              <span className="max-sm:sr-only">Prev</span>
            </LinkButton>
          )}
          {nextQuestion && (
            <LinkButton
              href={`/questions/${nextQuestion.slug}`}
              variant="secondary"
              className="size-8 text-xs sm:h-8 sm:w-auto sm:text-sm"
            >
              <span className="max-sm:sr-only">Next</span>
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
            </LinkButton>
          )}
        </div>
      </div>

      {/* Main Question Section */}
      <div className="space-y-4">
        {/* Badges & Action Buttons */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="text-2xs sm:p-3">
              {question.subject}
            </Badge>
            <Badge variant="outline" className="text-2xs sm:p-3">
              {question.type}
            </Badge>
            <Badge
              className={cn(
                "text-2xs capitalize sm:p-3",
                difficultyStyles[question.difficulty],
              )}
            >
              {question.difficulty}
            </Badge>
          </div>

          <QuestionBookmarkButton size="icon-lg" questionId={question.id} />
        </div>

        {/* Question */}
        <h1 className="leading-snug font-medium tracking-tight sm:text-xl sm:font-semibold md:text-2xl">
          {question.question}
        </h1>

        {/* Applicable Tracks */}
        {question.directions && question.directions.length > 0 && (
          <p className="text-xs">
            <span className="font-medium">Relevant tracks: </span>
            <span className="text-muted-foreground">
              {question.directions.join(" • ")}
            </span>
          </p>
        )}
      </div>

      <Separator />

      {/* Short Answer */}
      <section className="bg-cc-sage-100/50 dark:bg-cc-sage-900/25 border-cc-sage-900 space-y-2 rounded-xl border-l-2 p-4 sm:space-y-4 sm:p-6">
        <h2 className="text-xs font-semibold tracking-wide uppercase">
          Short answer
        </h2>
        <p className="text-foreground text-sm sm:text-base">
          {question.shortAnswer}
        </p>
      </section>

      {/* Explanation */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold tracking-wide uppercase">
          Explanation
        </h2>
        <div className="text-foreground/90 space-y-3 text-sm leading-relaxed whitespace-pre-line sm:text-base">
          {question.explanation}
        </div>
      </section>

      {/* Common Mistakes (if available) */}
      {question.commonMistakes && question.commonMistakes.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xs font-semibold tracking-wide uppercase">
            Common mistakes
          </h2>
          <ul className="text-muted-foreground list-inside list-decimal space-y-2 text-sm sm:text-base">
            {question.commonMistakes.map((mistake, idx) => (
              <li key={idx}>{mistake}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Follow-Up Questions */}
      {question.followUps && question.followUps.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xs font-semibold tracking-wide uppercase">
            Follow-up questions
          </h2>
          <Accordion className="space-y-4">
            {question.followUps.map((item, index) => {
              return (
                <AccordionItem
                  key={index}
                  className="bg-accent rounded-xl px-4 py-1 sm:px-6"
                >
                  <AccordionTrigger className="sm:text-md font-normal hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground mt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </section>
      )}

      {/* Show SQL Playground recomendation (if subject = SQL) */}
      {question.subject === "SQL" && (
        <Item variant="outline" className="gap-4 rounded-xl">
          <ItemMedia variant="icon">
            <div className="bg-accent rounded-lg p-2 sm:p-3">
              <HugeiconsIcon
                icon={CodeXmlIcon}
                strokeWidth={1.5}
                className="size-5 sm:size-6"
              />
            </div>
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-xs sm:text-sm">SQL Playground</ItemTitle>
            <ItemDescription className="text-xs">
              Practice SQL queries
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button className="bg-cc-sage-900 hover:bg-cc-sage-900/75 size-9 rounded-full font-normal sm:h-10 sm:w-fit sm:rounded-xl sm:px-4">
              <span className="max-sm:hidden">Open SQL Playground</span>
              <HugeiconsIcon icon={ArrowUpRightIcon} strokeWidth={2} />
            </Button>
          </ItemActions>
        </Item>
      )}

      <Separator />

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between gap-4 pt-2">
        {prevQuestion && (
          <LinkButton
            variant="ghost"
            href={`/questions/${prevQuestion.slug}`}
            className="text-muted-foreground hover:text-foreground flex-1 text-xs sm:text-sm"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
            <span className="line-clamp-1 text-wrap">
              Previous: {prevQuestion.question}
            </span>
          </LinkButton>
        )}

        {nextQuestion && (
          <LinkButton
            variant="ghost"
            href={`/questions/${nextQuestion.slug}`}
            className="text-muted-foreground hover:text-foreground flex-1 text-right text-xs sm:text-sm"
          >
            <span className="line-clamp-1 text-wrap">
              Next: {nextQuestion.question}
            </span>
            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
          </LinkButton>
        )}
      </div>
    </div>
  );
}
