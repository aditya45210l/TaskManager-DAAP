"use client";
import {
  useState,
  ReactNode,
  createContext,
  useContext,
  useEffect,
} from "react";
import config from "../../rainbowKitConfig";
import {
  createAuthenticationAdapter,
  RainbowKitAuthenticationProvider,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createSiweMessage } from "viem/siwe";

export type AuthenticationStatus =
  | "loading"
  | "authenticated"
  | "unauthenticated";

export const AuthContext = createContext<AuthenticationStatus>("loading");

export function Provider({ children }: { children: ReactNode }) {
  const [client] = useState(() => new QueryClient());
  const [AUTHENTICATION_STATUS, setAUTHENTICATION_STATUS] =
    useState<AuthenticationStatus>("loading");
  const authenticationAdapter = createAuthenticationAdapter({
    getNonce: async () => {
      const response = await fetch("/api/nonce");
      return await response.text();
    },

    createMessage: ({ nonce, address, chainId }) => {
      return createSiweMessage({
        domain: window.location.host,
        address,
        statement: "Sign in with Ethereum to the app.",
        uri: window.location.origin,
        version: "1",
        chainId,
        nonce,
      });
    },

    verify: async ({ message, signature }) => {
      setAUTHENTICATION_STATUS("loading");
      const verifyRes = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, signature }),
      });
      setAUTHENTICATION_STATUS(
        verifyRes.ok ? "authenticated" : "unauthenticated"
      );

      return Boolean(verifyRes.ok);
    },

    signOut: async () => {
      await fetch("/api/logout");
      setAUTHENTICATION_STATUS("unauthenticated");
    },
  });

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/api/me");
      const result = await res.json();
      console.log("i am render! provider!");
      if (result.ok) {
        setAUTHENTICATION_STATUS("authenticated");
      } else {
        setAUTHENTICATION_STATUS("unauthenticated");
      }
    };
    checkAuth();
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitAuthenticationProvider
          adapter={authenticationAdapter}
          status={AUTHENTICATION_STATUS}
        >
          <RainbowKitProvider>
            <AuthContext.Provider value={AUTHENTICATION_STATUS}>
              {children}
            </AuthContext.Provider>
          </RainbowKitProvider>
        </RainbowKitAuthenticationProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
