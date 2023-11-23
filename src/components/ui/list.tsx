import { ReactNode } from 'react';

export const List = ({ children }: { children: ReactNode }) => (
  <ul className="flex flex-col gap-2">{children}</ul>
)

export const ListItem = ({ children }: { children: ReactNode }) => (
  <li className="flex gap-4">
    <span className="w-2 h-2 rounded-sm bg-purple-800 inline-flex mt-2" />
    <div>{children}</div>
  </li>
)