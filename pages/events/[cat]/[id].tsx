import { IParams, EventDetailed, allEvents } from "@/src/components/types";
import type { GetStaticPropsContext } from "next";
import EventCard from "@/src/components/EventCard";
export const EventPage = ({ data }: { data: EventDetailed }) => {
  return (
    <div>
      <EventCard {...data} />
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    "https://raw.githubusercontent.com/timeToCode-ali/nextjs-tutorial/main/data/data.json"
  );
  const data = (await res.json()) || null;
  const allPaths = data.allEvents.map((ev: EventDetailed) => {
    return { params: { cat: ev.city, id: ev.id } };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const res = await fetch(
    "https://raw.githubusercontent.com/timeToCode-ali/nextjs-tutorial/main/data/data.json"
  );
  const data = (await res.json()) || null;
  const { id } = context.params as IParams;
  const eventData = data.allEvents.find((ev: EventDetailed) => id === ev.id);
  return {
    props: { data: eventData },
  };
}

export default EventPage;
