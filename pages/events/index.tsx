import { CatEvent } from "@/src/components/CatEvent";
import { Data } from "@/src/components/types";

export const EventsPage = ({ data }: { data: Data }) => {
  return (
    <div>
      <CatEvent {...data} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://raw.githubusercontent.com/timeToCode-ali/nextjs-tutorial/main/data/data.json"
  );
  const data = (await res.json()) || null;

  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default EventsPage;
