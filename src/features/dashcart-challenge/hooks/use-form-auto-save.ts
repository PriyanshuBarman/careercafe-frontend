import { useCallback, useEffect } from "react";
import type { FieldValues, UseFormReturn } from "react-hook-form";

type UseFormAutoSaveOptions<T extends FieldValues> = {
  key: string;
  form: UseFormReturn<T>;
};

export function useFormAutoSave<T extends FieldValues>({
  key,
  form,
}: UseFormAutoSaveOptions<T>) {
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      const values = raw ? JSON.parse(raw) : null;
      if (values) {
        form.reset({
          ...form.getValues(),
          ...values,
        });
      }
    } catch (error) {
      console.error(
        `Failed to restore draft from localStorage (${key}):`,
        error,
      );
    }
  }, [key, form]);

  const saveDraft = useCallback(() => {
    try {
      const values = form.getValues();
      localStorage.setItem(key, JSON.stringify(values));
    } catch (error) {
      console.error(`Failed to save draft to localStorage (${key}):`, error);
    }
  }, [key, form]);

  const clearDraft = useCallback(() => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Failed to clear draft from localStorage (${key}):`, error);
    }
  }, [key]);

  return { saveDraft, clearDraft };
}
