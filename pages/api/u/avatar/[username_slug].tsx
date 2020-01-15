import { NextApiResponse, NextApiRequest } from "next";
import fetch from "isomorphic-unfetch";

export default async function avatar(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { username_slug },
  } = req;

  let userAvatar = `https://www.tinygraphs.com/spaceinvaders/${username_slug}?theme=heatwave&numcolors=4&size=220&fmt=svg`;
  try {
    const gravatarResponse = await fetch(
      `https://unavatar.now.sh/facebook/${username_slug}?json&fallback=false`
    ).then(r => r.json());

    userAvatar = gravatarResponse.url || userAvatar;
    // eslint-disable-next-line no-empty
  } catch {}

  res.writeHead(302, { Location: userAvatar }).end();
}
