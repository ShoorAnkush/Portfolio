export const HistoryCard = ({
  title,
  location,
  period,
  role,
  degree,
  bullets = [],
}) => {
  return (
    <div className="bg-card shadow-md rounded-lg p-4 m-4 hover:outline-sandy transition max-sm:p-2 max-sm:m-2">
      {/* Title + Period row */}
      <div className="flex justify-between items-baseline max-sm:flex-col max-sm:items-start max-sm:gap-1">
        <h3 className="text-xl font-semibold text-sandy max-sm:text-lg">
          {title}
        </h3>
        <p className="text-sm font-medium text-muted max-sm:text-xs">
          {period}
        </p>
      </div>

      {/* Location below title */}
      <p className="text-sm text-muted mt-1 max-sm:text-xs">{location}</p>

      <p className="mt-2 text-base font-medium text-foreground max-sm:text-sm">
        {role}
      </p>

      {bullets.length > 0 && (
        <ul className="mt-2 list-disc list-inside space-y-1 max-sm:space-y-0.5">
          {bullets.map((bul, index) => (
            <li className="text-sm text-muted max-sm:text-xs" key={index}>
              {bul}
            </li>
          ))}
        </ul>
      )}

      {degree && (
        <p className="mt-3 text-sm italic text-muted max-sm:text-xs">
          {degree}
        </p>
      )}
    </div>
  );
};
