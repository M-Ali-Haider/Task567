import AgeSVG from "@/assets/age";
import EnvelopeSVG from "@/assets/envelope";
import NameSVG from "@/assets/name";
import PasswordSVG from "@/assets/password";
import PhoneSVG from "@/assets/phone";
import StreetSVG from "@/assets/street";

export const randomOptions = [
  { chosen: "name", icon: <NameSVG /> },
  { chosen: "email", icon: <EnvelopeSVG /> },
  { chosen: "age", icon: <AgeSVG /> },
  { chosen: "street", icon: <StreetSVG /> },
  { chosen: "phone", icon: <PhoneSVG /> },
  { chosen: "password", icon: <PasswordSVG /> },
];

export const randomOptions2 = {
  chosen: {
    0: "name",
    1: "email",
    2: "age",
    3: "street",
    4: "phone",
    5: "password",
  },
  icon: {
    0: <NameSVG />,
    1: <EnvelopeSVG />,
    2: <AgeSVG />,
    3: <StreetSVG />,
    4: <PhoneSVG />,
    5: <PasswordSVG />,
  },
};
