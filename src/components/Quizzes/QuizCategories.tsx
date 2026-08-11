interface QuizCategoriesProps {
  categories: string[];
}

const MAX_VISIBLE_CATEGORIES = 3;

export default function QuizCategories({ categories }: QuizCategoriesProps) {
  const hiddenCount = categories.length - MAX_VISIBLE_CATEGORIES;

  const items =
    hiddenCount > 0
      ? [...categories.slice(0, MAX_VISIBLE_CATEGORIES), `+${hiddenCount}`]
      : categories;

  return (
    <div className="mt-8 flex items-center gap-3">
      {items.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className="flex min-w-0 items-center gap-3"
        >
          <p className="font-inter text-auth-link truncate text-sm leading-5 font-semibold">
            {item}
          </p>
          {index < items.length - 1 && (
            <div className="bg-auth-border h-1 w-1 shrink-0 rounded-full" />
          )}
        </div>
      ))}
    </div>
  );
}
