import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";
import prismadb from "@/lib/prismadb";
import bodyParser from "body-parser";

// Enable JSON parsing for the request body
const parseJson = bodyParser.json();

export async function POST(request: NextRequest, res: NextResponse) {
  if (request.method !== "POST")
    return NextResponse.json({ message: "invalid method" }, { status: 405 });
  const body = await request.json();
  if (!body) return NextResponse.json({ message: "invalid body" }, { status: 400 });

  console.log("body", body);
  try {
    console.log("body", body)
    const { title, description, reply, authorId } = body;
    const url = new URL(request.url, 'http://localhost')
        const discussion =  await prismadb.discussion.create({
            data: {
                title,
                description,
                // replies: reply,
                authorId: '65a22f02c1568ae8aa098b8a'
            }
        })
        if (!discussion) {
            return NextResponse.json({
                message: 'error'
            }, {
                status: 400
            })
        }
    console.log("hitted");
    return NextResponse.json({
      // id:discussion.id,
      // title: discussion.title,
      // description: discussion.description,
      messa: "hello",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, {
      status: 500,
    });
  }
}
