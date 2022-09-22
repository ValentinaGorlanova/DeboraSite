const headers = {
  "Content-Type": "application/json",
};

export async function googleTokenVerify(accessToken: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/authToken`, {
      method: "POST",
      headers,
      body: JSON.stringify({ accessToken }),
    });

    console.log(response);
    if (response.status !== 200) return false;

    return true;
  } catch (err) {
    return false;
  }
}
