import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ActivityBuilderConfig, Offer } from "@/types/ActivityBuilderConfig";
import {
  DefaultPaywallConfig,
  DefaultAdConfig,
  AILogoOffer,
  AIWriterOffer,
} from "@/data/activitybuildercontent";

const ActivityBuilderBaseConfig: ActivityBuilderConfig = {
  adConfig: DefaultAdConfig,
  paywallConfig: { ...DefaultPaywallConfig },
};

function getActivityBuilderConfig(headers: Record<string, string>) {
  const countryCode = headers["x-country-code"];
  const launchCount = headers["x-launch-count"];
  const transactionID = headers["x-transaction-id"];

  const result: ActivityBuilderConfig = structuredClone(
    ActivityBuilderBaseConfig
  );

  const offers: Offer[] = [AILogoOffer, AIWriterOffer];
  const randomElement = offers[Math.floor(Math.random() * offers.length)];
  result.paywallConfig.offer = randomElement;

  return result;
}

export async function GET(request: NextRequest) {
  const clientNameHeader = request.headers.get("client-name");

  if (clientNameHeader === "ActivityBuilder") {
    const headers = Object.fromEntries(request.headers.entries());
    const config = getActivityBuilderConfig(headers);
    return NextResponse.json(config, { status: 200 });
  }

  return NextResponse.json({ errorCode: "INVALID_CLIENT" }, { status: 401 });
}
