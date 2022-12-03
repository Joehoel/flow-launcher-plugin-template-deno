import { open } from "https://deno.land/x/open@v0.0.5/index.ts";
import { Flow } from "./flow-launcher-helper.ts";

const { params, on, showResult, run } = new Flow<"search">("assets/deno.png");

// This is where the magic happens
on("query", () => {
  const qp = new URLSearchParams({
    query: params,
  });

  const url = `https://deno.land/x?${qp}`;

  showResult({
    title: `Search Deno package: ${params}`,
    subtitle: url,
    method: "search",
    params: [url],
    iconPath: "assets/deno.png",
  });
});

on("search", () => {
  const url = params;

  open(url);
});

run();
