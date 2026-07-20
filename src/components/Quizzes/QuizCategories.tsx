interface QuizCategoriesProps {
  categories: string[];
}

export default function QuizCategories({ categories }: QuizCategoriesProps) {
  return (
    <div className="mt-8 flex items-center gap-3">
      {categories.map((category, index) => (
        <div key={category} className="flex items-center gap-3">
          <p className="font-inter text-auth-link text-sm leading-5 font-semibold">
            {category}
          </p>
          {index < categories.length - 1 && (
            <div className="bg-auth-border h-1 w-1 rounded-full" />
          )}
        </div>
      ))}
    </div>
  );
}
