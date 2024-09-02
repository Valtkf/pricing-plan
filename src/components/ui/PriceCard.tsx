import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EssentielIcon from "./icon/EssentielIcon";

type CardProps = React.ComponentProps<typeof Card> & {
  title: string;
  pricemonthly: string;
  priceyearly: string;
  options: string[];
  isUltime?: boolean;
  isYearly?: boolean;
};

export function PriceCard({
  title,
  pricemonthly,
  priceyearly,
  options,
  className,
  isUltime,
  isYearly,
  ...props
}: CardProps) {
  return (
    <Card
      className={cn(
        "mt-12",
        isUltime ? "w-[400px] h-[732px]" : "w-[375px] h-[637px]",
        className
      )}
      {...props}
    >
      <CardHeader>
        <EssentielIcon />
        <CardTitle className="text-4xl">{title}</CardTitle>
        <CardDescription>
          {isYearly ? `${priceyearly} /year` : `${pricemonthly} /month`}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-4 rounded-md">
            <Check className="h-4 w-4 text-green-500" />
            <div className="flex-1 text-lg">{option}</div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <button className="w-full h-12 bg-blue-500 text-white rounded-md">
          Je m'abonne
        </button>
      </CardFooter>
    </Card>
  );
}
