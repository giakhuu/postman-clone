import { HttpMethod } from "@/lib/enum/HttpMethod";

const METHOD_COLORS: Record<HttpMethod, string> = {
  [HttpMethod.GET]: '#10B981',
  [HttpMethod.POST]: '#F59E0B',
  [HttpMethod.PUT]: '#3B82F6',
  [HttpMethod.DELETE]: '#EF4444',
};

const getMethodColor = (method: HttpMethod | string): string => {
  return METHOD_COLORS[method as HttpMethod] || '#6B7280'; // fallback default
};

export default getMethodColor;
