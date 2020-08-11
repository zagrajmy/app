import { NextApiRequest, NextApiResponse } from "next";

// TODO: Gravatar?
export default async function avatar(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { username_slug },
  } = req;

  let userAvatar =
    "https://www.tinygraphs.com/spaceinvaders/" +
    `${username_slug}?theme=heatwave&numcolors=4&size=220&fmt=svg`;
  try {
    const unavatarResponse = await fetch(
      `https://unavatar.now.sh/facebook/${username_slug}?json&fallback=false`
    ).then((r) => r.json());

    userAvatar = unavatarResponse.url || userAvatar;
  } catch {
    // nah, we don't care
  }

  res.writeHead(302, { Location: userAvatar }).end();
}
