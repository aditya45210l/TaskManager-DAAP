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
import axios from "axios";
import { useTaskMangerStore } from "@/store/AuthUserStore";
import { customRainbowKitTheme, shadcnRainbowKitTheme } from "@/styles/connectTheam";

export type AuthenticationStatus =
  | "loading"
  | "authenticated"
  | "unauthenticated";
export type UserDataType = {
  name: string;
  wallet: string;
  rating: number;
  earning: number;
  created: [];
  claimed: [];
  claimedCount: number;
  createdCount: number;
};
export interface AuthContextType {
  status: AuthenticationStatus;
}

export const AuthContext = createContext<AuthContextType>({
  status: "loading",
});

export function Provider({ children }: { children: ReactNode }) {
  const [client] = useState(() => new QueryClient());
  const fetchUserData = useTaskMangerStore((state) => state.fetchUserData);
  const [AUTHENTICATION_STATUS, setAUTHENTICATION_STATUS] =
    useState<AuthenticationStatus>("loading");
  const checkAndCreateUser = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/v1/user/", {
        withCredentials: true, // Equivalent to withCredentials: true
      });

      if (!data.isUser) {
        const createRes = await axios.post(
          "http://localhost:5000/api/v1/user/create",
          {},
          { withCredentials: true }
        );
        if (createRes.data.success) {
          return;
        } else {
          throw new Error(createRes.data.message);
        }
      }
      console.log("user found from userFetch: ", data.data);
      return;
    } catch (e) {
      console.log("Error on the time of fetch:", e);
    }
  };

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
      if (verifyRes.ok) {
        checkAndCreateUser();
        fetchUserData();
      }
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
      if (result.ok) {
        fetchUserData();
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
          <RainbowKitProvider theme={customRainbowKitTheme}>
            <AuthContext.Provider
              value={{
                status: AUTHENTICATION_STATUS,
              }}
            >
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
