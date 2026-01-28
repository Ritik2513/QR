const LinkButton = ({ label, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="
        block w-full py-3 rounded-xl
        bg-white text-black font-semibold text-center
        shadow hover:scale-[1.02] hover:bg-gray-100
        transition-all
      "
    >
      {label}
    </a>
  );
};

export default LinkButton;