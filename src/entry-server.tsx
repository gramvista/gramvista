import { renderToReadableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
export async function render(path: string) {
  const stream = await renderToReadableStream(<StaticRouter location={path}><App /></StaticRouter>);
  await stream.allReady;
  return new Response(stream).text();
}
