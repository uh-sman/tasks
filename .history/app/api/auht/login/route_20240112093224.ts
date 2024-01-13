export async function POST(request: Request) {
    const body = await request.json()

    const { username, password } = body;
    return {
        username,
        password
    }
}