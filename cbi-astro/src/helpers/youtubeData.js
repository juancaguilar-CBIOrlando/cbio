/**
 * YouTube Data for CBI Orlando Sermons
 * 
 * Fetches latest videos from the church's YouTube channel
 * Channel: https://www.youtube.com/channel/UC5xttzojPMWk73I66cI6rhw
 */

const CHANNEL_ID = "UC5xttzojPMWk73I66cI6rhw";
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

/**
 * Parse duration from ISO 8601 format to readable format
 * @param {string} duration - ISO 8601 duration (e.g., "PT1H30M45S")
 * @returns {string} Readable duration (e.g., "1:30:45")
 */
function formatDuration(duration) {
  if (!duration) return "";
  
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "";
  
  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  const seconds = match[3] ? parseInt(match[3]) : 0;
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

/**
 * Format date to readable format
 * @param {string} dateStr - ISO date string
 * @returns {string} Formatted date (e.g., "Jan 15, 2026")
 */
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Extract video ID from YouTube URL or entry
 * @param {string} url - YouTube video URL
 * @returns {string} Video ID
 */
function extractVideoId(url) {
  const match = url.match(/(?:v=|\/vi\/|\/v\/|youtu\.be\/|\/embed\/)([^?&"'>]+)/);
  return match ? match[1] : "";
}

/**
 * Get high-quality thumbnail URL for a video
 * @param {string} videoId - YouTube video ID
 * @returns {string} Thumbnail URL
 */
function getThumbnailUrls(videoId) {
  // Not all videos have maxresdefault; hqdefault is much more reliable.
  // Prefer maxres, but keep hq as a fallback.
  return {
    maxres: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
    hq: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
  };
}

/**
 * Parse XML response from YouTube RSS feed
 * @param {string} xmlText - Raw XML text
 * @returns {Array} Array of video objects
 */
function parseYouTubeRSS(xmlText) {
  const videos = [];
  
  // Simple XML parsing using regex (works in both Node and browser)
  const entries = xmlText.match(/<entry>[\s\S]*?<\/entry>/g) || [];
  
  for (const entry of entries) {
    const titleMatch = entry.match(/<title>([^<]+)<\/title>/);
    const videoIdMatch = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const publishedMatch = entry.match(/<published>([^<]+)<\/published>/);
    const authorMatch = entry.match(/<author>[\s\S]*?<name>([^<]+)<\/name>/);
    const descriptionMatch = entry.match(/<media:description>([^<]*)<\/media:description>/);
    
    if (titleMatch && videoIdMatch) {
      const videoId = videoIdMatch[1];
      const thumbnails = getThumbnailUrls(videoId);
      videos.push({
        id: videoId,
        title: titleMatch[1],
        speaker: authorMatch ? authorMatch[1] : "CBI Orlando",
        date: publishedMatch ? formatDate(publishedMatch[1]) : "",
        image: thumbnails.maxres,
        imageFallback: thumbnails.hq,
        videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
        description: descriptionMatch ? descriptionMatch[1] : "",
      });
    }
  }
  
  return videos;
}

/**
 * Fetch latest videos from the YouTube channel
 * @param {number} limit - Maximum number of videos to return (default: 3)
 * @returns {Promise<Array>} Array of sermon video objects
 */
export async function getLatestSermons(limit = 3) {
  try {
    const response = await fetch(RSS_URL);
    
    if (!response.ok) {
      console.error(`Failed to fetch YouTube RSS: ${response.status}`);
      return getFallbackSermons();
    }
    
    const xmlText = await response.text();
    const videos = parseYouTubeRSS(xmlText);
    
    return videos.slice(0, limit);
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return getFallbackSermons();
  }
}

/**
 * Fallback sermon data in case YouTube fetch fails
 * @returns {Array} Array of fallback sermon objects
 */
function getFallbackSermons() {
  return [
    {
      id: "fallback-1",
      title: "Servicio Dominical",
      speaker: "CBI Orlando",
      date: "Visítanos en YouTube",
      image: "https://images.unsplash.com/photo-1601026909629-bad5e1122e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: `https://www.youtube.com/channel/${CHANNEL_ID}`,
    },
  ];
}

/**
 * Get the channel URL
 * @returns {string} YouTube channel URL
 */
export function getChannelUrl() {
  return `https://www.youtube.com/channel/${CHANNEL_ID}`;
}

/**
 * Get the channel ID
 * @returns {string} YouTube channel ID
 */
export function getChannelId() {
  return CHANNEL_ID;
}
