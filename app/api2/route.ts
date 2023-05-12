import { NextResponse } from "next/server";

export const GET = async () => {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve("hello"), 1000)
  );

  return NextResponse.json({
    message: data,
  });
};

export const POST = () => {
  return NextResponse.json({
    message: "hello",
  });
};
