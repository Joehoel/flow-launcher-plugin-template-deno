import { open } from "https://deno.land/x/opener@v1.0.1/mod.ts";
import { Flow } from "./flow-launcher-helper.ts";

const { params, on, showResult } = new Flow("assets/app.png");

showResult({
  title: "Hello World Typescript",
  subtitle: "Showing your query parameters: " + params + ". Click to open Flow's website",
  method: "do_something_for_query",
  iconPath: "assets/app.png",
  score: 0,
});

on("do_something_for_query", () => {
  const url = params;

  open(url);
});
