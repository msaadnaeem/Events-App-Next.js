import type { GetStaticPropsContext } from "next";
import { IParams } from "@/src/components/types";
import { EventDetailed, allEvents, Event } from "@/src/components/types";
import { AllCards } from "@/src/components/AllCards";
export const CatagoryPage = ({
  data,
  pageName,
}: {
  data: allEvents;
  pageName: string;
}) => {
  return (
    <div>
      <h1>{`Events in ${
        pageName[0].toUpperCase() + pageName.slice(1, pageName.length)
      }`}</h1>
      {data.map((ev: EventDetailed) => (
        <AllCards {...ev} key={ev.id} />
      ))}
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    "https://raw.githubusercontent.com/timeToCode-ali/nextjs-tutorial/main/data/data.json"
  );
  const data = (await res.json()) || null;
  const allPaths = data.events_categories.map((ev: Event) => {
    return { params: { cat: ev.id.toString() } };
  });
  return {
    paths: allPaths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const res = await fetch(
    "https://raw.githubusercontent.com/timeToCode-ali/nextjs-tutorial/main/data/data.json"
  );
  const data = (await res.json()) || null;
  const { cat } = context.params as IParams;
  const filteredData = data.allEvents.filter(
    (ev: EventDetailed) => ev.city === cat
  );

  return {
    props: { data: filteredData, pageName: cat },
  };
}

export default CatagoryPage;
