import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const rootDir = process.cwd();
const standaloneDir = path.join(rootDir, ".next", "standalone");
const publicSrc = path.join(rootDir, "public");
const publicDest = path.join(standaloneDir, "public");
const staticSrc = path.join(rootDir, ".next", "static");
const staticDest = path.join(standaloneDir, ".next", "static");

console.log("1. Building Next.js application with standalone output...");
execSync("npx next build", { stdio: "inherit" });

console.log("2. Copying public directory to standalone...");
if (fs.existsSync(publicSrc)) {
  fs.cpSync(publicSrc, publicDest, { recursive: true });
}

console.log("3. Copying static assets (.next/static) to standalone/.next/static...");
if (fs.existsSync(staticSrc)) {
  fs.cpSync(staticSrc, staticDest, { recursive: true });
}

console.log("4. Creating deployable zip archive (trupthi-cpanel-deploy.zip)...");
const zipPath = path.join(rootDir, "trupthi-cpanel-deploy.zip");
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

// Use PowerShell Compress-Archive on Windows
try {
  execSync(`powershell -Command "Compress-Archive -Path '${standaloneDir}\\*' -DestinationPath '${zipPath}' -Force"`, { stdio: "inherit" });
  console.log(`\n Deployment package ready: ${zipPath}`);
} catch (err) {
  console.error("Zip creation failed:", err);
}
