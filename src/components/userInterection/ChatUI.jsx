import React, { useState, useRef } from "react";
import { Image, Location } from "../../assets/icons/Chat";
import { useTranslation } from "react-i18next";

export default function ChatUI() {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([
    { text: t("Hello"), sender: "left", time: "11:15 am" },
    { text: t("Please send a photo"), sender: "right", time: "11:17 am" },
    {
      text: t("Okay, I am going to send you a photo"),
      sender: "left",
      time: "11:18 am",
    },
    {
      text: t("Ok, I am waiting for your photo"),
      sender: "right",
      time: "11:20 am",
    },
  ]);

  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "pm" : "am";
    return `${hours}:${minutes} ${ampm}`;
  };

  const sendMessage = () => {
    if (input.trim() === "") return;

    const time = getCurrentTime();
    setMessages((prev) => [...prev, { text: input, sender: "right", time }]);
    setInput("");

    // Auto reply after 1 sec
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: t("Got it! I will send it soon."),
          sender: "left",
          time: getCurrentTime(),
        },
      ]);
    }, 1000);
  };

  return (
    <div className="bg-[#0F131C] w-full flex justify-center items-center rounded-xl border border-gray-800">
      <div className="bg-[#0F131C] w-full rounded-xl overflow-hidden shadow-lg font-sans flex flex-col h-[675px] min-[1520px]:h-[725px] min-[1920px]:h-screen">
        {/* Header */}
        <div className="p-4 border-b border-[#1f2226] bg-[#17202C]">
          <h1 className="text-[#FFFFFFCC] text-[16px] font-semibold">
            {t("Chat")}
          </h1>
          <p className="text-[#FFFFFF80] text-[12px]">
            {t("Encrypted messaging")}"
          </p>
        </div>

        {/* Chat Body with fixed height */}
        <div className="p-4 mb-7 space-y-5 overflow-y-auto custom-scroll-chat h-[513px] min-[1520px]:h-[563px] min-[1920px]:h-screen">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={msg.sender === "right" ? "text-right" : "text-left"}
            >
              <p
                className={`leading-tight ${
                  msg.sender === "right"
                    ? "bg-[#21a366] text-white"
                    : "bg-[#202225] text-gray-200"
                } rounded-md px-3 py-2 inline-block text-[16px]`}
              >
                {t(msg.text)}
              </p>
              <p className="text-[11px] text-gray-500 mt-0.5">{msg.time}</p>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Footer */}
        <div className="flex items-center p-3 border-t border-[#1f2226] bg-[#0F131C]">
          <div title="image" className="text-gray-400 mr-3 text-lg">
            <Image />
          </div>
          <div title="location" className="text-gray-400 mr-3 text-sm">
            <Location />
          </div>
          <div className="relative w-full">
            <input
              type="text"
              placeholder={t("Type here")}
              className="flex-1 bg-transparent outline-none text-gray-300 placeholder-gray-500 text-[13px] border border-gray-800 rounded-full py-2 px-4 w-full"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="text-gray-400 text-lg absolute top-1 right-3"
              onClick={sendMessage}
            >
              ➤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
