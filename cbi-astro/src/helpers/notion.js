// src/helpers/notion.js
const NOTION_API_KEY = import.meta.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = import.meta.env.NOTION_DATABASE_ID;

export async function getTodaysDevotional() {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  console.log("HERE TODAY", today)
  const response = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${NOTION_API_KEY}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      filter: {
        property: "Date",
        date: { equals: today }
      }
    })
  });
  try {
    const data = await response.json();
    if (!data.results?.length) {
      return null; // no devotional today
    }

    const page = data.results[0].properties;
    return {
      title: page.Title.title[0]?.plain_text || "",
      content: page.Content.rich_text[0]?.plain_text || "",
      explanation: page.Explanation.rich_text[0]?.plain_text || "",
      verse: page.Verses.rich_text[0]?.plain_text || "",
      assets: page.Assets?.url || "",
      date: page.Date.date.start
    };
  } catch (error) {
    console.error("Error fetching devotional:", error);
    return null;
  }
}
