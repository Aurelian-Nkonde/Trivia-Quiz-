import { HTTP_Methods } from "./constants/http_methods";

export async function apiRequest(
  method: HTTP_Methods,
  url: string = "",
  data = {}
) {
  // const cookiesStore = await cookies();

  // Default options are marked with *
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: method !== HTTP_Methods.GET ? JSON.stringify(data) : null, // body data type must match "Content-Type" header
  });

  if (!response.ok) {
    const errorObj = await response.json();
    throw errorObj;
  }

  return await response.json();
}