import Image from "next/image";

// @ts-ignore
export const Logo = (props) => {
  return (
    <Image
      {...props}
      alt={"logo"}
      src={"/logo.png"}
      width={100}
      height={100}
      className="mx-auto h-6 w-6"
    />
  );
};
// @ts-ignore
export const LogoCustom = (props) => {
  return (
    <Image
      {...props}
      alt={"logo"}
      src={"/logo.png"}
      width={props.width}
      height={props.width}
    />
  );
};
