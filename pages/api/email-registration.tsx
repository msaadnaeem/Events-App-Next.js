import type { NextApiRequest, NextApiResponse } from "next";
import { Data, EventDetailed } from "@/src/components/types";
import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath: string) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
}

type resData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<resData>
) {
  const { method } = req;
  const filePath = buildPath();
  const { events_categories, allEvents }: Data = extractData(filePath);
  if (!allEvents) {
    res.status(404).json({ message: "Events data not found" });
  }
  if (method === "POST") {
    const { email, eventId } = req.body;
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
    }
    const newAllEvents = allEvents.map((ev: EventDetailed) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res.status(409).json({
            message: "This email address has been registered already",
          });
                return ev;
        }
        return {
          ...ev,
          emails_registered: [...ev.emails_registered, email],
        };
      }
      return ev;
    });
    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );
    res.status(201).json({
      message: `You have been successfully registered with the email: ${email}`,
    });
  }
}
