"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { Wallet } from "lucide-react";
import Image from "next/image";

export const CustomConnectButton = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSigning, setIsSigning] = useState(false);

  return (
    <ConnectButton.Custom>
      {({
        account,
        openConnectModal,
        openAccountModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account;

        const handleConnectClick = async () => {
          setIsConnecting(true);
          try {
            await openConnectModal();
          } finally {
            setIsConnecting(false);
            setIsSigning(true); // assume signing happens after connect
            setTimeout(() => setIsSigning(false), 4000); // simulate signing time
          }
        };

        return (
          <span
            className="flex items-center h-[39px] w-[158px]"
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {!connected ? (
              <button
                onClick={handleConnectClick}
                className=" w-full h-full cursor-pointer bg-medium-dark border-2 border-blue-btn rounded-md transition-all active:scale-90 motion-safe:hover:scale-105 text-sm flex items-center justify-center gap-2 "
              >
                {isConnecting
                  ? "Connecting..."
                  : isSigning
                  ? "Signing..."
                  : "Connect"}
                <Wallet strokeWidth={2} size={18} />
              </button>
            ) : (
              <button
                onClick={openAccountModal}
                className=" w-full h-full cursor-pointer bg-medium-dark border-2 border-blue-btn rounded-md transition-all motion-safe:hover:scale-105 active:scale-90 text-sm flex items-center justify-center gap-2"
              >
                {/* Avatar + ENS/Address */}
                <Image
                  src={`https://api.dicebear.com/7.x/pixel-art/png?seed=${account.address}`}
                  alt="User Avatar"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <span className="truncate">{account.displayName}</span>
              </button>
              
            )}
          </span>
        );
      }}
    </ConnectButton.Custom>
  );
};
