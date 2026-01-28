import { toPng } from "html-to-image";

const QRDownload = () => {
  const downloadQR = async () => {
    const node = document.getElementById("qr-code");
    const dataUrl = await toPng(node);

    const link = document.createElement("a");
    link.download = "my-qr.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <button
      onClick={downloadQR}
      className="mt-4 px-4 py-2 rounded-lg bg-black text-white text-sm hover:opacity-80"
    >
      Download QR
    </button>
  );
};

export default QRDownload;