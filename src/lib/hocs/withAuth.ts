import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";

export function withAuth(
  getServerSideProps: (
    context: GetServerSidePropsContext & { session: Session },
  ) => Promise<GetServerSidePropsResult<any>>,
) {
  return async (context: GetServerSidePropsContext & { session: Session }) => {
    const session = await getSession(context);

    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    context.session = session;

    return await getServerSideProps(context);
  };
}
