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
import { useState } from "react";
import DiamondIcon from "./icon/DiamondIcon";

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
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Card
      className={cn(
        "relative text-white",
        isUltime
          ? "card-ultime w-[403px] h-[730px] p-6 mt-10"
          : "w-[375px] h-[600px]", // Appliquer la classe conditionnellement
        className
      )}
      {...props}
    >
      <div className="relative z-10 mt-4">
        <CardHeader>
          {isUltime ? <DiamondIcon /> : <EssentielIcon />}{" "}
          {/* Condition pour changer l'icône */}
          <CardTitle className="text-4xl font-normal">{title}</CardTitle>
          <CardDescription className="text-white text-[46px] ">
            {isYearly ? (
              <>
                {priceyearly} / <span className="text-year">year</span>
              </>
            ) : (
              <>
                {pricemonthly} / <span className="text-month">month</span>
              </>
            )}
          </CardDescription>
        </CardHeader>

        <CardContent className=" gap-2 gradient-border flex justify-start flex-col">
          {options.map((option, index) => (
            <div key={index} className="flex items-center space-x-4 rounded-md">
              <Check className="h-4 w-4 text-green-500" />
              <div className="flex-1 text-lg">{option}</div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-center items-center">
          <button
            className={cn(
              "border-[1px] border-white rounded-[10px] w-[275px] h-[45px]",
              isClicked
                ? "bg-radial-gradient text-white"
                : "text-white bg-[#010B25]"
            )}
            onClick={handleClick}
          >
            Je m'abonne
          </button>
        </CardFooter>
      </div>
    </Card>
  );
}
