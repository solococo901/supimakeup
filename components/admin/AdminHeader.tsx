export default function AdminHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex justify-between items-end mb-16">
      <div>
        <h1 className="text-4xl font-serif">{title}</h1>
        {description && (
          <p className="text-sm text-gray-400 mt-2">
            {description}
          </p>
        )}
      </div>

      {action}
    </div>
  );
}