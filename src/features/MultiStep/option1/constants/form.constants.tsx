import { CreditCard, MapPin, User } from "lucide-react";
import AccountStep from "../components/AccountStep";
import AddressStep from "../components/AddressStep";
import PersonalStep from "../components/PersonalStep";
import {
  accountSchema,
  addressSchema,
  personalSchema,
} from "../schemas/form.schema";

export const steps = [
  {
    id: "personal",
    title: "ข้อมูลส่วนตัว",
    icon: User,
    component: <PersonalStep />,
    schema: personalSchema,
  },
  {
    id: "address",
    title: "ที่อยู่",
    icon: MapPin,
    component: <AddressStep />,
    schema: addressSchema,
  },
  {
    id: "account",
    title: "บัญชี",
    icon: CreditCard,
    component: <AccountStep />,
    schema: accountSchema,
  },
] as const;
