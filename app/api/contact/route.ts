import { NextRequest } from "next/server";
import { ContactController } from "@/core/controllers/contactController";

const contactController = new ContactController();

export async function POST(request: NextRequest) {
    return await contactController.sendEmail(request);
}