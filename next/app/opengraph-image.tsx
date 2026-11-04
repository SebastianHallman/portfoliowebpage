import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Sebastian Hällman";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fraunces static cuts (OFL). See assets/fonts/OFL.txt.
// 144pt for the large name, 9pt so the subtitle keeps solid strokes.
// If a file cannot be read, next/og falls back to its built-in sans.
const frauncesDisplay = await readFile(
  join(process.cwd(), "assets/fonts/Fraunces144pt-SemiBold.ttf"),
).catch(() => null);
const frauncesText = await readFile(
  join(process.cwd(), "assets/fonts/Fraunces9pt-SemiBold.ttf"),
).catch(() => null);

export default function OpenGraphImage() {
  const displayFamily = frauncesDisplay ? "Fraunces Display" : "geist";
  const textFamily = frauncesText ? "Fraunces Text" : displayFamily;
  const fonts = [
    frauncesDisplay
      ? {
          name: "Fraunces Display",
          data: frauncesDisplay,
          style: "normal" as const,
          weight: 600 as const,
        }
      : null,
    frauncesText
      ? {
          name: "Fraunces Text",
          data: frauncesText,
          style: "normal" as const,
          weight: 600 as const,
        }
      : null,
  ].filter((font) => font !== null);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: "#030303",
      }}
    >
      <div
        style={{
          width: 16,
          height: "100%",
          backgroundColor: "#ddd92a",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: displayFamily,
            fontSize: 84,
            fontWeight: frauncesDisplay ? 600 : 400,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#ddd92a",
          }}
        >
          Sebastian Hällman
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontFamily: textFamily,
            fontSize: 40,
            fontWeight: textFamily === "geist" ? 400 : 600,
            lineHeight: 1.2,
            color: "#FAFDF6",
          }}
        >
          M.Sc. in Media Technology
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: fonts.length > 0 ? fonts : undefined,
    },
  );
}
