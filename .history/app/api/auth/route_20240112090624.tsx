export async function POST (request: Request) {
    return {
        status:200,
        body:JSON.stringify({message: 'hello'})
    }
}