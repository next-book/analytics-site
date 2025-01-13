'use client';
import { useRouter, useSearchParams } from 'next/navigation';

interface FilterProps {
  searchParams: URLSearchParams | null;
}

function FilterBase({ searchParams }: FilterProps) {
  return (
    <div>
      <h1>Filter</h1>
      <p>Search params: {searchParams?.toString()}</p>
    </div>
  );
}

export function FilterFallback() {
  return <FilterBase searchParams={new URLSearchParams()} />;
}

export function Filter() {
  const searchParams = useSearchParams();
  return <FilterBase searchParams={searchParams} />;
}
