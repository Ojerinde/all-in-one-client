import React, { ReactNode } from "react";

interface NotificationModalCardProps {
  children: ReactNode;
}

const NotificationModalCard: React.FC<NotificationModalCardProps> = ({
  children,
}) => {
  return (
    <div className="max-w-[46.8rem] p-10 border bg-custom-white border-custom-grey-light-2 rounded-xl shadow-[0px_20px_20px_0px_rgba(0,0,0,0.08),0px_0px_2px_0px_rgba(0,0,0,0.12)]">
      {children}
    </div>
  );
};
export default NotificationModalCard;
