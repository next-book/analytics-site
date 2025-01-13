'use client';
import { useState } from 'react';
import { BookListDataContext } from 'lib/dashboard/hooks/use-book-list-data';
import {
  today,
  getLocalTimeZone,
  startOfYear,
  endOfYear,
} from '@internationalized/date';
import { DateInterval } from 'lib/dashboard/hooks/use-dashboard-data';
import BookReadersList from 'components/pages/library/book-readers-list';

type Props = {
  defaultDateInterval?: DateInterval;
};

const localDate = today(getLocalTimeZone());

export default function Home({
  defaultDateInterval = {
    start: startOfYear(localDate),
    end: endOfYear(localDate),
  },
}: Props) {
  const [dateInterval, setDateInterval] =
    useState<DateInterval>(defaultDateInterval);
  console.log('dateInterval', dateInterval);
  return (
    <BookListDataContext.Provider
      value={{
        dateInterval,
        setDateInterval,
      }}
    >
      <BookReadersList />
    </BookListDataContext.Provider>
  );
}
