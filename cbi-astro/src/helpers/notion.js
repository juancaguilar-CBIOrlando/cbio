// src/helpers/notion.js
const NOTION_API_KEY = import.meta.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = import.meta.env.NOTION_DATABASE_ID;

// Helper to format a Date as YYYY-MM-DD in local timezone (avoids UTC shift bug)
function toLocalDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Helper function to parse Notion page into devotional object
function parseDevotional(notionPage) {
  const page = notionPage.properties;
  
  // Helper to extract text from rich_text array
  const getRichText = (richTextArray) => {
    if (!richTextArray || !Array.isArray(richTextArray)) return "";
    return richTextArray.map(item => item.plain_text || "").join("");
  };

  // Helper to extract text from title array
  const getTitle = (titleArray) => {
    if (!titleArray || !Array.isArray(titleArray)) return "";
    return titleArray.map(item => item.plain_text || "").join("");
  };

  return {
    id: notionPage.id,
    title: getTitle(page.Title?.title) || "",
    content: getRichText(page.Content?.rich_text) || "",
    explanation: getRichText(page.Explanation?.rich_text) || "",
    verse: getRichText(page.Verses?.rich_text) || "",
    assets: page.Assets?.url || "",
    date: page.Date?.date?.start || ""
  };
}

export async function getTodaysDevotional() {
  const today = toLocalDateString(new Date()); // YYYY-MM-DD in local timezone
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

    return parseDevotional(data.results[0]);
  } catch (error) {
    console.error("Error fetching devotional:", error);
    return null;
  }
}

// Get all devotionals from the last 7 days
export async function getDevotionals() {
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);
  
  // Use local timezone to avoid UTC shift bug (e.g., 7 PM EST becoming next day in UTC)
  const todayStr = toLocalDateString(today);
  const sevenDaysAgoStr = toLocalDateString(sevenDaysAgo);

  const response = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${NOTION_API_KEY}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      filter: {
        and: [
          {
            property: "Date",
            date: { on_or_after: sevenDaysAgoStr }
          },
          {
            property: "Date",
            date: { on_or_before: todayStr }
          }
        ]
      },
      sorts: [
        {
          property: "Date",
          direction: "descending"
        }
      ]
    })
  });

  try {
    const data = await response.json();
    if (!data.results?.length) {
      return [];
    }

    return data.results.map(parseDevotional);
  } catch (error) {
    console.error("Error fetching devotionals:", error);
    return [];
  }
}

// Get a specific devotional by ID
export async function getDevotionalById(id) {
  try {
    const response = await fetch(`https://api.notion.com/v1/pages/${id}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${NOTION_API_KEY}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      return null;
    }

    const page = await response.json();
    return parseDevotional(page);
  } catch (error) {
    console.error("Error fetching devotional by ID:", error);
    return null;
  }
}
