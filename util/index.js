import path from "path";
import { ACTIVE_CHAIN_ID } from "./constants";


export const signatureUrl = (cid) => `${window.location.origin}/sign/${cid}`;

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getExplorerUrl = (hash, useTx) =>
  `${ACTIVE_CHAIN_ID.url}${useTx ? "tx/" : "address/"}${hash}`;

export const createJsonFile = (signload, fileName) => {
  const st = JSON.stringify(signload);
  const blob = new Blob([st], { type: "application/json" });
  const fileData = new File([blob], fileName);
  return fileData;
};

export const getDateStringFromTimestamp = (ts, showTime) => {
  const d = new Date(ts);
  if (showTime) {
    return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
  }
  return d.toLocaleDateString();
};

export const shouldHideNav = (pathname) => {
  return pathname.startsWith("/signup") || pathname.startsWith("/login")
}

export const col = (k, render) => ({
  title: capitalize(k),
  dataIndex: k,
  key: k,
  render,
});

export function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}
