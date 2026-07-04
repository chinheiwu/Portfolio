import "server-only";

// Master viewer list — a Google Sheet with "User Name" and "Email" columns.
// Displayed on /viewers. Add more rows to the sheet and they'll show up
// immediately since this is fetched live on every request, no redeploy needed.
const DEFAULT_SHEET_ID = "1BTzkldLDWuCdOR5jX4MwTorl0ObOcNbsdJZfwtj0Jkg";

function getSheetCsvUrl() {
  const sheetId = process.env.ALLOWLIST_SHEET_ID || DEFAULT_SHEET_ID;
  return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;
}

export interface AllowedViewer {
  name: string;
  email: string;
}

function parseCsv(csv: string): AllowedViewer[] {
  const lines = csv.trim().split(/\r?\n/);
  const rows = lines.slice(1); // skip header row
  return rows
    .map((line) => {
      const [name, email] = line.split(",").map((cell) => cell.trim());
      return { name, email: email?.toLowerCase() };
    })
    .filter((row) => row.email);
}

export async function fetchAllowedViewers(): Promise<AllowedViewer[]> {
  const res = await fetch(getSheetCsvUrl(), { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch viewer allowlist: ${res.status}`);
  }
  const csv = await res.text();
  return parseCsv(csv);
}
