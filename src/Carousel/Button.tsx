interface BtnProps {
  btn: string;
  cate: string;
}

export default function ButtonComponent({ btn, cate }: BtnProps) {
  let text = "";
  if (cate === "github") text = "github";
  else if (cate === "notion") text = "notion";
  else if (cate === "site") text = "site";
  else if (cate === "youtube") text = "youtube";

  return (
    <a href={btn} target="_blank">
      {text}
    </a>
  );
}
