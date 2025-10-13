import { NextResponse, NextRequest } from "next/server";
import {
  CreateContact,
  ContactsApi,
  ContactsApiApiKeys,
} from "@getbrevo/brevo";
import { apps } from "@/data/app";

function verifyClient(req: NextRequest): NextResponse | null {
  const clientNameHeader = req.headers.get("client-name");
  const clientKeyHeader = req.headers.get("client-key");

  if (!clientNameHeader || !clientKeyHeader) {
    return NextResponse.json({ errorCode: "NO_CLIENT" }, { status: 401 });
  }

  const environmentValue = process.env[clientNameHeader];

  if (!environmentValue) {
    return NextResponse.json({ errorCode: "NO_CLIENT" }, { status: 401 });
  }

  if (environmentValue !== clientKeyHeader) {
    return NextResponse.json({ errorCode: "INVALID_CLIENT" }, { status: 401 });
  }

  // Client verified, allow the request
  return null;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { appID, email, revenuecatID, isUserPro, isUserLifetime } = body;

  const authCheck = verifyClient(req);
  if (authCheck) return authCheck; // returns 401 if verification fails
  if (!email) {
    return NextResponse.json({ errorCode: "INVALID_REQUEST" }, { status: 400 });
  }

  const app = apps.find((app) => app.id === appID);

  let appSource = "";
  if (!app) {
    appSource = "Web";
  } else {
    appSource = app.id;
  }

  const apiKey = process.env["SIB_API_KEY"];
  let contactAPI = new ContactsApi();
  contactAPI.setApiKey(ContactsApiApiKeys.apiKey, apiKey || "");

  const contact = new CreateContact();
  contact.email = email;
  contact.attributes = {
    APP_SOURCE: appSource,
    REVENUECAT_IDENTIFIER: revenuecatID,
    IS_USER_PRO: isUserPro,
    IS_USER_LIFETIME: isUserLifetime,
  };

  try {
    await contactAPI.createContact(contact);
    return new NextResponse(null, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { errorCode: error.message },
      { status: error.status || 500 }
    );
  }
}
