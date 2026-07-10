const path = require("path");
const fs = require("fs/promises");
const sharp = require("sharp");

const IMAGES_DIR = path.resolve(__dirname, "..", "lib", "images");

const imageJobs = [
  { file: "headshot.png", widths: [160, 320, 480] },
  { file: "mainbg.jpg", widths: [768, 1280, 1920] },
  { file: "reposti.png", widths: [480, 768, 1024] },
  { file: "therapuppy-front.jpeg", widths: [480, 768, 1024] },
  { file: "ss1.png", widths: [480, 768, 1024] },
  { file: "js30.png", widths: [480, 768, 1024] },
  { file: "pokemon-go-box-values.png", widths: [480, 768, 1024] },
];

async function optimizeOne(job) {
  const sourcePath = path.join(IMAGES_DIR, job.file);
  const ext = path.extname(job.file);
  const baseName = path.basename(job.file, ext);

  for (const width of job.widths) {
    const source = sharp(sourcePath);
    const metadata = await source.metadata();

    if (!metadata.width || metadata.width < width) {
      continue;
    }

    const resized = source.resize({ width, withoutEnlargement: true });

    await resized
      .clone()
      .avif({ quality: 48, effort: 4 })
      .toFile(path.join(IMAGES_DIR, `${baseName}-${width}.avif`));

    await resized
      .clone()
      .webp({ quality: 72, effort: 4 })
      .toFile(path.join(IMAGES_DIR, `${baseName}-${width}.webp`));
  }
}

(async () => {
  await fs.access(IMAGES_DIR);

  for (const job of imageJobs) {
    await optimizeOne(job);
  }

  console.log("Image optimization complete.");
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
