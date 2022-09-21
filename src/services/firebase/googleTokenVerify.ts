const headers = {
  "Content-Type": "application/json",
};

export async function googleTokenVerify(accessToken: string) {
  try {
    const response = await fetch("http://localhost:3000/api/authToken", { method: "POST", headers, body: JSON.stringify({ accessToken }) });

    if (response.status !== 200) return false;

    return true;
  } catch (err) {
    return false;
  }
}
