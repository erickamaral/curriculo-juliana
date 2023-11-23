import { ReactNode } from 'react';

export const Section = ({ children }: { children: ReactNode }) => (
  <section className="flex flex-col gap-8">{children}</section>
)

export const SectionContent = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col gap-8">{children}</div>
)

export const SectionJob = ({ job, place, period }: { job: ReactNode, place: ReactNode, period: ReactNode }) => (
  <div className="flex flex-col">
    <span>
      <strong>{job}:</strong> {place}
    </span>
    <span>{period}</span>
  </div>
)

export const SectionTraining = ({ school, course, place, status }: { school: ReactNode, course: ReactNode, place: ReactNode, status: ReactNode }) => (
  <div className="flex flex-col">
    <span>
      <strong>{course}</strong>
    </span>
    <span>
      <strong>{school}:</strong> {place}
    </span>
    <span>
      <strong>Status:</strong> {status}
    </span>
  </div>
)

export const SectionIcon = ({ children }: { children: ReactNode }) => (
  <div className="w-12 h-12 flex flex-none items-center justify-center bg-purple-100 text-purple-800 rounded-lg">
    {children}
  </div>
)

export const SectionHeader = ({ children }: { children: ReactNode }) => (
  <header className=" flex items-center gap-6">
    {children}
  </header>
)

export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="mt-1 uppercase text-purple-800 font-extrabold text-2xl">
    {children}
  </h2>
)