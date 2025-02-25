import { auth0 } from "@/lib/auth0";

//API route that acts as a proxy for every request to the FundWise API
export async function GET(request: Request, props: { params: Promise<{ args: string[] }> }) {
  const params = await props.params;

  //Get the arguments and search params from the current URL
  const { args } = params;

  const url = new URL(request.url);
  const searchParams = url.searchParams;

  try {
    //Format a new URL based on the arguments and search params
    const requestUrl = new URL(`${process.env.FUNDWISE_BASE_URL}/api/${args.join("/")}`);
    searchParams.forEach((value, key) => requestUrl.searchParams.set(key, value));

    const requestUrlString = requestUrl.toString();

    //Get the access token from the current user session when the user is logged in
    const session = await auth0.getSession();
    const token = session?.tokenSet.accessToken;

    //Make a request to the FundWise API
    const response = await fetch(requestUrlString, {
      method: "GET",
      headers: token ? {
        //Send the access token as a Bearer token in the header
        Authorization: `Bearer ${token}`,
      } : undefined,
    });

    //Get the JSON payload in the response
    const payload = await response.json();

    //Check if there was an error
    if (!response.ok) {
      throw new Error(payload);
    }

    //Return the payload
    return Response.json(payload);
  } catch (error) {
    //Something went wrong. Log the error and return a 400 status code
    console.error(error);
    return Response.json(error, { status: 400 });
  }
}