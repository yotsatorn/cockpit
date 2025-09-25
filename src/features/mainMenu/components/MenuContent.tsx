import { ClipboardCheck, FileText, CheckCircle, LogOut } from "lucide-react";
import { useNavigate } from "react-router";

export default function MenuContent() {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 1,
      icon: <ClipboardCheck className="w-16 h-16 text-white" />,
      title: "รับรถ",
      onClick: () => console.log("รับรถ clicked"),
    },
    {
      id: 2,
      icon: <FileText className="w-16 h-16 text-white" />,
      title: "เสนอราคา",
      onClick: () => navigate("/vehicle-inspection"),
    },
    {
      id: 3,
      icon: <CheckCircle className="w-16 h-16 text-white" />,
      title: "ติดตามรายการ",
      onClick: () => console.log("ติดตามรายการ clicked"),
    },
    {
      id: 4,
      icon: <LogOut className="w-16 h-16 text-white" />,
      title: "ออกจากระบบ",
      onClick: () => navigate("/"),
    },
  ];

  return (
    <div className="h-screen bg-[#fff200] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex justify-center py-6 flex-shrink-0">
        <h1 className="text-4xl md:text-5xl font-bold text-black tracking-wider">
          COCKPIT
        </h1>
      </div>

      {/* Menu Grid */}
      <div className="flex-1 px-6 pb-6 min-h-0 flex items-center justify-center">
        <div className="w-full max-w-lg grid grid-cols-2 gap-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={item.onClick}
              className="bg-red-600 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-red-700 transition-colors duration-200 shadow-lg border-4 border-white aspect-square"
            >
              <div className="mb-3">{item.icon}</div>
              <h2 className="text-white text-xl font-bold text-center leading-tight">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
