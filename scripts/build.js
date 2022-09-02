require("esbuild")
  .build({
    entryPoints: ["./src/comunica.ts"],
    bundle: true,
    outdir: "./esm",
    format: "esm",
    bundle: true,
    logLevel: "info",
    minify: true,
  })
  .catch(() => process.exit(1));
