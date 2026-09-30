# AI image prompts for the NMT website

Paste these into an AI image generator (ChatGPT / DALL·E, Google Gemini / Imagen, Midjourney,
Adobe Firefly, Leonardo, Ideogram). Save the result with the **exact filename** shown, then copy it into
`public/images/stock/` (overwriting the current photo). The site picks it up automatically.

Tips
- Always ask for **landscape 16:9** (hero/backgrounds) or the ratio listed, at least **1920 px wide**.
- Export as JPG or WebP. If the filename extension changes (e.g. `.png`), update the path in `src/data/site.js`.
- Midjourney: append `--ar 16:9 --style raw --v 7`. DALL·E / Gemini: add "photorealistic, 16:9".
- Avoid logos/brand names in the image — AI tools often invent fake logos.
- Shared style suffix for every prompt (keeps the site consistent):
  > *cinematic industrial photography, dramatic low-key lighting, deep navy and charcoal tones with red accent highlights, shallow depth of field, ultra-detailed, 8k, photorealistic, no text, no logos, no watermark*

---

## Hero slider (16:9, 2400×1350)

| File | Prompt |
|---|---|
| `offshore-dusk.jpg` | An offshore oil drilling platform at blue-hour dusk, thousands of warm deck lights, gas flare burning, calm ocean reflecting the lights, dramatic purple-orange sky, wide shot + style suffix |
| `refinery-night.webp` | A sprawling oil refinery at night, glowing towers and pipe racks, steam rising, long-exposure light trails in the foreground + style suffix |
| `welding.webp` | Close-up of a gloved welder fabricating a heavy steel high-pressure fitting, bright blue-white arc and orange sparks flying, dark workshop background + style suffix |
| `hero-hammer-union.jpg` *(optional new slide)* | Macro shot of a red and black forged hammer union (oilfield pipe connection with three-lug wing nut) being tightened with a sledgehammer on a drilling rig floor, droplets of oil, motion blur on the hammer + style suffix |

## Industries gallery (tiles; 4:3 or 3:4)

| File | Ratio | Prompt |
|---|---|---|
| `offshore-rig-aerial.webp` | 16:9 | Aerial drone shot of a jack-up drilling rig in emerald-green sea with a red supply vessel alongside + style suffix |
| `pumpjack.webp` | 4:3 | A row of oilfield pumpjacks silhouetted at golden sunrise in a desert landscape, dust in the air + style suffix |
| `gauge-valves.webp` | 3:4 | Close-up of a high-pressure well-testing manifold: analogue pressure gauge reading high, red hand-wheel valves, steel piping, condensation + style suffix |
| `lathe.webp` | 4:3 | A heavy CNC lathe machining a large steel oilfield flange, coolant spray, metal chips curling, green machine light + style suffix |

## Services cards (4:3, 1600×1200)

| File | Prompt |
|---|---|
| `pressure-gauge.webp` | Technician in safety gear reading a digital and analogue pressure test bench at 15,000 PSI, test hoses connected to a red steel test unit + style suffix |
| `valves.webp` | A hydraulic power unit in an industrial workshop — electric motor, hydraulic pump, hoses and gauges, mechanic inspecting it with a flashlight + style suffix |
| `cnc-tools.webp` | Engineer reviewing a 3D CAD model of an oilfield adapter flange on a large monitor, next to the finished machined steel part on the desk + style suffix |
| `welding-sparks.webp` | Glowing orange-hot steel billet being shaped under an open-die forging hammer, sparks and scale flying, dark forge + style suffix |

## Product hero shots (optional — replace product photos; 4:3, white or dark studio background)

| File (in `public/images/`) | Prompt |
|---|---|
| `hammer-union-4.jpg` | Studio product photo of an oilfield hammer union (Figure 1502), red forged body with black three-lug wing nut, on dark slate surface, soft rim light |
| `pup-joint.jpg` | Studio product photo of a set of integral pup joints (short high-pressure pipes with hammer-union ends), painted red, arranged diagonally on dark background |
| `swivel-joints.jpg` | Studio product photo of a long-radius chiksan swivel joint with three 90-degree elbows, industrial grey paint, dark background |
| `steel-hose.jpg` | Studio product photo of braided stainless-steel high-pressure hose assemblies with flanged ends, coiled, on black background |
| `dsaf.png` | Studio product photo of an API 6A double-studded adapter flange with studs installed, red painted body, isolated on white |

> Before publishing, make sure the product images look like NMT's real products — customers will expect what they see.
