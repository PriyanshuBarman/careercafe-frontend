import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertCircleIcon,
  ArrowRight01Icon,
  ArrowUpRightIcon,
  BookOpen01Icon,
  CodeXmlIcon,
  DocumentCodeIcon,
  FlashIcon,
  HelpCircleIcon,
  Layers01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import BackButton from "@/components/back-button";
import QuestionBookmarkButton from "@/components/question-bookmark-button";
import { QUESTIONS } from "@/features/questions-dashboard/data/questions";
import { getRelatedQuestions } from "@/features/questions-dashboard/utils/get-related-questions";

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
  const relatedQuestionsList = getRelatedQuestions(question.relatedQuestions);

  return (
    <div className="mx-auto max-w-3xl space-y-10 pb-12 sm:space-y-12">
      {/* Top Bar: Back Link */}
      <div className="flex items-center justify-between gap-3">
        <BackButton>Dashboard</BackButton>

        {/* Previous / Next Button (currently hidden as amit sir's instruction) */}
        {/* <div className="flex items-center gap-2">
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
        </div> */}
      </div>

      {/* Main Question Section */}
      <div className="space-y-2">
        {/* Badges & Action Buttons */}
        <div className="flex items-center justify-between gap-4">
          <div className="text-2xs flex flex-wrap items-center gap-2 font-medium capitalize sm:text-xs">
            <span>{question.subject}</span>
            <span>•</span>
            <span>{question.type}</span>
            <span>•</span>
            <span>{question.difficulty}</span>
          </div>

          <QuestionBookmarkButton size="icon-lg" questionId={question.id} />
        </div>

        {/* Question */}
        <h1 className="leading-snug font-medium tracking-tight sm:text-xl sm:font-semibold md:text-2xl">
          {question.question}
        </h1>

        {/* Relevant Tracks */}
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
        <div className="flex items-center gap-2">
          <HugeiconsIcon
            icon={FlashIcon}
            strokeWidth={2}
            className="text-muted-foreground size-4"
          />
          <h2 className="text-xs font-semibold tracking-wide uppercase">
            Short answer
          </h2>
        </div>
        <p className="text-foreground text-[0.8125rem] leading-relaxed sm:text-base">
          {question.shortAnswer}
        </p>
      </section>

      {/* Explanation */}
      <section className="space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2">
          <HugeiconsIcon
            icon={BookOpen01Icon}
            strokeWidth={2}
            className="text-muted-foreground size-4"
          />
          <h2 className="text-xs font-semibold tracking-wide uppercase">
            Explanation
          </h2>
        </div>
        <div className="text-foreground/90 space-y-3 text-[0.8125rem] leading-relaxed whitespace-pre-line sm:text-base">
          {question.explanation}
        </div>
      </section>

      {/* Example */}
      {question.example && (
        <section className="space-y-2 sm:space-y-4">
          <div className="flex items-center gap-2">
            <HugeiconsIcon
              icon={DocumentCodeIcon}
              strokeWidth={2}
              className="text-muted-foreground size-4"
            />
            <h2 className="text-xs font-semibold tracking-wide uppercase">
              Example & Walkthrough
            </h2>
          </div>
          <div className="bg-muted/40 border-border/80 text-foreground/90 overflow-x-auto rounded-xl border p-4 font-mono text-xs leading-relaxed whitespace-pre-line sm:p-6 sm:text-sm">
            {question.example}
          </div>
        </section>
      )}

      {/* Follow-Up Questions */}
      {question.followUps && question.followUps.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HugeiconsIcon
              icon={HelpCircleIcon}
              strokeWidth={2}
              className="text-muted-foreground size-4"
            />
            <h2 className="text-[0.8125rem] font-semibold tracking-wide uppercase">
              Follow-up questions
            </h2>
          </div>
          <Accordion className="space-y-2 sm:space-y-4">
            {question.followUps.map((item, index) => (
              <AccordionItem
                key={index}
                className="bg-accent rounded-xl px-4 py-1 sm:px-6 sm:py-2"
              >
                <AccordionTrigger className="sm:text-md text-[0.8125rem] font-normal hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground mt-2 text-xs leading-relaxed sm:text-sm">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}

      {/* Common Mistakes */}
      {question.commonMistakes && question.commonMistakes.length > 0 && (
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2">
            <HugeiconsIcon
              icon={AlertCircleIcon}
              strokeWidth={2}
              className="text-muted-foreground size-4"
            />
            <h2 className="text-xs font-semibold tracking-wide uppercase">
              Common mistakes
            </h2>
          </div>
          <ul className="text-muted-foreground list-inside list-decimal space-y-2 text-xs sm:text-base">
            {question.commonMistakes.map((mistake, idx) => (
              <li key={idx} className="leading-relaxed">
                {mistake}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Related Questions */}
      {relatedQuestionsList.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HugeiconsIcon
              icon={Layers01Icon}
              strokeWidth={2}
              className="text-muted-foreground size-4"
            />
            <h2 className="text-xs font-semibold tracking-wide uppercase">
              Related Questions
            </h2>
          </div>
          <ItemGroup>
            {relatedQuestionsList.map((relQ) => (
              <Item
                render={<Link href={`/questions/${relQ.slug}`} replace />}
                key={relQ.id}
                variant="outline"
                className="gap-4 rounded-xl p-4"
              >
                <ItemContent>
                  <ItemDescription className="text-muted-foreground text-2xs flex items-center gap-2 capitalize sm:text-xs">
                    <span>{relQ.subject}</span>
                    <span>•</span>
                    <span>{relQ.type}</span>
                    <span>•</span>
                    <span>{relQ.difficulty}</span>
                  </ItemDescription>
                  <ItemTitle className="text-xs font-normal sm:text-sm">
                    {relQ.question}
                  </ItemTitle>
                </ItemContent>
                <ItemActions>
                  <Button
                    size="icon-lg"
                    variant="ghost"
                    className="text-muted-foreground rounded-full"
                  >
                    <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
                  </Button>
                </ItemActions>
              </Item>
            ))}
          </ItemGroup>
        </section>
      )}

      {/* SQL Playground recommendation (at the very last if subject = SQL) */}
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

      {/* Bottom Navigation (currently hidden as amit sir's instruction) */}
      {/* <div className="flex items-center justify-between gap-4 pt-2">
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
      </div> */}
    </div>
  );
}
