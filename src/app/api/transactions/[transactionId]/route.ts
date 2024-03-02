import { NextResponse } from "next/server";
import data from "../../../../../data.json";

export async function POST(request: Request, context: any) {
  const { transactionId } = context.params;
  const transaction = data.filter(
    (transaction) => transaction.id.toString() === transactionId
  );
  return NextResponse.json({
    transaction,
  });
  //   const data = await request.json();
  //   return NextResponse.json({
  //     data: data,
  //   });
}
