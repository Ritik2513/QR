import { useLocation } from "react-router-dom";
import { decodeData } from "../utils/decode";
import LinkButton from "../components/LinkButton";

const Profile = () => {
  const query = new URLSearchParams(useLocation().search);
  const data = query.get("data");
  const profile = data ? decodeData(data) : {};

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex justify-center px-4">
      <div className="w-full max-w-sm py-10 space-y-6">
        {/* Avatar */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center text-3xl font-bold">
            {profile.name?.[0] || "U"}
          </div>
          <h1 className="text-xl font-bold">{profile.name}</h1>
          <p className="text-sm text-gray-300 text-center">
            {profile.bio}
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {Object.entries(profile).map(
            ([key, value]) =>
              value &&
              !["name", "bio"].includes(key) && (
                <LinkButton
                  key={key}
                  label={key.toUpperCase()}
                  url={value}
                />
              )
          )}
        </div>

        <p className="text-xs text-center text-gray-500 pt-6">
          Powered by YourBrand
        </p>
      </div>
    </div>
  );
};

export default Profile;