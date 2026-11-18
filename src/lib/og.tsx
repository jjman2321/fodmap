import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

// One repeatable share-card system. Key text sits in the centre square (WhatsApp crops to it).
export function ogCard({ title, chip, chipColor = "#2E8B57" }: { title: string; chip?: string; chipColor?: string }) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#FBF8F3", color: "#1E2A23", padding: 80 }}>
        <div style={{ display: "flex", fontSize: 40, letterSpacing: -1 }}><span style={{ fontWeight: 300 }}>isit</span><span style={{ fontWeight: 700, color: "#2E8B57" }}>low</span><span style={{ fontWeight: 300 }}>fodmap</span></div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, textAlign: "center", marginTop: 36, lineHeight: 1.1, maxWidth: 900 }}>{title}</div>
        {chip ? <div style={{ display: "flex", marginTop: 36, fontSize: 40, fontWeight: 700, color: "#fff", background: chipColor, padding: "12px 32px", borderRadius: 999 }}>{chip}</div> : null}
      </div>
    ),
    OG_SIZE,
  );
}
