import "server-only";
import { createHmac, timingSafeEqual } from "crypto";

export const SITE_ACCESS_COOKIE = "site_access";
const GRANTED_VALUE = "granted";

function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("AUTH_SECRET environment variable is not set");
  return secret;
}

function sign(value: string) {
  return createHmac("sha256", getSecret()).update(value).digest("hex");
}

export function createAccessToken() {
  return `${GRANTED_VALUE}.${sign(GRANTED_VALUE)}`;
}

export function verifyAccessToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const [value, signature] = token.split(".");
  if (value !== GRANTED_VALUE || !signature) return false;

  try {
    const expected = sign(value);
    const expectedBuf = Buffer.from(expected);
    const actualBuf = Buffer.from(signature);
    if (expectedBuf.length !== actualBuf.length) return false;

    return timingSafeEqual(expectedBuf, actualBuf);
  } catch {
    return false;
  }
}

export function checkPassword(candidate: string): boolean {
  const correct = process.env.SITE_PASSWORD;
  if (!correct) throw new Error("SITE_PASSWORD environment variable is not set");

  const correctBuf = Buffer.from(correct);
  const candidateBuf = Buffer.from(candidate);
  if (correctBuf.length !== candidateBuf.length) return false;

  return timingSafeEqual(correctBuf, candidateBuf);
}
