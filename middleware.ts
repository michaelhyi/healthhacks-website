export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/apply", "/confirm"],
};
