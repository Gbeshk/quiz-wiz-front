interface QuizCategoriesProps {
  categories: string[];
}

export default function QuizCategories({ categories }: QuizCategoriesProps) {
  return (
    <div className="mt-8 flex items-center gap-3">
      {categories.map((category, index) => (
        <div key={category} className="flex items-center gap-3">
          <p className="font-inter font-semibold text-sm leading-5 text-auth-link">
            {category}
          </p>
          {index < categories.length - 1 && (
            <div className="h-1 w-1 rounded-full bg-auth-border" />
          )}
        </div>
      ))}
    </div>
  );
}
