import { ParsedUrlQuery } from "querystring";

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface EventDetailed {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
  emails_registered: string[];
}

export type allEvents = {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
  emails_registered: [];
}[];

export interface IParams extends ParsedUrlQuery {
  cat: string;
}

export interface Data {
  events_categories: [
    {
      id: string;
      title: string;
      description: string;
      image: string;
    }
  ];
  allEvents: [
    {
      id: string;
      title: string;
      city: string;
      description: string;
      image: string;
      emails_registered: [];
    }
  ];
}

export interface LayoutProps {
  children?: React.ReactNode;
}