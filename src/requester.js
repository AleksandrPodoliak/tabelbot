export async function requester(payload = {}) {

  try {
    const resp = await fetch(`https://science-school.herokuapp.com/${payload.method}`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    const data = await resp.json();
    return data

  } catch (error) {
    throw new Error(error)
  }
}