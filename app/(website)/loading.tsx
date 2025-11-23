import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <LoaderCircle color="#f97316" className="animate animate-spin" />
    </div>
  );
}
