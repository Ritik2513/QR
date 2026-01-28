import { useState } from "react";
import QRCode from "react-qr-code";
import { encodeData } from "../utils/encode";
import QRDownload from "../components/QRDownload";

const Home = () => {
  const [profile, setProfile] = useState({
    name: "",
    bio: "",
    linkedin: "",
    instagram: "",
    facebook:"",
    website: "",
  });

  const encoded = encodeData(profile);
  const qrValue = `${window.location.origin}/profile?data=${encoded}`;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 gap-4">
      <h1 className="text-2xl font-bold">Linktree QR Generator</h1>

      {Object.keys(profile).map((key) => (
        <input
          key={key}
          placeholder={key.toUpperCase()}
          className="w-full max-w-md p-2 border rounded"
          value={profile[key]}
          onChange={(e) =>
            setProfile({ ...profile, [key]: e.target.value })
          }
        />
      ))}

      <div
        id="qr-code"
        className="bg-white p-4 rounded-xl shadow"
      >
        <QRCode value={qrValue} size={180} />
      </div>

      <QRDownload />
    </div>
  );
};

export default Home;