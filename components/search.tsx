'use client';
import { useSearchParams } from 'next/navigation';

interface SearchProps {
  searchParams: URLSearchParams | null;
}

function SearchBase({ searchParams }: SearchProps) {
  return (
    <div>
      <p>Search params: {searchParams?.toString()}</p>
    </div>
  );
}

export function SearchFallback() {
  return <SearchBase searchParams={new URLSearchParams()} />;
}

export function Search() {
  const searchParams = useSearchParams();
  return <SearchBase searchParams={searchParams} />;
}
