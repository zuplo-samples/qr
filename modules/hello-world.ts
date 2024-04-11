import { HttpProblems, ZuploContext, ZuploRequest } from "@zuplo/runtime";
import { getHtml } from "./qr-js";

export default async function (request: ZuploRequest, context: ZuploContext) {

  const url = request.query.url;

  if (!url) {
    return HttpProblems.badRequest(request, context, { detail: "The query parameter 'url' is required, e.g. ?url=https://example.com/"});
  }
  
  return new Response(getHtml(request.query.url), 
  { headers: {
    "content-type": "text/html"
  }});
}
